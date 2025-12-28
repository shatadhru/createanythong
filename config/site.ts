/* =========================
   NAVBAR TYPES
========================= */

export type NavbarCommon = {
  name: string;
  path: string;
  external?: boolean;
  authRequired?: boolean;
};

export type PcNavbarItem = NavbarCommon & {
  iconPc: string;
};

export type MobileNavbarItem = NavbarCommon & {
  iconMobile: string;
};

/* =========================
   SITE / SEO CONFIG
========================= */

export const SITE_CONFIG = {
  siteName: "Shatadhru Official",
  siteUrl: "https://www.shatadhru.online",

  description:
    "Professional web developer, UI designer & software engineer. Premium websites, apps & branding solutions.",

  keywords: [
    "Web Developer",
    "UI Designer",
    "Node.js",
    "Next.js",
    "React",
    "Bangladesh Developer",
  ],

  author: {
    name: "Shatadhru Acharjee",
    website: "https://www.shatadhru.online",
  },

  socialLinks: {
    facebook: "https://facebook.com/",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },

  assets: {
    logo: "/logo/logo.png",
    favicon: "/favicon.ico",
    ogImage: "/og/og-image.png",
  },

  meta: {
    themeColor: "#020202",
    accentColor: "#ff9100",
    language: "en",
  },
} as const;

/* =========================
   NAVBAR CONFIG (PC + MOBILE)
========================= */

export const NAVBAR_CONFIG = {
  pc: <PcNavbarItem[]>[
    {
      name: "Home",
      path: "/",
      iconPc: "/icons/pc/home.svg",
    },
    {
      name: "Services",
      path: "/services",
      iconPc: "/icons/pc/services.svg",
    },
    {
      name: "Blog",
      path: "/blog",
      iconPc: "/icons/pc/blog.svg",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      iconPc: "/icons/pc/dashboard.svg",
      authRequired: true,
    },
    {
      name: "EEFB",
      path: "https://www.eefb.org",
      iconPc: "/icons/pc/external.svg",
      external: true,
    },
  ],

  mobile: <MobileNavbarItem[]>[
    {
      name: "Home",
      path: "/",
      iconMobile: "/icons/mobile/home.svg",
    },
    {
      name: "Services",
      path: "/services",
      iconMobile: "/icons/mobile/services.svg",
    },
    {
      name: "Blog",
      path: "/blog",
      iconMobile: "/icons/mobile/blog.svg",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      iconMobile: "/icons/mobile/dashboard.svg",
      authRequired: true,
    },
    {
      name: "EEFB",
      path: "https://www.eefb.org",
      iconMobile: "/icons/mobile/external.svg",
      external: true,
    },
  ],
} as const;
