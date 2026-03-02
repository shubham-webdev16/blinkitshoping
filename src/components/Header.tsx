import { ShoppingCart, Zap, MapPin, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  totalItems: number;
  totalPrice: number;
  onCartClick: () => void;
}

const Header = ({ totalItems, totalPrice, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="gradient-brand rounded-lg p-1.5">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            blinkit
          </span>
        </div>

        {/* Delivery info */}
        <div className="hidden sm:flex items-center gap-1 text-sm shrink-0">
          <MapPin className="h-4 w-4 text-primary" />
          <div>
            <p className="font-semibold text-foreground text-xs">Delivery in 10 mins</p>
            <p className="text-muted-foreground text-xs flex items-center gap-0.5">
              Home, Sector 62 <ChevronDown className="h-3 w-3" />
            </p>
          </div>
        </div>

        {/* Cart */}
        <button
          onClick={onCartClick}
          className="gradient-brand text-primary-foreground rounded-lg px-4 py-2 flex items-center gap-2 font-semibold text-sm transition-transform hover:scale-105 active:scale-95 relative"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 ? (
            <>
              <span className="hidden sm:inline">{totalItems} items</span>
              <span className="hidden sm:inline">· ₹{totalPrice}</span>
              <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs h-5 w-5 flex items-center justify-center p-0 sm:hidden">
                {totalItems}
              </Badge>
            </>
          ) : (
            <span className="hidden sm:inline">My Cart</span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
