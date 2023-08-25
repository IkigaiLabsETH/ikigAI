// import { NavItem } from "@/types"

interface SiteConfig {
  name: string
  description: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Ikigai",
  description: "ikigaAI Labs XYZ",
  links: {
    twitter: "https://twitter.com/livethelifetv",
    github: "https://github.com/",
  },
}
