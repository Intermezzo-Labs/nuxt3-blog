<template>
  <div
    v-if="show"
    class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
  >
    <button class="fixed inset-0 transition-opacity" @click="close">
      <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
    </button>
    <section
      class="relative overflow-hidden rounded-lg shadow-2xl lg:pb-0 min-w-fit"
    >
      <div class="ml-auto p-8 text-center sm:p-12 lg:w-2/3 bg-white">
        <p class="text-sm font-semibold uppercase tracking-widest">
          Sign up for our newsletter
        </p>

        <h2 class="my-6 font-black uppercase">
          <span class="text-5xl font-black sm:text-6xl"
            >Stay up to date on
          </span>
          <span class="mt-2 block text-sm"
            >the latest product releases and company news.</span
          >
        </h2>

        <CoreContactUs @submitted="close" />
      </div>

      <div class="absolute bottom-0 left-0 w-full lg:h-full lg:w-1/3 bg-black">
        <img
          alt="Intermezzo"
          src="/logo.png"
          class="absolute inset-0 h-full w-full object-none"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const localStorageKey = "hide-newsLetter-popup";
const show = ref(false);
if (process.client)
  show.value = localStorage.getItem(localStorageKey) !== "true";

function close() {
  show.value = false;
  localStorage.setItem(localStorageKey, "true");
}
</script>
