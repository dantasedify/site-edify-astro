export const siteConfig = {
  site: {
    title: "Astro Agency03",
    favicon: "/assets/images/favicon.ico",
  },
  metadata: {
    meta_description: "Astro Agency03 with mdx.",
  },
};

export const menu = [
  {
    text: "Início",
    url: "/",
  },
  {
    text: "Programas",
    url: "#",
    isSubMenu: true,
    submenu: [
      {
        text: "Edify Premium",
        url: "https://edifyeducation.com.br/programas/edify-premium/",
      },
      {
        text: "Edify Essential",
        url: "https://edifyeducation.com.br/programas/to-go/",  
      },
      {
        text: "Edify Digital",
        url: "https://edifyeducation.com.br/edify-play/",
      },
    ],
  },
  {
    text: "Por que Edify?",
    url: "https://edifyeducation.com.br/quem-somos/"
  },
  {
    text: "Carreiras",
    url: "https://edifyeducation.gupy.io/",
  },
  {
    text: "Blog",
    url: "https://edifyeducation.com.br/blog/",
  },
];

export const footerMenu = {
  navigation: [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About Us",
      url: "/about-us",
    },
    {
      text: "Services",
      url: "/services",
    },
    {
      text: "Pricing",
      url: "/pricing",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ],
  utility: [
    {
      text: "FAQ",
      url: "/faq",
    },
    {
      text: "Error 404",
      url: "/notfound-404",
    },
    {
      text: "Integrations",
      url: "/integration",
    },
    {
      text: "Testimonials",
      url: "/testimonial",
    },
    {
      text: "Careers",
      url: "/career",
    },
  ],
  resources: [
    {
      text: "Portfolio",
      url: "/portfolio",
    },
    {
      text: "Testimonials",
      url: "/testimonial",
    },
    {
      text: "Contact",
      url: "/contact",
    },
    {
      text: "Pricing",
      url: "/pricing",
    },
    {
      text: "Blog",
      url: "/blog/1",
    },
  ],
};
