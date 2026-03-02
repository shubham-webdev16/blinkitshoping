import { Plus, Minus } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

const ProductCard = ({ product, quantity, onAdd, onRemove }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-3 flex flex-col shadow-card hover:shadow-card-hover transition-shadow duration-200 relative group">
      {/* Discount badge */}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-md z-10">
          {product.discount}% OFF
        </span>
      )}

      {/* Image */}
      <div className="flex items-center justify-center h-28 sm:h-32 bg-muted rounded-lg mb-3 text-5xl select-none">
        {product.image}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col gap-1">
        <span className="text-[11px] text-muted-foreground font-medium">{product.unit}</span>
        <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-2">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mt-auto pt-2">
          <span className="text-sm font-bold text-foreground">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Add to cart */}
      <div className="mt-3">
        {quantity === 0 ? (
          <button
            onClick={onAdd}
            className="w-full py-2 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-accent transition-colors active:scale-95"
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center justify-between gradient-brand rounded-lg overflow-hidden">
            <button
              onClick={onRemove}
              className="p-2 text-primary-foreground hover:bg-primary/80 transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-primary-foreground font-bold text-sm">{quantity}</span>
            <button
              onClick={onAdd}
              className="p-2 text-primary-foreground hover:bg-primary/80 transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
