<template>
  <nav class="space-x-8 font-medium">
    <ContentNavigation v-slot="{ navigation }" :query="catsQuery">
      <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path">{{
        link.title
      }}</NuxtLink>
    </ContentNavigation>
  </nav>
</template>

<script lang="ts" setup>
// const catsQuery = queryContent("cats");
// If you'd prefer to pass along raw `QueryBuilderParams`:
const catsQuery = {
  where: [{ _path: /^\// }],
};
const { data: nav } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
</script>

<style scoped>
nav a {
  @apply py-4;
}
nav a.router-link-active {
  @apply border-b;
}
</style>
