/* ============================================
   CAPIST — Data Store
   Add your products, categories, and reviews here.
   ============================================ */

// ---- Products ----
// Each product needs: id, name, brand, category, price, image, description
// Optional: badge, badgeVariant, rating, reviews, images (array)
export const products = [
  // ============================================================
  // POLO RALPH LAUREN — Luxury Classic Caps
  // ============================================================
  {
    id: 1,
    name: 'Navy Classic',
    brand: 'Polo Ralph Lauren',
    category: 'Luxury',
    price: 9000,
    image: '/images/products/Polo Ralph Lauren cap navy.webp',
    description: 'Timeless navy cap from Polo Ralph Lauren, featuring the iconic embroidered pony. Crafted from premium cotton twill for lasting comfort and a refined silhouette.',
    badge: 'Best Seller',
    badgeVariant: 'green',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    name: 'Black Heritage',
    brand: 'Polo Ralph Lauren',
    category: 'Luxury',
    price: 9000,
    image: '/images/products/Polo Ralph Lauren cap black.jfif',
    description: 'Sleek black cap with Ralph Lauren\'s signature embroidered logo. A versatile essential that elevates any casual look with understated luxury.',
    badge: 'New',
    badgeVariant: 'green',
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: 'Blue Classic',
    brand: 'Polo Ralph Lauren',
    category: 'Luxury',
    price: 9000,
    image: '/images/products/Polo Ralph Lauren cap blue.webp',
    description: 'Vibrant blue cap from the Polo Ralph Lauren collection. Structured fit with a pre-curved brim and premium embroidered detailing.',
    rating: 4.7,
    reviews: 85,
  },
  {
    id: 4,
    name: 'Brown Classic',
    brand: 'Polo Ralph Lauren',
    category: 'Luxury',
    price: 9000,
    image: '/images/products/Polo Ralph Lauren cap brown.webp',
    description: 'Earthy brown cap that brings warmth to your wardrobe. Features the iconic Ralph Lauren pony embroidered in contrasting thread.',
    rating: 4.6,
    reviews: 72,
  },
  {
    id: 5,
    name: 'White Heritage',
    brand: 'Polo Ralph Lauren',
    category: 'Luxury',
    price: 9000,
    image: '/images/products/Polo Ralph Lauren cap white.webp',
    description: 'Crisp white cap from Polo Ralph Lauren. Clean, timeless, and effortlessly sophisticated — the perfect summer staple.',
    badge: 'Best Seller',
    badgeVariant: 'green',
    rating: 4.8,
    reviews: 112,
  },
  {
    id: 6,
    name: 'White Classic II',
    brand: 'Polo Ralph Lauren',
    category: 'Luxury',
    price: 9000,
    image: '/images/products/Polo Ralph Lauren cap white 2.webp',
    description: 'Alternate take on the classic white Ralph Lauren cap. Same iconic quality with subtle detailing that sets it apart.',
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 7,
    name: 'Pink Classic',
    brand: 'Polo Ralph Lauren',
    category: 'Luxury',
    price: 9000,
    image: '/images/products/Polo Ralph Lauren pink.jfif',
    description: 'Soft pink cap from Polo Ralph Lauren. A bold yet elegant statement piece that pairs beautifully with neutral tones.',
    rating: 4.5,
    reviews: 54,
  },

  // ============================================================
  // NY — Streetwear Originals
  // ============================================================
  {
    id: 8,
    name: 'NY Beige',
    brand: 'NY',
    category: 'Streetwear',
    price: 6500,
    image: '/images/products/NY cap baige.jfif',
    description: 'Iconic NY beige cap with raised embroidered lettering. A streetwear staple that pays homage to classic New York style.',
    badge: 'Best Seller',
    badgeVariant: 'green',
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 9,
    name: 'NY Burgundy',
    brand: 'NY',
    category: 'Streetwear',
    price: 6500,
    image: '/images/products/NY cap brugandy.webp',
    description: 'Rich burgundy NY cap with bold front embroidery. Premium construction meets authentic street culture.',
    rating: 4.6,
    reviews: 88,
  },
  {
    id: 10,
    name: 'NY Green',
    brand: 'NY',
    category: 'Streetwear',
    price: 6500,
    image: '/images/products/NY cap green.webp',
    description: 'Vibrant green cap featuring the iconic NY logo. Made from high-quality materials for all-day comfort and durability.',
    rating: 4.7,
    reviews: 95,
  },
  {
    id: 11,
    name: 'NY Navy',
    brand: 'NY',
    category: 'Streetwear',
    price: 6500,
    image: '/images/products/NY cap navy.webp',
    description: 'Classic navy NY cap — the original streetwear essential. Structured fit with a flat brim and signature raised embroidery.',
    badge: 'Best Seller',
    badgeVariant: 'green',
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 12,
    name: 'NY Off-White',
    brand: 'NY',
    category: 'Streetwear',
    price: 6500,
    image: '/images/products/NY cap off white.webp',
    description: 'Off-white NY cap with striking contrast embroidery. A modern twist on a timeless icon.',
    rating: 4.7,
    reviews: 78,
  },
  {
    id: 13,
    name: 'NY Grey',
    brand: 'NY',
    category: 'Streetwear',
    price: 6500,
    image: '/images/products/NY grey.webp',
    description: 'Subtle grey NY cap with clean embroidered branding. Understated style that works with any outfit.',
    rating: 4.5,
    reviews: 63,
  },

  // ============================================================
  // NIKE — Performance Streetwear
  // ============================================================
  {
    id: 14,
    name: 'Nike Black',
    brand: 'Nike',
    category: 'Sports',
    price: 7500,
    image: '/images/products/NIKE cap black.jfif',
    description: 'Sleek black Nike cap with the iconic swoosh. Dri-FIT technology keeps you cool while you stay on top of your game.',
    badge: 'Best Seller',
    badgeVariant: 'green',
    rating: 4.8,
    reviews: 178,
  },
  {
    id: 15,
    name: 'Nike Green',
    brand: 'Nike',
    category: 'Sports',
    price: 7500,
    image: '/images/products/nike cap green.jfif',
    description: 'Fresh green Nike cap featuring the signature swoosh. Lightweight, breathable, and built for everyday wear.',
    rating: 4.6,
    reviews: 82,
  },
  {
    id: 16,
    name: 'Nike Navy',
    brand: 'Nike',
    category: 'Sports',
    price: 7500,
    image: '/images/products/nike cap navy.jfif',
    description: 'Deep navy Nike cap with embroidered swoosh. Performance fit with moisture-wicking properties for active lifestyles.',
    rating: 4.7,
    reviews: 104,
  },
  {
    id: 17,
    name: 'Nike White',
    brand: 'Nike',
    category: 'Sports',
    price: 7500,
    image: '/images/products/nike cap white.jfif',
    description: 'Clean white Nike cap — a sportswear essential. The iconic swoosh speaks for itself on this timeless silhouette.',
    rating: 4.7,
    reviews: 91,
  },

  // ============================================================
  // HARVARD — University Collection
  // ============================================================
  {
    id: 18,
    name: 'Harvard Navy',
    brand: 'Harvard',
    category: 'University',
    price: 7000,
    image: '/images/products/Harvard cap Navy.jfif',
    description: 'Show your ivy league pride with this Harvard navy cap. Classic embroidered lettering on premium cotton twill.',
    badge: 'New',
    badgeVariant: 'green',
    rating: 4.6,
    reviews: 47,
  },
  {
    id: 19,
    name: 'Harvard Beige',
    brand: 'Harvard',
    category: 'University',
    price: 7000,
    image: '/images/products/harvard cap baige.jfif',
    description: 'Beige Harvard cap with bold raised embroidery. A stylish way to represent one of the world\'s most prestigious universities.',
    rating: 4.5,
    reviews: 38,
  },

  // ============================================================
  // NEW BALANCE — Sport & Style
  // ============================================================
  {
    id: 20,
    name: 'New Balance Black',
    brand: 'New Balance',
    category: 'Sports',
    price: 7500,
    image: '/images/products/new balence cap black.jfif',
    description: 'Black New Balance cap with the iconic N logo. Engineered for comfort with a blend of sport and street style.',
    badge: 'New',
    badgeVariant: 'green',
    rating: 4.5,
    reviews: 42,
  },
  {
    id: 21,
    name: 'New Balance Green',
    brand: 'New Balance',
    category: 'Sports',
    price: 7500,
    image: '/images/products/new balence cap green.webp',
    description: 'Green New Balance cap featuring the signature N embroidery. Breathable construction with a modern athletic fit.',
    rating: 4.4,
    reviews: 36,
  },

  // ============================================================
  // CAPIST — Essential Collection
  // ============================================================
  {
    id: 22,
    name: 'Black Essential',
    brand: 'CAPIST',
    category: 'Luxury',
    price: 5000,
    image: '/images/products/black simple cap.jfif',
    description: 'The CAPIST Black Essential cap — minimalism at its finest. Clean design, premium materials, and architectural precision.',
    rating: 4.4,
    reviews: 29,
  },
  {
    id: 23,
    name: 'Navy Essential',
    brand: 'CAPIST',
    category: 'Luxury',
    price: 5000,
    image: '/images/products/navy simple cap.jfif',
    description: 'The CAPIST Navy Essential cap. A less-but-better approach to headwear — no logos, just pure quality and timeless design.',
    rating: 4.3,
    reviews: 25,
  },
];

// ---- Categories ----
// Each category needs: id, title, eyebrow, image, linkText, linkTo
export const categories = [];

// ---- Instagram Images ----
// Array of image URLs for the Instagram gallery section
export const instagramImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAaC1zMuSUjBHOMv_sSsBkDgokQIIA-NDMhPaw3IGe1m18Ucfko7_D9kcMQRAjirgxla7tRzbpPoEsV9VlgfHyWbkwMpVnVzqUKB4nuZB3Ig1TzNu9Trwr-kFvb1-Z0sadaN9qzWcblPz4zz919QevyavPb7ruoYUYDAB_Db-M_vtT8k3RD5cZtdh2sPq24Ool6NND4k4M0AKt3JXwTvLhRw6IbBINo9tS4-w929SVkzeaZm5e6mfXtyQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBF4bfFdTu_bXkIWi0ndtXEcO0AL6PRNtYUUIsQk_RhTxzOnN8vghqA3lQFZBIEtRJevtuGDPVNqH5IWnvpRhdXee8s8zjATmbI3oacvW8HzfdapN1nfkr7z4NEXNl1LUE4LwoJ0phAWoJJpijhQqP-b2b2N6xUlhkNmDoCyI_z4Nl0dt7diwrf35SSGWP-sChwPnAKNz4hbrcJUK2UTyNhsU_L5IBvypP-yBXcEmC4Xv4DM3J9h9Q_yg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCAL6nUs4LAlp-JHq8WzhcFbdXATFYkYm3y4p_U7FnPhKpv_BkFt_tuuhAZezvyH9yyi4V-XXHGKXWoqcJIIxNyS0HC8bRlZNqT145gVixZ0Crum-uWl2IcD6JbfauyyDpZ9964ZRD0ZTOtXmwxkuCVH3JhjMQo7EqmELcRhzCugGd0DyWLKrfIVNB5-OT6cwRBDKtYPNobXL9xoyPWs-sCygEr6Q26qJQZy2D0e3aS3WSoaSRzZbop6Q',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAc0Oiar9gq2ZM6cbUiVXClxe_RE6MAnZmhwE0GlaqFYXsLbIm75MNOLEh1kkHKGMB6FHycfOvmMBLGb-azXNRkbskkQg04Gn-Y7PfRjdP3pXoLM2b6YUDzGqv46MVTPlHmw4lvnWTStZqmJHUAutGD24g9F9VVkkCOueFCTpCfIZ_hKDmbMetWfsAtnUc08sehkGPQkaMVlJmO_SuJU9gZXMV5asxIUn4PAYSxBM6hd4lWExD4nedi-g',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCvUxmp4hQvsGTp6_Tn4M78nIq35fhbIZDVgMoJHHm3Jv54Bz84-BEAfPKVYv4nLhePdijfoYKQ9Y3DZ40g088DcVQYvoo2qiTINFHR_zPNki-Vjp6BwVkZ2lcAv05hKnEAQhx1xoAVxw6XEZr5vkUIc1PMeSttx1UU2xFps5U-eMzp0kgZviNH2AGxTzOmZaXHKTlciQpWr_snhCs-nNkgC2BdHc-YXSE3mubXEBVg0ls7QJM7gY21Qg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBQud-JQhu8owbn32kP89YU21QpjTq1lMCXBtgZB_zN5FTPhUlt5SEX590y4_DBSNMhxaafhqJXXd-VltdRLWEQHDgyRJa_3SGP_F9Bhj0xYWbbVUre-oFVMJZvOahKfVUNHY4LmPsjRH51UGkPLXcRNOWfDa2s1GoqBVDU2xi90DiMxkcAHCk5N3Z7LzVwH7R1d5OmQZ8KL7I1FLQ-aZXvsCTMPUfBqYYgem2lBRGkCntS-cE76ihV8g',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC4lhFChkBW3OOdi942PORLHo8HLgkQec_Xt0LMYidb-rCDOlIEWlmlC5H0SVLOoK5spo8sHzDV0rsaoptlT0i3ig2gEf2D8-vNJW8Z8-wNEU-I8foXRg9siwKhdeLUJYtTvn2M_ZzieX9Lu3UGwtElUKkayOM6_RvErkicGlzFESJg6H9MWu--7LFN-sigBl8ycKrfSgu8xSFdFm0q-XCkl4kz_-DNPuuIWrfE1iTRp-fCUGX3U-SlZg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB3E6RemYs_esoDTx3v33pBxsJ6U_qxkmGGrekD7XRww4GMH6KFV_g_XXyYdwCE_3Tr6XYobF0PT8OdGO_Rjcv6a7ze9hoVxwV3AVfNAFQu29iB3ZAizFYAazrzpk5aUVtNj-ksxnn0Ggzby7amqbObrDTts4n3ghfQwcw_f75sE709XCCquuBLc_TFrAQ2ulfh7xoHaIHRnZETIxPkes-hLrL2ox0PjAtnibgHonuJsLSrAjd_Mcodxg',
  'https://lh3.googleusercontent.com/aida/AP1WRLtUlrQpKlMC8YnjupRmQatdfEQDhUnsllN_ue2PMEaoueP1v4YDukmK3P-YsVMBMR2wzSNz2nELnF6Z3jkyOj9aXzoqIIz7BhkazO4X4dEz5qUnKLzZ-9WZQBLNeJX_BHWbB1Q9znukOkr7KzH8QNqEaWj2qgEugas4t7f3DM5QAMjAoHpYP14u8kqCP_7_zilIv9Arqri-31wMOLMHjACobwnbykgl2CgZSh_AI069FU0RiHOSzzjodYoI',
];

// ---- Reviews ----
// Each review needs: id, name, date, rating, text
// Optional: images (array of URLs)
export const reviews = [
  {
    id: 1,
    name: 'Alex M.',
    date: 'March 2026',
    rating: 5,
    text: 'Exceptional quality. The cashmere blend is incredibly soft and the fit is perfect.',
    images: [],
  },
  {
    id: 2,
    name: 'Jordan K.',
    date: 'February 2026',
    rating: 4,
    text: 'Great cap with premium feel. The detailing on the strap is beautiful.',
    images: [],
  },
  {
    id: 3,
    name: 'Sam T.',
    date: 'January 2026',
    rating: 5,
    text: 'This is my third CAPIST cap. The craftsmanship is consistently outstanding.',
    images: [],
  },
  {
    id: 4,
    name: 'Riley P.',
    date: 'December 2025',
    rating: 5,
    text: 'The fabric quality is unmatched. Feels like a luxury accessory, not just a cap.',
    images: [],
  },
  {
    id: 5,
    name: 'Morgan L.',
    date: 'November 2025',
    rating: 4,
    text: 'Bought the Beige Classic for my husband and he wears it almost every day.',
    images: [],
  },
  {
    id: 6,
    name: 'Casey W.',
    date: 'October 2025',
    rating: 5,
    text: 'Fast shipping, beautiful packaging, and an incredible cap.',
    images: [],
  },
];
