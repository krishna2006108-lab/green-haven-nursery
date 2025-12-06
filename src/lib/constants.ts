export const BUSINESS_INFO = {
  name: "Manoj Green Valley Nursery",
  tagline: "Premium Nursery Plants – Direct From Farm",
  phone: "+91XXXXXXXXXX",
  whatsapp: "+91XXXXXXXXXX",
  email: "contact@manojnursery.com",
  address: "Aligarh, Uttar Pradesh, India",
  city: "Aligarh",
  state: "Uttar Pradesh",
  country: "India",
} as const;

export const WHATSAPP_MESSAGE = "Hi, I'm interested in your plants!";

export const getWhatsAppLink = (message: string = WHATSAPP_MESSAGE) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\+/g, '')}?text=${encodedMessage}`;
};

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Outdoor Plants", path: "/outdoor-plants" },
  { name: "Fruit Plants", path: "/fruit-plants" },
  { name: "Flowering Plants", path: "/flowering-plants" },
  { name: "Forest Plants", path: "/forest-plants" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
] as const;

export const PLANT_CATEGORIES = {
  outdoor: {
    title: "Outdoor & Tall Plants",
    description: "Transform your garden with our premium outdoor plants",
    images: [
      "/plants/outdoor/tall-bundled-plants.jpg",
      "/plants/outdoor/topiary-trees.jpg",
    ],
  },
  fruit: {
    title: "Fruit Plants",
    description: "Grow your own fresh fruits at home",
    images: [
      "/plants/fruit/guava-plants.jpg",
      "/plants/fruit/mango-plants.jpg",
      "/plants/fruit/lemon-plants.jpg",
    ],
  },
  saplings: {
    title: "Saplings & Small Plants",
    description: "Start your garden with healthy saplings",
    images: [
      "/plants/saplings/polybag-saplings.jpg",
      "/plants/saplings/nursery-rows.jpg",
    ],
  },
  flowering: {
    title: "Flowering Plants",
    description: "Add color and beauty to your space",
    images: [
      "/plants/flowering/pomegranate-flowering.jpg",
    ],
  },
  forest: {
    title: "Forest & Landscaping Plants",
    description: "Perfect for landscaping and afforestation projects",
    images: [
      "/plants/forest/acacia-plants.jpg",
      "/plants/forest/mahogany-plants.jpg",
    ],
  },
} as const;

export const ALL_GALLERY_IMAGES = [
  "/plants/outdoor/tall-bundled-plants.jpg",
  "/plants/outdoor/topiary-trees.jpg",
  "/plants/fruit/guava-plants.jpg",
  "/plants/fruit/mango-plants.jpg",
  "/plants/fruit/lemon-plants.jpg",
  "/plants/saplings/polybag-saplings.jpg",
  "/plants/saplings/nursery-rows.jpg",
  "/plants/flowering/pomegranate-flowering.jpg",
  "/plants/forest/acacia-plants.jpg",
  "/plants/forest/mahogany-plants.jpg",
  "/plants/hero/nursery-hero.jpg",
] as const;
