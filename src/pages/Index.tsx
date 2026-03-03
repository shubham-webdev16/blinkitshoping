import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryBar from "@/components/CategoryBar";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import HeroBanner from "@/components/HeroBanner";
import { useCart } from "@/hooks/useCart";
import { products, categories } from "@/data/products";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);
  const { items, addToCart, removeFromCart, getQuantity, totalItems, totalPrice, clearCart } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header totalItems={totalItems} totalPrice={totalPrice} onCartClick={() => setCartOpen(true)} />
      <SearchBar onSearch={setSearchQuery} />
      <HeroBanner />
      <CategoryBar categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-bold text-foreground">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>
          <span className="text-xs text-muted-foreground">{filteredProducts.length} items</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={getQuantity(product.id)}
              onAdd={() => addToCart(product)}
              onRemove={() => removeFromCart(product.id)}
            />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm mt-1">Try a different search or category</p>
          </div>
        )}
      </main>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        totalPrice={totalPrice}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default Index;
