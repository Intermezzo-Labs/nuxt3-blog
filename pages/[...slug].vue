<template>
  <NuxtLayout :name="layout">
    <ContentDoc />
    <CoreEmailPopUp />
    <CoreTooltip />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute();
const layout = computed(() => {
  if (route.path.startsWith("/blog/")) return "blog";
  return "default";
});
</script>
