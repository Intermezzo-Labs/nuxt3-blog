<template>
  <div>
    <CoreHeader />
    <div
      class="grid container mx-auto max-w-4xl sm:grid-cols-3 p-4 sm:py-12 sm:px-0 gap-12"
    >
      <main class="prose sm:col-span-2">
        <slot />
      </main>
      <aside>more blog posts</aside>
    </div>
    <CoreFooter />
  </div>
</template>
