
export const menuCategories = [
  "All",
  "Coffee",
  "Tea",
  "Bakery",
  "Breakfast",
  "Drinks",
  "Dessert",
  "Main Course",
  "Fast Food",
];

export const cuisines = [
  "All Cuisines",
  "American",
  "Italian",
  "Japanese",
  "Indian",
  "French",
];

export const menuItems = [
  // ☕ COFFEE
  {
    id: "c1",
    name: "Artisan Espresso",
    category: "Coffee",
    cuisine: "Italian",
    price: 120,
    description: "A rich, bold espresso made from carefully selected coffee beans.",
    tags: ["Hot", "Classic"],
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500",
  },
  {
    id: "c2",
    name: "Oat Milk Latte",
    category: "Coffee",
    cuisine: "American",
    price: 180,
    description: "Smooth espresso blended with creamy oat milk.",
    tags: ["Vegan", "Hot"],
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500",
  },
  {
    id: "c3",
    name: "Iced Caramel Latte",
    category: "Coffee",
    cuisine: "American",
    price: 160,
    description: "Chilled espresso with milk and sweet caramel.",
    tags: ["Iced", "Popular"],
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
  },
  {
    id: "c4",
    name: "Iced Mocha",
    category: "Coffee",
    cuisine: "American",
    price: 170,
    description: "Chilled espresso blended with milk and chocolate.",
    tags: ["Iced", "Chocolate"],
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500",
  },

  // 🍵 TEA
  {
    id: "t1",
    name: "Matcha Green Tea Latte",
    category: "Tea",
    cuisine: "Japanese",
    price: 190,
    description: "Matcha green tea blended with creamy oat milk.",
    tags: ["Vegan", "Hot/Iced"],
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500",
  },
  {
    id: "t2",
    name: "Iced Lemon Tea",
    category: "Tea",
    cuisine: "French",
    price: 100,
    description: "Refreshing iced tea with a hint of fresh lemon.",
    tags: ["Iced", "Refreshing"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600"
  },

  // 🥐 BAKERY
  {
    id: "b1",
    name: "Almond Croissant",
    category: "Bakery",
    cuisine: "French",
    price: 140,
    description: "A flaky croissant filled with sweet almond cream.",
    tags: ["Vegetarian", "Classic"],
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500",
  },
  {
    id: "b2",
    name: "Blueberry Muffin",
    category: "Bakery",
    cuisine: "American",
    price: 90,
    description: "A soft muffin filled with juicy blueberries.",
    tags: ["Freshly Baked", "Vegetarian"],
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500",
  },

  // 🍳 BREAKFAST
  {
    id: "br1",
    name: "Avocado Toast",
    category: "Breakfast",
    cuisine: "American",
    price: 180,
    description: "Sourdough toast topped with avocado and fresh seeds.",
    tags: ["Vegan", "Healthy"],
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
  },
  {
    id: "br2",
    name: "Berry Pancakes",
    category: "Breakfast",
    cuisine: "American",
    price: 220,
    description: "Fluffy pancakes served with berries and syrup.",
    tags: ["Sweet", "Popular"],
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
  },

  // 🥤 DRINKS
  {
    id: "d1",
    name: "Strawberry Milkshake",
    category: "Drinks",
    cuisine: "American",
    price: 140,
    description: "A creamy strawberry milkshake made for sweet cravings.",
    tags: ["Cold", "Sweet"],
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
  },

  // 🍰 DESSERT
  {
    id: "de1",
    name: "Chocolate Brownie",
    category: "Dessert",
    cuisine: "American",
    price: 110,
    description: "A rich chocolate brownie with a soft, fudgy center.",
    tags: ["Chocolate", "Popular"],
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
  },
  {
    id: "fr1",
    name: "French Crepe",
    category: "Dessert",
    cuisine: "French",
    price: 179,
    description: "A thin French pancake served with chocolate sauce.",
    tags: ["Sweet", "Dessert"],
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500",
  },

  // 🇮🇹 ITALIAN FOOD
  {
    id: "it1",
    name: "Margherita Pizza",
    category: "Main Course",
    cuisine: "Italian",
    price: 249,
    description: "Classic pizza topped with tomato, mozzarella, and basil.",
    tags: ["Vegetarian", "Popular"],
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500",
  },

  // 🇺🇸 AMERICAN FOOD
  {
    id: "am1",
    name: "Classic Cheeseburger",
    category: "Fast Food",
    cuisine: "American",
    price: 199,
    description: "A burger with cheese, lettuce, tomato, and a soft bun.",
    tags: ["Popular", "Savory"],
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },

  // 🇯🇵 JAPANESE FOOD
  {
    id: "jp1",
    name: "Japanese Ramen",
    category: "Main Course",
    cuisine: "Japanese",
    price: 229,
    description: "Noodles served in a savory broth with fresh toppings.",
    tags: ["Warm", "Popular"],
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500",
  },

  // 🇮🇳 INDIAN FOOD
  {
    id: "in1",
    name: "Paneer Wrap",
    category: "Fast Food",
    cuisine: "Indian",
    price: 149,
    description: "Spiced paneer wrapped with fresh vegetables.",
    tags: ["Vegetarian", "Spicy"],
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
  },

  // 🇫🇷 FRENCH FOOD
  {
    id: "fr2",
    name: "French Toast",
    category: "Breakfast",
    cuisine: "French",
    price: 169,
    description: "Golden, buttery toast served with a sweet topping.",
    tags: ["Sweet", "Popular"],
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500",
  },
];

