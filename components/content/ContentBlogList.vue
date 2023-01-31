<template>
  <div
    class="sm:grid sm:grid-cols-2 sm:grid-flow-row sm:px-6 sm:border-b border-white border-opacity-10 overflow-hidden"
  >
    <ContentList path="/blog" :limit="6" :skip="1" v-slot="{ list }">
      <div
        v-for="article in list"
        :key="article._path"
        class="odd:border-r border-white border-opacity-10 sm:px-6"
      >
        <article
          class="pb-16 sm:py-12 sm:border-t sm:-mt-px border-white border-opacity-10"
        >
          <div>
            <NuxtLink :to="article._path">
              <figure>
                <picture>
                  <img src="https://picsum.photos/640/420" alt="" />
                </picture>
              </figure>
            </NuxtLink>
          </div>
          <div class="space-y-4 pt-4 px-4 sm:px-0">
            <h2 class="text-2xl">
              <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
            </h2>
            <p class="text-sm leading-relaxed">{{ article.description }}</p>
            <RouterLink :to="article._path" class="btn">Read more</RouterLink>
          </div>
        </article>
      </div>
    </ContentList>
  </div>
</template>
