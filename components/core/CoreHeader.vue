<template>
  <header class="h-20 sm:h-full">
    <div class="h-full">
      <div
        class="px-8 sm:py-12 sm:px-10 h-full flex sm:flex-col justify-between items-center gap-4 sm:items-start"
      >
        <button class="sm:hidden">Menu</button>
        <!-- branding -->
        <div>
          <NuxtLink to="/"><AppLogo /></NuxtLink>
          <p class="hidden sm:block text-xs tracking-wide">A web agency</p>
        </div>
        <!-- navigation -->
        <div class="hidden sm:block">
          <nav class="text-lg font-medium">
            <ContentNavigation v-slot="{ navigation }">
              <ul class="space-y-2">
                <li v-for="link of navigation" :key="link._path">
                  <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                </li>
              </ul>
            </ContentNavigation>
          </nav>
        </div>
        <!-- mobile quick links -->
        <div>
          <div class="flex gap-2 sm:hidden">
            <button type="button">Search</button>
            <button type="button">Subscribe</button>
          </div>
          <nav class="hidden sm:block">
            <ul class="flex gap-x-4 flex-wrap">
              <li>
                <a href="https://www.facebook.com/#">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com/#">Twitter</a>
              </li>
              <li>
                <a href="https://www.youtube.com/#">YouTube</a>
              </li>
              <li>
                <a href="https://www.instagram.com/#">Instagram</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
