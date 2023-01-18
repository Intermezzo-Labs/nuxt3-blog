// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: {},
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  runtimeConfig: {
    public: {
      NUXT_DISCORD_WEBHOOK_SPIDER_BOT_URL:
        process.env.NUXT_DISCORD_WEBHOOK_SPIDER_BOT_URL,
    },
  },
});
