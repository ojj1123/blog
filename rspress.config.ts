import * as path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  globalStyles: path.join(__dirname, "src/styles/index.css"),
  root: path.join(__dirname, "docs"),
  title: "Jeongjin.me",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  builderConfig: {
    resolve: {
      alias: {
        "@/components": "./src/components",
      },
    },
  },
  themeConfig: {
    enableContentAnimation: true,
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/ojj1123/",
      },
      {
        icon: "linkedin",
        mode: "link",
        content: "https://www.linkedin.com/in/jeongjin-oh/",
      },
      {
        icon: "bluesky",
        mode: "link",
        content: "https://bsky.app/profile/jeongjin.me",
      },
    ],
  },
});
