<template>
  <div>
    <CoreHeader />
    <div class="grid container mx-auto max-w-4xl grid-cols-3 py-12">
      <main class="prose col-span-2">
        <slot />
      </main>
      <aside>more blog posts</aside>
    </div>
    <CoreFooter />
  </div>
</template>
