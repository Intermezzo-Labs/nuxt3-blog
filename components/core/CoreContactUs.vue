<template>
  <form @submit.prevent="handleSubmit">
    <label for="UserEmail" class="sr-only"> Email </label>

    <div class="flex items-center gap-1 justify-center">
      <input
        id="UserEmail"
        type="email"
        v-model="email"
        required
        placeholder="satoshi@nakamoto.xyz"
        class="text-sm border-0 h-10 w-64"
      />
      <button
        type="submit"
        class="h-10 text-xs tracking-widest font-medium px-4 uppercase bg-black"
      >
        Sign up
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["submitted"]);
const { addMsg } = useTooltip();
const { sendContactRequest } = useDiscord();

const email = ref();
const handleSubmit = async () => {
  if (!email.value) return;
  await sendContactRequest(email.value);
  addMsg({
    heading: "Newsletter",
    text: "Successfully signed up!",
    type: "success",
  });
  emit("submitted");
};
</script>
