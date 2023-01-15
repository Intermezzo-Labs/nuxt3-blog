<template>
  <header class="bg-black text-white">
    <div class="flex h-24 container mx-auto items-center gap-12">
      <NuxtLink to="/"><AppLogo /></NuxtLink>
      <CoreNavigation class="flex-1 text-right" />
      <div>
        <AppBtn disabled>Connect</AppBtn>
      </div>
    </div>
  </header>
</template>
