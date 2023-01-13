// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css"
  }
})
