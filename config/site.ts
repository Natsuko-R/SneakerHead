import type { FooterItem, MainNavItem } from "@/types"

// import { productCategories } from "@/config/products"
import { slugify } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

const links = {
  twitter: "https://twitter.com/sadmann17",
  github: "https://github.com/sadmann7/skateshop",
  githubAccount: "https://github.com/sadmann7",
  discord: "https://discord.com/users/sadmann7",
  calDotCom: "https://cal.com/sadmann7",
}

export const siteConfig = {
  name: "Sneaker",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js.",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/build-a-board",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
    // ...productCategories.map((category) => ({
    //   title: category.title,
    //   items: [
    //     {
    //       title: "All",
    //       href: `/categories/${slugify(category.title)}`,
    //       description: `All ${category.title}.`,
    //       items: [],
    //     },
    //     ...category.subcategories.map((subcategory) => ({
    //       title: subcategory.title,
    //       href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
    //       description: subcategory.description,
    //       items: [],
    //     })),
    //   ],
    // })),
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "About",
      items: [
        {
          title: "111",
          href: "https://onestopshop.jackblatch.com",
          external: true,
        },
        {
          title: "222",
          href: "https://acme-corp.jumr.dev",
          external: true,
        },
        {
          title: "333",
          href: "https://craft.mxkaske.dev",
          external: true,
        },
        {
          title: "444",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "555",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "111",
          href: links.twitter,
          external: true,
        },
        {
          title: "222",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "333",
          href: links.discord,
          external: true,
        },
        {
          title: "444",
          href: links.calDotCom,
          external: true,
        },
      ],
    },
    {
      title: "Home",
      items: [
        {
          title: "111",
          href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
          external: true,
        },
        {
          title: "222",
          href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
          external: true,
        },
        {
          title: "333",
          href: "https://www.youtube.com/watch?v=rwionZbOryo",
          external: true,
        },
        {
          title: "444",
          href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/pages/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/pages/Contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/pages/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/pages/privacy",
          external: false,
        },
      ],
    },
  ] satisfies FooterItem[],
}
