import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag, Loader2 } from "lucide-react";
import { CartItem } from "@/types/product";
import { initiateRazorpayCheckout } from "@/lib/razorpay";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalPrice: number;
  onAdd: (item: CartItem) => void;
  onRemove: (productId: number) => void;
  onClearCart?: () => void;
}

const CartDrawer = ({ isOpen, onClose, items, totalPrice, onAdd, onRemove, onClearCart }: CartDrawerProps) => {
  const [paying, setPaying] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const saveOrder = async (paymentId: string) => {
    const randomPart = crypto.randomUUID().split('-')[0].toUpperCase();
    const orderNumber = `BLK-${randomPart}`;
    const { data: order, error } = await supabase
      .from("orders")
      .insert({
        user_id: user!.id,
        order_number: orderNumber,
        total_amount: totalPrice,
        payment_id: paymentId,
        status: "placed",
      })
      .select("id")
      .single();

    if (error || !order) return null;

    const orderItems = items.map((item) => ({
      order_id: order.id,
      product_name: item.title,
      product_image: item.image,
      quantity: item.quantity,
      price: item.price,
    }));

    await supabase.from("order_items").insert(orderItems);
    return order.id;
  };

  const handleCheckout = async () => {
    if (!user) {
      toast.info("Please login first to place an order");
      navigate("/auth");
      onClose();
      return;
    }

    setPaying(true);
    await initiateRazorpayCheckout({
      amount: totalPrice,
      onSuccess: async (response) => {
        const orderId = await saveOrder(response.razorpay_payment_id);
        setPaying(false);
        onClearCart?.();
        toast.success("Order placed successfully! 🎉");
        onClose();
        if (orderId) navigate(`/orders/${orderId}`);
      },
      onError: (error) => {
        setPaying(false);
        toast.error(`Payment failed: ${error}`);
      },
    });
    setPaying(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-foreground/30 z-50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-bold text-foreground">My Cart</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-muted transition-colors">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-3">
              <ShoppingBag className="h-16 w-16 opacity-30" />
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm">Add items to get started</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-muted rounded-xl p-3">
                <span className="text-3xl">{item.image}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.unit}</p>
                  <p className="text-sm font-bold text-foreground mt-0.5">₹{item.price * item.quantity}</p>
                </div>
                <div className="flex items-center gap-1 gradient-brand rounded-lg overflow-hidden shrink-0">
                  <button onClick={() => onRemove(item.id)} className="p-1.5 text-primary-foreground">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="text-primary-foreground font-bold text-sm w-5 text-center">{item.quantity}</span>
                  <button onClick={() => onAdd(item)} className="p-1.5 text-primary-foreground">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span className="text-primary font-semibold">FREE</span>
            </div>
            <div className="flex justify-between text-base font-bold text-foreground">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={paying}
              className="w-full gradient-brand text-primary-foreground py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {paying && <Loader2 className="h-4 w-4 animate-spin" />}
              {paying ? "Processing..." : "Proceed to Checkout"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
