import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "prism",
    theme: "material-light",
  },
  integrations: [tailwind(), react(), mdx(), image()],
});
