<template>
  <!-- <form v-if="!formSubmitted" @submit.prevent="handleSubmit"> -->
  <form @submit.prevent="handleSubmit">
    <label for="UserEmail" class="sr-only"> Email </label>

    <div class="flex items-center gap-4">
      <input
        id="UserEmail"
        type="email"
        v-model="email"
        required
        placeholder="satoshi@nakamoto.xyz"
        class="w-full p-2 rounded-lg border border-gray-800 focus:outline-none focus:border-green-500"
      />
      <AppBtn type="submit">Sign up</AppBtn>
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
  localStorage.setItem("formSubmitted", "true");
  emit("submitted");
};
</script>
