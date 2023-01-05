const productCategories = [
  {
    name: "Top deals",
  },
  {
    name: "Fashion",
  },
  {
    name: "Gadgets",
  },
  {
    name: "Furniture",
  },
  {
    name: "Others",
  },
];

const productCategoryItem = {
  "Top deals": [
    {
      _id: 1,
    },
    {
      _id: 2,
    },
    {
      _id: 3,
    },
    {
      _id: 4,
    },
  ],
  Fashion: [
    {
      _id: 1,
    },
    {
      _id: 2,
    }, 
    {
      _id: 4,
    }, 
    {
      _id: 5,
    },],
  Gadgets: [
    {
      _id: 3,
    },],
  Furniture: [
    {
      _id:6,
    },],
    Health: [],
    Electronics: [],
    "Sporting gear": [],
    Others: [],
};

const products = {
  1: {
    _id: 1,
    name: "Red bag",
    price: "N500.00",
    newPrice: "N350.00",
    dicount: "",
    category: "Fashion",
    topDeals: true,
    featured: true,
    image: "/images/arno-senoner.png",
  },
  2: {
    _id: 2,
    name: "Multi-colored socks",
    price: "N500.00",
    newPrice: "N350.00",
    dicount: "20% off",
    category: "Fashion",
    topDeals: true,
    featured: true,
    image: "/images/sam-moqadam.png",
  },
  3: {
    _id: 3,
    name: "iPhone XR",
    price: "N500.00",
    newPrice: "N350.00",
    dicount: "20% off",
    category: "Gadgets",
    topDeals: true,
    featured: true,
    image: "/images/isaac-martin.png",
  },
  4: {
    _id: 4,
    name: "Black shoe",
    price: "N500.00",
    newPrice: "N350.00",
    dicount: "",
    category: "Fashion",
    topDeals: true,
    featured: true,
    image: "/images/imani-bahati.png",
  },
  5: {
    _id: 5,
    name: "Black shirt",
    price: "N500.00",
    newPrice: "N350.00",
    dicount: "",
    category: "Fashion",
    topDeals: true,
    featured: true,
    image: "/images/ryan-hoffman.png",
  },
  6: {
    _id: 6,
    name: "Stool",
    price: "N500.00",
    newPrice: "N350.00",
    dicount: "",
    category: "Furniture",
    topDeals: false,
    featured: true,
    image: "/images/ruslan-bardash.png",
  },
};

module.exports = {
  productCategories,
  productCategoryItem,
  products,
};
