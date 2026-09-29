// ===================================================================
// ISI KONTEN — data dummy untuk portfolio (merek, harga & testimoni fiktif)
// ===================================================================

export type RoastLevel = "light" | "medium" | "medium-dark" | "dark";

export const roastLevels: {
  id: RoastLevel;
  label: string;
  taste: string;
  forWho: string;
  bean: string; // warna biji
  serve: string; // saran penyajian
  photo: string; // foto contoh seduhan (ilustrasi, bukan produk yang dijual)
}[] = [
  {
    id: "light",
    label: "Light",
    taste: "Bright, fruity, floral",
    forWho: "For black coffee drinkers who like it light and fragrant. Made for pour-over.",
    bean: "#B88A58",
    serve: "iced black coffee",
    photo: "/images/seduh-hitam.webp",
  },
  {
    id: "medium",
    label: "Medium",
    taste: "Caramel-sweet and balanced",
    forWho: "New to black coffee? Start here. Nothing too sharp, nothing too bitter.",
    bean: "#8B5B34",
    serve: "iced latte",
    photo: "/images/seduh-latte.webp",
  },
  {
    id: "medium-dark",
    label: "Medium-dark",
    taste: "Chocolate, nuts, fuller body",
    forWho: "Made to go with milk. What we'd reach for to make kopi susu or a moka pot every morning.",
    bean: "#5F3B22",
    serve: "iced kopi susu",
    photo: "/images/seduh-kopi-susu.webp",
  },
  {
    id: "dark",
    label: "Dark",
    taste: "Bold, bittersweet, a little smoky",
    forWho: "For people who like their coffee strong. Great as kopi tubruk, the unfiltered Javanese way.",
    bean: "#3B2517",
    serve: "iced mocha",
    photo: "/images/seduh-mocha.webp",
  },
];

export type Product = {
  slug: string;
  name: string;
  origin: string;
  process: string;
  roast: RoastLevel;
  notes: string[];
  description: string;
  prices: { size: string; price: number }[];
  featured?: boolean;
  badge?: string;
  label: string; // warna label kemasan
};

export const products: Product[] = [
  {
    slug: "house-blend",
    name: "Kopi Kita House Blend",
    origin: "Merapi & Temanggung",
    process: "Arabica–robusta blend",
    roast: "medium-dark",
    notes: ["Dark chocolate", "Palm sugar", "Roasted peanut"],
    description: "Our everyday blend, built for kopi susu at home. Still holds up brewed strong as tubruk.",
    prices: [
      { size: "250 g", price: 14 },
      { size: "1 kg", price: 46 },
    ],
    featured: true,
    badge: "Best seller",
    label: "#E9DFC8",
  },
  {
    slug: "merapi-arabica",
    name: "Merapi Arabica",
    origin: "Slopes of Mt. Merapi, Sleman",
    process: "Natural",
    roast: "medium",
    notes: ["Jackfruit", "Caramel", "Warm spice"],
    description: "Grown just up the road from us. Sweet and fruity, with a little spice at the finish.",
    prices: [
      { size: "200 g", price: 16 },
      { size: "500 g", price: 36 },
    ],
    featured: true,
    label: "#D9E3CF",
  },
  {
    slug: "gayo-wine",
    name: "Gayo Wine",
    origin: "Central Aceh, Sumatra",
    process: "Wine process",
    roast: "light",
    notes: ["Red grape", "Dried fruit", "Milk chocolate"],
    description: "A long, slow fermentation gives it the smell of very ripe fruit. Best on a V60.",
    prices: [
      { size: "200 g", price: 21 },
      { size: "500 g", price: 48 },
    ],
    featured: true,
    label: "#F1D9C9",
  },
  {
    slug: "temanggung-robusta",
    name: "Temanggung Robusta",
    origin: "Temanggung, Central Java",
    process: "Ripe-picked, natural",
    roast: "dark",
    notes: ["Dark cocoa", "Tobacco", "Clove"],
    description: "Robusta picked only when the cherries are fully red, so it's strong without the harsh, dry aftertaste. Our first choice for tubruk.",
    prices: [
      { size: "250 g", price: 11 },
      { size: "1 kg", price: 34 },
    ],
    featured: true,
    label: "#E6D5B8",
  },
  {
    slug: "kintamani",
    name: "Kintamani",
    origin: "Bangli, Bali",
    process: "Washed",
    roast: "light",
    notes: ["Orange", "Jasmine tea", "Honey"],
    description: "Clean and bright, with a gentle citrus acidity.",
    prices: [
      { size: "200 g", price: 18 },
      { size: "500 g", price: 41 },
    ],
    label: "#EFE4B8",
  },
  {
    slug: "toraja-sapan",
    name: "Toraja Sapan",
    origin: "Tana Toraja, Sulawesi",
    process: "Wet-hulled",
    roast: "medium-dark",
    notes: ["Warm spice", "Cocoa", "Earthy"],
    description: "Heavy, warm and low in acidity. Good on its own, even better with milk.",
    prices: [
      { size: "200 g", price: 19 },
      { size: "500 g", price: 44 },
    ],
    label: "#DCCFC0",
  },
];

export const plans = [
  {
    id: "one-bag",
    name: "One Bag",
    amount: "250 g / month",
    cups: "about 16 cups",
    price: 15,
    desc: "For a few cups a week.",
  },
  {
    id: "every-morning",
    name: "Every Morning",
    amount: "500 g / month",
    cups: "about 33 cups",
    price: 28,
    desc: "One cup every morning, and you never run out.",
    popular: true,
  },
  {
    id: "whole-house",
    name: "Whole House",
    amount: "1 kg / month",
    cups: "about 66 cups",
    price: 50,
    desc: "For a home where everyone drinks coffee.",
  },
];

export const subscribeSteps = [
  {
    title: "Pick a plan and a coffee",
    text: "Message us on WhatsApp with your plan, your coffee, and whether you want whole beans or ground.",
  },
  {
    title: "We roast it for you",
    text: "We roast on Tuesdays and Fridays, then let the beans rest for two days.",
  },
  {
    title: "It shows up at your door",
    text: "Ships in the first week of every month. Swap coffees or pause whenever you like.",
  },
];

export const testimonials = [
  {
    quote:
      "Six months in, and every bag has arrived smelling fresh. When I want to try something different, I just send a message.",
    name: "Rina Kusumawati",
    detail: "Every Morning subscriber, Sleman",
  },
  {
    quote:
      "The House Blend is exactly what I wanted for kopi susu at home. Now my kids keep stealing sips.",
    name: "Bayu Pratama",
    detail: "Customer since 2024, Bantul",
  },
  {
    quote:
      "I love that the roast date is written on every bag. I always know exactly how fresh my coffee is.",
    name: "Sekar Ayuningtyas",
    detail: "Gayo Wine regular, Yogyakarta",
  },
];

export const brewGuides = [
  {
    id: "tubruk",
    name: "Tubruk",
    ratio: "1:12",
    grind: "Fine",
    temp: "93°C",
    time: "4 min",
    steps: "Indonesia's no-filter brew. Pour hot water straight onto the grounds, stir once, wait for them to settle, then sip slowly.",
  },
  {
    id: "v60",
    name: "V60",
    ratio: "1:15",
    grind: "Medium-fine",
    temp: "90°C",
    time: "2½ min",
    steps: "Wet the grounds and wait 30 seconds, then pour in slow circles in three stages.",
  },
  {
    id: "moka-pot",
    name: "Moka pot",
    ratio: "1:7",
    grind: "Medium-fine",
    temp: "Boiling",
    time: "5 min",
    steps: "Fill with water up to the valve, level the grounds without pressing them down, and heat on low.",
  },
  {
    id: "french-press",
    name: "French press",
    ratio: "1:14",
    grind: "Coarse",
    temp: "94°C",
    time: "4 min",
    steps: "Pour in all the water, put the lid on, wait four minutes, then press the plunger down slowly.",
  },
];

export const processSteps = [
  {
    title: "Sourcing",
    text: "We taste samples from farmers and collectors before we buy anything. If a coffee doesn't pass our cupping, we don't sell it.",
  },
  {
    title: "Roasting",
    text: "Small batches, roasted at our home in Sleman every Tuesday and Friday.",
  },
  {
    title: "Resting",
    text: "Freshly roasted beans need 2–3 days to release their gas. Rested coffee brews cleaner and tastes clearer.",
  },
  {
    title: "Shipping",
    text: "Packed in bags with a one-way valve, roast date written by hand, and sent anywhere in Indonesia.",
  },
];

export const faqs = [
  {
    q: "Can you grind the coffee for me?",
    a: "Yes. Tell us what you brew with (tubruk, V60, moka pot or French press) and we'll grind it to match.",
  },
  {
    q: "How do I pay?",
    a: "For now, all orders go through WhatsApp. You can pay by bank transfer or QRIS, Indonesia's standard QR payment.",
  },
  {
    q: "Can I pause or cancel my subscription?",
    a: "Anytime. Just let us know before the 25th so we can adjust next month's delivery.",
  },
  {
    q: "How long does the coffee stay good?",
    a: "It tastes best 1 to 6 weeks after the roast date. Keep it somewhere dry and out of direct sunlight.",
  },
  {
    q: "Do you ship outside Yogyakarta?",
    a: "Yes, anywhere in Indonesia. Around Jogja we can send it by same-day courier, or you can pick it up by appointment.",
  },
];
