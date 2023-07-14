// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/sanity', 'nuxt-gtag'],
  gtag: {
    initialConsent: false,
    
  },
  sanity: {
    projectId: process.env.SANITY_URL,
    dataset: 'production',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
})