import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  telemetry: { enabled: false },
  content: {
    documentDriven: {
      layoutFallbacks: ['default'],
    },
  },
  components: [
    {
      path: '~/components',
      global: true,
    },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      charset: 'utf-8',
      meta: [],
      link: [
        {
          rel: 'favicon',
          href: '/images/logo.png',
        },
      ],
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - OSP Nawojowa Góra` : 'OSP Nawojowa Góra';
      },
    },
  },
});
