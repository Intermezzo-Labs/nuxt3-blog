<template>
  <form class="w-full mt-6" @submit.prevent="handleSubmit">
    <label for="UserEmail" class="sr-only"> Email </label>

    <div
      class="p-2 border border-gray-100 rounded-md focus-within:ring sm:flex sm:items-center sm:gap-4"
    >
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
const email = ref();
const { sendContactRequest } = useDiscord();
const handleSubmit = async () => {
  if (!email.value) return;
  await sendContactRequest(email.value);
  alert("Form submitted successfully");
};
</script>
