<template>
  <nav class="space-x-8 font-medium">
    <ContentNavigation v-slot="{ navigation }" :query="query">
      <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path">{{
        link.title
      }}</NuxtLink>
    </ContentNavigation>
  </nav>
</template>

<script lang="ts" setup>
const query = {
  where: [{ _path: /^\// }],
};
</script>

<style scoped>
nav a {
  @apply py-4;
}
nav a.router-link-active {
  @apply border-b;
}
</style>
