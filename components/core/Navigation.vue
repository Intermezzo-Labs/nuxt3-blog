<template>
  <nav class="space-x-8 font-medium">
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/blog">Blog</NuxtLink>
    <NuxtLink to="/services">Services</NuxtLink>
  </nav>
</template>

<style scoped>
nav a {
  @apply py-4;
}
nav a.router-link-active {
  @apply border-b;
}
</style>
