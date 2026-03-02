import { Product } from "@/types/product";

export const products: Product[] = [
  { id: 1, title: "Fresh Bananas", price: 45, originalPrice: 55, image: "🍌", category: "Fruits", unit: "1 dozen", discount: 18 },
  { id: 2, title: "Amul Toned Milk", price: 29, image: "🥛", category: "Dairy", unit: "500 ml" },
  { id: 3, title: "Brown Bread", price: 42, originalPrice: 50, image: "🍞", category: "Bakery", unit: "400 g", discount: 16 },
  { id: 4, title: "Farm Fresh Eggs", price: 89, image: "🥚", category: "Dairy", unit: "12 pcs" },
  { id: 5, title: "Organic Tomatoes", price: 35, originalPrice: 45, image: "🍅", category: "Vegetables", unit: "500 g", discount: 22 },
  { id: 6, title: "Basmati Rice", price: 185, originalPrice: 220, image: "🍚", category: "Staples", unit: "1 kg", discount: 16 },
  { id: 7, title: "Greek Yogurt", price: 65, image: "🥣", category: "Dairy", unit: "400 g" },
  { id: 8, title: "Red Apples", price: 120, originalPrice: 150, image: "🍎", category: "Fruits", unit: "1 kg", discount: 20 },
  { id: 9, title: "Potato Chips", price: 30, image: "🥔", category: "Snacks", unit: "150 g" },
  { id: 10, title: "Orange Juice", price: 95, originalPrice: 110, image: "🍊", category: "Beverages", unit: "1 L", discount: 14 },
  { id: 11, title: "Onions", price: 40, image: "🧅", category: "Vegetables", unit: "1 kg" },
  { id: 12, title: "Green Capsicum", price: 28, image: "🫑", category: "Vegetables", unit: "250 g" },
  { id: 13, title: "Dark Chocolate", price: 99, originalPrice: 120, image: "🍫", category: "Snacks", unit: "100 g", discount: 18 },
  { id: 14, title: "Curd", price: 35, image: "🥛", category: "Dairy", unit: "400 g" },
  { id: 15, title: "Watermelon", price: 55, originalPrice: 70, image: "🍉", category: "Fruits", unit: "1 pc", discount: 21 },
  { id: 16, title: "Maggi Noodles", price: 14, image: "🍜", category: "Snacks", unit: "70 g" },
];

export const categories = ["All", "Fruits", "Vegetables", "Dairy", "Bakery", "Staples", "Snacks", "Beverages"];
