import { Product } from "@/types/product";

export const products: Product[] = [
  // Fruits
  { id: 1, title: "Fresh Bananas", price: 45, originalPrice: 55, image: "🍌", category: "Fruits", unit: "1 dozen", discount: 18 },
  { id: 8, title: "Red Apples", price: 120, originalPrice: 150, image: "🍎", category: "Fruits", unit: "1 kg", discount: 20 },
  { id: 15, title: "Watermelon", price: 55, originalPrice: 70, image: "🍉", category: "Fruits", unit: "1 pc", discount: 21 },
  { id: 41, title: "Fresh Mangoes", price: 160, originalPrice: 200, image: "🥭", category: "Fruits", unit: "1 kg", discount: 20 },
  { id: 42, title: "Grapes", price: 75, image: "🍇", category: "Fruits", unit: "500 g" },

  // Vegetables
  { id: 5, title: "Organic Tomatoes", price: 35, originalPrice: 45, image: "🍅", category: "Vegetables", unit: "500 g", discount: 22 },
  { id: 11, title: "Onions", price: 40, image: "🧅", category: "Vegetables", unit: "1 kg" },
  { id: 12, title: "Green Capsicum", price: 28, image: "🫑", category: "Vegetables", unit: "250 g" },
  { id: 43, title: "Fresh Spinach", price: 25, image: "🥬", category: "Vegetables", unit: "1 bunch" },
  { id: 44, title: "Carrots", price: 38, image: "🥕", category: "Vegetables", unit: "500 g" },

  // Dairy
  { id: 2, title: "Amul Toned Milk", price: 29, image: "🥛", category: "Dairy", unit: "500 ml" },
  { id: 4, title: "Farm Fresh Eggs", price: 89, image: "🥚", category: "Dairy", unit: "12 pcs" },
  { id: 7, title: "Greek Yogurt", price: 65, image: "🥣", category: "Dairy", unit: "400 g" },
  { id: 14, title: "Curd", price: 35, image: "🥛", category: "Dairy", unit: "400 g" },
  { id: 45, title: "Paneer", price: 95, image: "🧀", category: "Dairy", unit: "200 g" },

  // Bakery
  { id: 3, title: "Brown Bread", price: 42, originalPrice: 50, image: "🍞", category: "Bakery", unit: "400 g", discount: 16 },
  { id: 46, title: "Butter Croissant", price: 55, image: "🥐", category: "Bakery", unit: "2 pcs" },
  { id: 47, title: "Chocolate Cake", price: 349, originalPrice: 450, image: "🎂", category: "Bakery", unit: "500 g", discount: 22 },

  // Staples
  { id: 6, title: "Basmati Rice", price: 185, originalPrice: 220, image: "🍚", category: "Staples", unit: "1 kg", discount: 16 },
  { id: 48, title: "Toor Dal", price: 135, image: "🫘", category: "Staples", unit: "1 kg" },
  { id: 49, title: "Wheat Flour (Atta)", price: 55, image: "🌾", category: "Staples", unit: "1 kg" },

  // Snacks
  { id: 9, title: "Potato Chips", price: 30, image: "🥔", category: "Snacks", unit: "150 g" },
  { id: 13, title: "Dark Chocolate", price: 99, originalPrice: 120, image: "🍫", category: "Snacks", unit: "100 g", discount: 18 },
  { id: 16, title: "Maggi Noodles", price: 14, image: "🍜", category: "Snacks", unit: "70 g" },
  { id: 50, title: "Mixed Dry Fruits", price: 299, originalPrice: 399, image: "🥜", category: "Snacks", unit: "250 g", discount: 25 },

  // Beverages
  { id: 10, title: "Orange Juice", price: 95, originalPrice: 110, image: "🍊", category: "Beverages", unit: "1 L", discount: 14 },
  { id: 51, title: "Green Tea", price: 175, originalPrice: 210, image: "🍵", category: "Beverages", unit: "25 bags", discount: 17 },
  { id: 52, title: "Cold Coffee", price: 45, image: "☕", category: "Beverages", unit: "200 ml" },

  // Toys
  { id: 100, title: "Building Blocks Set", price: 499, originalPrice: 699, image: "🧱", category: "Toys", unit: "1 set", discount: 29 },
  { id: 101, title: "Rubik's Cube", price: 149, image: "🧩", category: "Toys", unit: "1 pc" },
  { id: 102, title: "Teddy Bear", price: 399, originalPrice: 499, image: "🧸", category: "Toys", unit: "1 pc", discount: 20 },
  { id: 103, title: "Remote Control Car", price: 899, originalPrice: 1199, image: "🏎️", category: "Toys", unit: "1 pc", discount: 25 },
  { id: 104, title: "Board Game - Ludo", price: 199, image: "🎲", category: "Toys", unit: "1 set" },
  { id: 105, title: "Yo-Yo Spinner", price: 79, image: "🪀", category: "Toys", unit: "1 pc" },

  // Stationery
  { id: 200, title: "Notebook (200 pages)", price: 65, image: "📓", category: "Stationery", unit: "1 pc" },
  { id: 201, title: "Gel Pen Pack", price: 120, originalPrice: 150, image: "🖊️", category: "Stationery", unit: "10 pcs", discount: 20 },
  { id: 202, title: "Color Pencils", price: 149, image: "🖍️", category: "Stationery", unit: "12 shades" },
  { id: 203, title: "Geometry Box", price: 199, originalPrice: 250, image: "📐", category: "Stationery", unit: "1 set", discount: 20 },
  { id: 204, title: "Sketch Pens", price: 85, image: "🎨", category: "Stationery", unit: "12 pcs" },
  { id: 205, title: "Sticky Notes", price: 49, image: "📝", category: "Stationery", unit: "100 sheets" },
  { id: 206, title: "A4 Sheets Pack", price: 250, originalPrice: 320, image: "📄", category: "Stationery", unit: "500 sheets", discount: 22 },

  // Gifts
  { id: 300, title: "Gift Box Hamper", price: 799, originalPrice: 999, image: "🎁", category: "Gifts", unit: "1 box", discount: 20 },
  { id: 301, title: "Scented Candle Set", price: 449, image: "🕯️", category: "Gifts", unit: "3 pcs" },
  { id: 302, title: "Photo Frame", price: 299, image: "🖼️", category: "Gifts", unit: "1 pc" },
  { id: 303, title: "Greeting Card Pack", price: 149, image: "💌", category: "Gifts", unit: "5 pcs" },
  { id: 304, title: "Flower Bouquet", price: 599, originalPrice: 799, image: "💐", category: "Gifts", unit: "1 bouquet", discount: 25 },
  { id: 305, title: "Gift Wrapping Paper", price: 69, image: "🎀", category: "Gifts", unit: "5 sheets" },

  // Utensils
  { id: 400, title: "Steel Water Bottle", price: 349, originalPrice: 450, image: "🫙", category: "Utensils", unit: "1 L", discount: 22 },
  { id: 401, title: "Non-Stick Pan", price: 599, originalPrice: 799, image: "🍳", category: "Utensils", unit: "1 pc", discount: 25 },
  { id: 402, title: "Mixing Bowl Set", price: 449, image: "🥣", category: "Utensils", unit: "3 pcs" },
  { id: 403, title: "Kitchen Knife Set", price: 699, originalPrice: 899, image: "🔪", category: "Utensils", unit: "5 pcs", discount: 22 },
  { id: 404, title: "Glass Jar Set", price: 299, image: "🏺", category: "Utensils", unit: "3 pcs" },
  { id: 405, title: "Dinner Plate Set", price: 549, originalPrice: 699, image: "🍽️", category: "Utensils", unit: "6 pcs", discount: 21 },

  // Bags
  { id: 500, title: "School Backpack", price: 799, originalPrice: 999, image: "🎒", category: "Bags", unit: "1 pc", discount: 20 },
  { id: 501, title: "Tote Bag", price: 349, image: "👜", category: "Bags", unit: "1 pc" },
  { id: 502, title: "Laptop Bag", price: 999, originalPrice: 1299, image: "💼", category: "Bags", unit: "1 pc", discount: 23 },
  { id: 503, title: "Gym Duffle Bag", price: 599, image: "🏋️", category: "Bags", unit: "1 pc" },
  { id: 504, title: "Lunch Bag", price: 249, image: "🧳", category: "Bags", unit: "1 pc" },
  { id: 505, title: "Reusable Shopping Bag", price: 99, image: "♻️", category: "Bags", unit: "1 pc" },
];

export const categories = [
  "All", "Fruits", "Vegetables", "Dairy", "Bakery", "Staples", "Snacks", "Beverages",
  "Toys", "Stationery", "Gifts", "Utensils", "Bags"
];
