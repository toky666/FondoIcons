// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "never",
  },

  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: "synthwave-84",
      defaultColor: false,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },

  site: "https://itssofi.dev/",
  integrations: [solidJs(), sitemap(), mdx()],
});