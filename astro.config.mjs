import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "prism",
    theme: "material-light",
  },
  integrations: [
    tailwind(),
    react(),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
    image(),
  ],
});
