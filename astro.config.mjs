import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import { SITE } from './src/config.mjs';
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => SITE.googleAnalyticsId ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'server',
  adapter: netlify(),
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin]
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), 

  mdx(), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), compress({
    css: true,
    html: {
      removeAttributeQuotes: false
    },
    img: false,
    js: true,
    svg: false,
    logger: 1
  }), react()],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  },
  routes: {
    '/': 'src/pages/index.astro',
    'blog/[...slug]': 'src/pages/blog/[...slug].astro',
  }
});