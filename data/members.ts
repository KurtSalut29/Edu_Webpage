export interface Business {
  name: string;
  logo: string;
  description: string;
  poster: string;
  mission: string;
  vision: string;
  youtubeUrl: string;
  gallery: string[];
}

export interface Member {
  id: number;
  slug: string;
  name: string;
  role: string;
  photo: string;
  business: Business;
}

export const members: Member[] = [
  {
    id: 1,
    slug: 'angelyn-tangcay',
    name: 'Angelyn Talacay',
    role: 'Founder & Environmental Advocate',
    photo: '/images/Angelyn_Tangcay.png',
    business: {
      name: 'Sustaining Tomorrow, Today',
      logo: '/images/Angelyn_Talacay_Logo.png',
      description:
        'Sustaining Tomorrow, Today is a community-driven environmental advocacy initiative dedicated to uniting people in the fight for a cleaner, greener Earth. Through education, outreach, and grassroots action, the movement empowers individuals and communities to take meaningful steps toward sustainability.\n\nFrom local clean-up drives to awareness campaigns and sustainable living workshops, every effort is rooted in the belief that collective action creates lasting change. Together, we rise — for the planet, for each other, and for the generations that follow.',
      poster: '/images/Angelyn_Talacay_Poster.jpg',
      mission:
        'To unite communities in raising awareness and taking action to protect and preserve our environment, promoting sustainable practices for the well-being of present and future generations.',
      vision:
        'A world where people stand together as responsible stewards of the Earth, creating a cleaner, greener, and more sustainable home for all.',
      youtubeUrl: 'https://youtu.be/ogpXXPgOzFk?si=ei46mWgvzvqqpCAo',
      gallery: [
        '/images/member1-gallery-1.jpg',
        '/images/member1-gallery-2.jpg',
        '/images/member1-gallery-3.jpg',
      ],
    },
  },
  {
    id: 2,
    slug: 'benjie-labanancia',
    name: 'Benjie Labanancia',
    role: 'Founder & Head Pitmaster',
    photo: '/images/BENJIE_LABANANCIA.png',
    business: {
      name: "Benjie's BBQ",
      logo: '/images/BENJIE_LABANANCIA_Logo.jpg',
      description:
        "Benjie's BBQ is a community-rooted barbecue business built on the simple belief that great food brings people together. Every skewer is grilled with care, using fresh ingredients and time-honored techniques that deliver bold, satisfying flavors at prices everyone can enjoy.\n\nMore than just a food stall, Benjie's BBQ is a story of hard work, passion, and the joy of sharing a meal. From neighborhood gatherings to everyday cravings, we serve every customer with a smile and a plate full of happiness.",
      poster: '/images/BENJIE_LABANANCIA_Poster.jpg',
      mission:
        "Benjie's BBQ is committed to providing tasty, clean, and budget-friendly barbecue using fresh ingredients. It serves customers with care and a smile while supporting daily needs through honest work, building strong relationships, and bringing happiness through every meal.",
      vision:
        "Benjie's BBQ aims to become a trusted and loved barbecue brand in the community by serving delicious, affordable, and high-quality food. It wants to bring people together through enjoyable grilled meals that remind them of home, family, and happy moments. The business hopes to grow, reach more customers, and inspire others through hard work and passion.",
      youtubeUrl: 'https://youtube.com/shorts/5f1CpOJFy-w?si=8825yg5KBc9cmrvd',
      gallery: [
        '/images/member2-gallery-1.jpg',
        '/images/member2-gallery-2.jpg',
        '/images/member2-gallery-3.jpg',
      ],
    },
  },
  {
    id: 3,
    slug: 'chan-barro',
    name: 'Christian Paul D. Barro',
    role: 'Founder & Farm Manager',
    photo: '/images/CHAN.png',
    business: {
      name: 'Barro Piggery',
      logo: '/images/CHAN_Logo.jpg',
      description:
        'Barro Piggery is a modern livestock farm dedicated to producing high-quality, healthy, and affordable pork products for the community. The farm operates with a strong commitment to animal welfare, biosecurity, and sustainable farming practices that protect both the animals and the environment.\n\nFounded with a vision for responsible agriculture, Barro Piggery combines traditional farming values with modern techniques to ensure every product meets the highest standards. From farm to table, every step is guided by integrity, care, and a deep respect for the land.',
      poster: '/images/CHAN_Poster.jpg',
      mission:
        'To produce and supply high-quality, healthy, and affordable pork products while maintaining the highest standards of animal welfare, biosecurity, and sustainable farming practices. We are committed to contributing to food security and providing excellent service to our community and partners.',
      vision:
        'To be a leading and trusted piggery farm recognized for excellence in production, innovation, and ethical business operations. We aspire to grow sustainably while setting a benchmark for modern and responsible livestock farming in the region.',
      youtubeUrl: 'https://youtu.be/5CXRJPIOcaY?si=vqAyZYWflZ-08sf1',
      gallery: [
        '/images/member3-gallery-1.jpg',
        '/images/member3-gallery-2.jpg',
        '/images/member3-gallery-3.jpg',
      ],
    },
  },
  {
    id: 4,
    slug: 'joel-macapinig',
    name: 'Joel L. Macapinig Jr.',
    role: 'Founder & Poultry Farmer',
    photo: '/images/JOEL.png',
    business: {
      name: "Joel's Poultry",
      logo: '/images/Joel_Logo.jpg',
      description:
        "Joel's Poultry is a community-rooted farm specializing in chickens and egg production, built on the values of quality, cleanliness, and care. With a vintage farm-to-table spirit, every product is raised with attention to animal welfare and food safety standards that customers can trust.\n\nThe business carries a proud artisanal identity — honest, regional, and dedicated to delivering fresh, healthy poultry products to families and local markets. Joel's Poultry is more than a farm; it's a commitment to nourishing the community with integrity.",
      poster: '/images/Joel_Poster.jpg',
      mission:
        'To produce fresh, healthy, and affordable poultry products for the community and maintain high standards of cleanliness, animal care, and food safety.',
      vision:
        'To become a leading and trusted poultry producer that provides high-quality, safe, and affordable poultry products while promoting sustainable and ethical farming practices.',
      youtubeUrl: 'https://youtube.com/shorts/x_3p1161BK0?si=6ASl0J220LWZgIoT',
      gallery: [
        '/images/member4-gallery-1.jpg',
        '/images/member4-gallery-2.jpg',
        '/images/member4-gallery-3.jpg',
      ],
    },
  },
  {
    id: 5,
    slug: 'mark-markatha',
    name: 'Mark Cator Marañan',
    role: 'Founder & Bookshop Curator',
    photo: '/images/Mark.png',
    business: {
      name: 'MarKatha Bookshop',
      logo: '/images/Mark_Logo.jpg',
      description:
        'MarKatha Bookshop carries a soft, poetic identity that blends literature, nature, and storytelling into one elegant space. More than a place to buy books, it is a haven where stories grow, emotions bloom, and creativity is nurtured — a quiet corner where every book has a soul.\n\nInspired by the word "Katha" (story), the bookshop celebrates authorship, imagination, and the continuous creation of stories. With earthy warmth and a timeless aesthetic, MarKatha invites every reader to find a piece of themselves within its pages.',
      poster: '/images/Mark_Poster.jpg',
      mission:
        'To gather and share stories that grow in the heart, to give voice to dreamers and writers, and to create a space where words live, and everyone belongs.',
      vision:
        'To be a quiet haven where stories bloom — where every page awakens imagination and every reader finds a piece of themselves.',
      youtubeUrl: 'https://youtube.com/shorts/TWzlfBz5Ohs?si=6UyQ_f2nCc_sjAeI',
      gallery: [
        '/images/member5-gallery-1.jpg',
        '/images/member5-gallery-2.jpg',
        '/images/member5-gallery-3.jpg',
      ],
    },
  },
];
