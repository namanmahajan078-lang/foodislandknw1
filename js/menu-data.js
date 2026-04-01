/* ============================================
   FOOD ISLAND — Complete Menu Data
   ============================================ */

const MENU_DATA = [
  {
    category: "Salads",
    icon: "🥗",
    items: [
      { name: "Onion Salad", price: 25 },
      { name: "Green Salad", price: 50 }
    ]
  },
  {
    category: "Tandoori Starters",
    icon: "🔥",
    items: [
      { name: "Tandoori Paneer Tikka", price: 280 },
      { name: "Achari Paneer Tikka", price: 290 },
      { name: "Malai Paneer Tikka", price: 300 },
      { name: "Pahadi Paneer Tikka", price: 270 },
      { name: "Tandoori Soya Chaap", price: 280 },
      { name: "Achari Soya Chaap", price: 290 },
      { name: "Pahadi Chaap", price: 310 },
      { name: "Malai Soya Chaap", price: 300 }
    ]
  },
  {
    category: "Meals (Mini, Serves 1)",
    icon: "🍱",
    items: [
      { name: "Dal Fry With Jeera Rice", desc: "Dal Fry + Jeera Rice + Salad", price: 160 },
      { name: "Butter Dal Tadka With Jeera Rice", desc: "Butter Dal Tadka + Jeera Rice + Salad", price: 170 },
      { name: "Paneer Kolhapuri Meal", desc: "Paneer Kolhapuri + 4 Tawa Roti / 3 Paratha + Salad", price: 180 },
      { name: "Punjabi Chole With Jeera Rice", desc: "Amritsari Chole + Jeera Rice + Salad", price: 170 },
      { name: "Matar Paneer Meal", desc: "Matar Paneer + 4 Tawa Roti / 3 Paratha + Salad", price: 170 },
      { name: "Paneer Butter Masala Meal", desc: "Butter Paneer Masala + 4 Tawa Roti / 3 Paratha + Salad", price: 180 },
      { name: "5 Poori With Aloo Sabji Dry", desc: "5 Poori + Aloo Sabji Dry + Salad", price: 120 },
      { name: "5 Poori With Aloo Sabji Gravy", desc: "5 Poori + Aloo Sabji Gravy + Salad", price: 120 },
      { name: "5 Poori With Aloo Chole", desc: "5 Poori + Aloo Chole + Salad", price: 140 }
    ]
  },
  {
    category: "Indian Main Course",
    icon: "🍛",
    items: [
      { name: "Dal Fry", price: 100 },
      { name: "Dal Tadka", price: 110 },
      { name: "Shahi Paneer", price: 150 },
      { name: "Paneer Butter Masala", price: 170 },
      { name: "Kadhai Paneer", price: 180 },
      { name: "Paneer Lababdar", price: 200 },
      { name: "Sev Tamatar", price: 110 },
      { name: "Roasted Papad", price: 30 },
      { name: "Masala Papad", price: 50 },
      { name: "Masala Rice", price: 190 },
      { name: "Ghee Rice", price: 220 },
      { name: "Butter Khichdi", price: 220 },
      { name: "Chole Rice", price: 200 },
      { name: "Amritsari Kulcha With Chole", price: 220 },
      { name: "Amritsari Paneer Kulcha With Chole", price: 270 },
      { name: "Mix Veg Kulcha With Chole", price: 270 },
      { name: "Aloo Jeera", price: 180 },
      { name: "Sukhi Aloo Pyaaz Ki Sabji", price: 190 },
      { name: "Bhindi Masala", price: 190 },
      { name: "Matar Masala", price: 190 },
      { name: "Mix Veg", price: 130 },
      { name: "Veg Kolhapuri", price: 210 },
      { name: "Aloo Gravy", price: 190 },
      { name: "Aloo Matar Gravy", price: 200 },
      { name: "Paneer Do Pyaaz", price: 250 },
      { name: "Punjabi Paneer", price: 190 },
      { name: "Paneer Kolhapuri", price: 260 },
      { name: "Matar Paneer", price: 250 },
      { name: "Dal Fry (Jain)", price: 160 },
      { name: "Dal Butter Tadka", price: 170 },
      { name: "Dal Punjabi", price: 200 },
      { name: "Butter Khichdi Tadka", price: 230 },
      { name: "Dahi Tadka", price: 180 },
      { name: "Dal Hari Mirch", price: 130 },
      { name: "Kaju Curry", price: 200 },
      { name: "Special Paneer Lababdar", price: 200 },
      { name: "Special Paneer Mumtaz", price: 200 },
      { name: "Special Paneer Tikka Masala", price: 160 },
      { name: "Butter Lapeta", desc: "A kind of khichdi", price: 180 }
    ]
  },
  {
    category: "Breads",
    icon: "🫓",
    items: [
      { name: "2 Aloo Stuffed Paratha", desc: "With Curd And Pickle", price: 140 },
      { name: "2 Aloo Pyaaz Stuffed Paratha", desc: "With Curd And Pickle", price: 150 },
      { name: "2 Sev Stuffed Paratha", desc: "With Curd And Pickle", price: 150 },
      { name: "2 Aloo Paneer Stuffed Paratha", desc: "With Curd And Pickle", price: 180 },
      { name: "2 Aloo Cheese Stuffed Paratha", desc: "With Curd And Pickle", price: 190 },
      { name: "2 Garlic Laccha Paratha", desc: "With Curd And Pickle", price: 190 },
      { name: "2 Paneer Stuffed Paratha", desc: "With Curd And Pickle", price: 190 },
      { name: "2 Cheese Corn Stuffed Paratha", desc: "With Curd And Pickle", price: 220 },
      { name: "Punjabi Butter Khichdi", price: 190 },
      { name: "Dal Paratha", price: 170 },
      { name: "Plain Tandoori Roti", price: 15 },
      { name: "Butter Tandoori Roti", price: 18 },
      { name: "Missi Roti", price: 30 },
      { name: "Butter Missi Roti", price: 35 },
      { name: "Laccha Paratha", price: 40 },
      { name: "Butter Naan", price: 40 },
      { name: "Garlic Naan", price: 50 },
      { name: "Cheese Garlic Naan", price: 80 },
      { name: "1 Tawa Paratha", price: 25 },
      { name: "Tawa Roti", price: 15 },
      { name: "Tawa Butter Roti", price: 18 }
    ]
  },
  {
    category: "Rice",
    icon: "🍚",
    items: [
      { name: "Veg Pulao", price: 180 },
      { name: "Plain Rice", price: 80 },
      { name: "Jeera Rice", price: 90 }
    ]
  },
  {
    category: "South Indian",
    icon: "🥘",
    subcategories: [
      {
        name: "Uttapam",
        items: [
          { name: "Sada Uttappam", price: 90 },
          { name: "Onion Uttappam", price: 120 },
          { name: "Masala Uttappam", price: 150 },
          { name: "Mysore Uttappam", price: 190 },
          { name: "Tomato Uttappam", price: 120 },
          { name: "Tomato Onion Uttappam", price: 150 },
          { name: "4 Poori", price: 40 }
        ]
      },
      {
        name: "Dosa",
        items: [
          { name: "Butter Sada Dosa", price: 70 },
          { name: "Onion Sada Dosa", price: 90 },
          { name: "Paneer Sada Dosa", price: 130 },
          { name: "Cheese Paneer Sada Dosa", price: 190 },
          { name: "Schezwan Sada Dosa", price: 110 },
          { name: "Cheese Sada Dosa", price: 150 },
          { name: "Mysore Sada Dosa", price: 170 },
          { name: "Cheese Mysore Sada Dosa", price: 200 },
          { name: "Paneer Cheese Mysore Sada Dosa", price: 230 },
          { name: "Masala Dosa", price: 130 },
          { name: "Schezwan Masala Dosa", price: 140 },
          { name: "Cheese Schezwan Masala Dosa", price: 180 },
          { name: "Schezwan Cheese Paneer Masala Dosa", price: 200 },
          { name: "Paneer Masala Dosa", price: 150 },
          { name: "Cheese Masala Dosa", price: 170 },
          { name: "Cheese Paneer Masala Dosa", price: 190 },
          { name: "Mysore Masala Dosa", price: 200 },
          { name: "Cheese Mysore Masala Dosa", price: 230 },
          { name: "Cheese Paneer Mysore Masala Dosa", price: 260 },
          { name: "Chinese Chopsuey Dosa", price: 200 },
          { name: "American Chopsuey Dosa", price: 200 },
          { name: "Chopsuey Mysore Dosa", price: 230 },
          { name: "Cheese Chinese Chopsuey Dosa", price: 230 },
          { name: "Cheese Paneer Chopsuey Mysore Dosa", price: 230 },
          { name: "Paneer Chinese Chopsuey Dosa", price: 290 },
          { name: "Cheese Paneer Chinese Chopsuey Dosa", price: 320 },
          { name: "Chocolate Dosa", price: 190 },
          { name: "Jinni Dosa", price: 220 },
          { name: "Paneer Jinni Dosa", price: 260 },
          { name: "Pizza Dosa", price: 230 },
          { name: "Corn Cheese Dosa", price: 220 },
          { name: "Spring Roll Dosa", price: 190 },
          { name: "Indori Dosa", price: 220 },
          { name: "Paneer Tikka Dosa", price: 230 }
        ]
      }
    ]
  }
];
