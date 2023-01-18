interface DiscordInput {
  content: string;
  username: string;
  avatar_url: string;
}

const sendContactRequest = async (email: string) => {
  try {
    const config = useRuntimeConfig();
    const url = config.public.NUXT_DISCORD_WEBHOOK_SPIDER_BOT_URL;
    if (!url) throw new Error("Spider Bot Webook is not set");
    const input: DiscordInput = {
      content: `New Contact Form Submission: ${email}`,
      username: "Spider Bot",
      avatar_url: "https://your-avatar-url.com",
    };
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default function () {
  return {
    sendContactRequest,
  };
}
