import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

interface RazorpayCheckoutOptions {
  amount: number;
  onSuccess?: (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => void;
  onError?: (error: string) => void;
}

export async function initiateRazorpayCheckout({ amount, onSuccess, onError }: RazorpayCheckoutOptions) {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    onError?.("Failed to load Razorpay SDK");
    return;
  }

  // Create order via edge function
  const { data, error } = await supabase.functions.invoke("create-razorpay-order", {
    body: { amount },
  });

  if (error || !data?.orderId) {
    onError?.(error?.message || data?.error || "Failed to create order");
    return;
  }

  const options = {
    key: data.keyId,
    amount: data.amount,
    currency: data.currency,
    name: "Blinkit Store",
    description: "Grocery Order",
    order_id: data.orderId,
    handler: (response: any) => {
      onSuccess?.(response);
    },
    theme: {
      color: "#0c831f",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.on("payment.failed", (response: any) => {
    onError?.(response.error?.description || "Payment failed");
  });
  rzp.open();
}
