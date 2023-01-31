<template>
  <div class="sm:flex">
    <div class="sm:sticky top-0 sm:h-screen">
      <ContentQuery
        path="/blog"
        :limit="1"
        :only="['_path', 'title', 'description', 'image', 'createdAt']"
        v-slot="{ data }"
      >
        <article
          class="p-10 sm:w-96 prose h-full bg-black prose-invert flex flex-col justify-end relative"
        >
          <h1>{{ data[0].title }}</h1>
          <p v-if="data[0].createdAt">{{ data[0].createdAt }}</p>
          <hr class="w-24 border-2 border-white" />
          <p>{{ data[0].description }}</p>
          <RouterLink :to="data[0]._path">Read more</RouterLink>
          <figure class="absolute inset-0">
            <img :src="data[0].image.src" :alt="data[0].image.alt" />
          </figure>
        </article>
      </ContentQuery>
    </div>
    <div
      class="sm:grid sm:grid-cols-2 sm:grid-flow-row sm:px-6 sm:border-b border-white border-opacity-10"
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
  </div>
</template>

<script lang="ts" setup></script>
