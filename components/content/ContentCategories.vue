<template>
  <section class="sm:py-16">
    <div class="grid sm:grid-cols-3 sm:gap-8 container mx-auto max-w-4xl">
      <RouterLink
        to="/"
        v-for="n in 3"
        class="bg-teal-400 h-48 flex items-end justify-center pb-6 group"
      >
        <span
          class="bg-white text-black px-7 py-2 uppercase font-medium text-xs tracking-widest group-hover:bg-black group-hover:text-white transition-colors"
          >Category {{ n }}</span
        >
      </RouterLink>
    </div>
  </section>
</template>
