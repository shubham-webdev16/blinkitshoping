import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2, Package, MapPin, CreditCard, CheckCircle2, Truck, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface OrderItem {
  id: string;
  product_name: string;
  product_image: string | null;
  quantity: number;
  price: number;
}

interface OrderData {
  id: string;
  order_number: string;
  status: string;
  total_amount: number;
  delivery_address: string | null;
  payment_id: string | null;
  created_at: string;
}

const steps = [
  { key: "placed", label: "Order Placed", icon: Package },
  { key: "confirmed", label: "Confirmed", icon: CheckCircle2 },
  { key: "shipped", label: "Out for Delivery", icon: Truck },
  { key: "delivered", label: "Delivered", icon: MapPin },
];

const stepIndex: Record<string, number> = {
  placed: 0,
  confirmed: 1,
  shipped: 2,
  delivered: 3,
  cancelled: -1,
};

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderData | null>(null);
  const [items, setItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
      return;
    }
    if (user && id) {
      Promise.all([
        supabase.from("orders").select("*").eq("id", id).single(),
        supabase.from("order_items").select("*").eq("order_id", id),
      ]).then(([orderRes, itemsRes]) => {
        setOrder(orderRes.data as OrderData | null);
        setItems((itemsRes.data as OrderItem[]) || []);
        setLoading(false);
      });
    }
  }, [user, authLoading, id, navigate]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">
        Order not found
      </div>
    );
  }

  const currentStep = stepIndex[order.status] ?? 0;
  const isCancelled = order.status === "cancelled";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/orders" className="p-1.5 rounded-lg hover:bg-muted transition-colors">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <div>
            <h1 className="font-display text-lg font-bold text-foreground">Order Details</h1>
            <p className="text-xs text-muted-foreground">#{order.order_number}</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-4 space-y-4">
        {/* Tracking */}
        <div className="bg-card rounded-xl border border-border p-5">
          <h2 className="font-display text-sm font-bold text-foreground mb-5">
            {isCancelled ? "Order Cancelled" : "Order Tracking"}
          </h2>
          {isCancelled ? (
            <p className="text-sm text-destructive font-medium">This order has been cancelled.</p>
          ) : (
            <div className="flex items-center justify-between relative">
              {/* Progress line */}
              <div className="absolute top-5 left-5 right-5 h-0.5 bg-border" />
              <div
                className="absolute top-5 left-5 h-0.5 bg-primary transition-all duration-500"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%`, maxWidth: "calc(100% - 40px)" }}
              />
              {steps.map((step, i) => {
                const Icon = step.icon;
                const done = i <= currentStep;
                return (
                  <div key={step.key} className="flex flex-col items-center z-10 relative">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span
                      className={`text-[10px] mt-1.5 font-medium text-center w-16 ${
                        done ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Order Info */}
        <div className="bg-card rounded-xl border border-border p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {new Date(order.created_at).toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          {order.delivery_address && (
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{order.delivery_address}</span>
            </div>
          )}
          {order.payment_id && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span className="truncate">Payment: {order.payment_id}</span>
            </div>
          )}
        </div>

        {/* Items */}
        <div className="bg-card rounded-xl border border-border p-4">
          <h2 className="font-display text-sm font-bold text-foreground mb-3">
            Items ({items.length})
          </h2>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <span className="text-2xl w-10 text-center">{item.product_image || "📦"}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{item.product_name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-bold text-foreground">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-border flex justify-between">
            <span className="font-bold text-foreground">Total</span>
            <span className="font-bold text-foreground">₹{order.total_amount}</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetail;
