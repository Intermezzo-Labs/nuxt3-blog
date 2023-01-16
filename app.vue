<template>
  <NuxtPage />
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    useHead({
      title: "Intermezzo Labs",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "og:title", property: "og:title", content: "Intermezzo Labs" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Welcome to Intermezzo Labs, where our team of market research experts provide comprehensive SEO services including keyword research, on-page optimization, link building and analytics & reporting to improve your search engine rankings, drive more traffic to your website, and increase your online visibility. We use the latest SEO trends and strategies to help you succeed online. Contact us today to schedule a consultation and start seeing real results for your business.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://intermezzolabs.com/static/intermezzo-labs-logo.png",
        },
        { hid: "og:url", property: "og:url", content: "https://intermezzolabs.xyz" },
        { hid: "og:site_name", property: "og:site_name", content: "Intermezzo Labs" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "twitter:card", name: "twitter:card", content: "summary" },
        { hid: "twitter:site", name: "twitter:site", content: "@intermezzolabs" },
        { hid: "twitter:title", name: "twitter:title", content: "Intermezzo Labs" },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://intermezzolabs.xyz/static/logo.png",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "@/public/favicon.ico" }],
    });
  },
});
</script>
