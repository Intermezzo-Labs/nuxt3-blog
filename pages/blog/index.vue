<template>
  <NuxtLayout>
    <main>
      <ContentDoc />
    </main>
    <section>
      <div class="container mx-auto max-w-3xl grid grid-cols-2 gap-16">
        <ContentList path="/blog" v-slot="{ list }">
          <article v-for="article in list" :key="article._path">
            <div>
              <NuxtLink :to="article._path">
                <figure>
                  <picture>
                    <img src="https://picsum.photos/640/420" alt="" />
                  </picture>
                </figure>
              </NuxtLink>
            </div>
            <div class="space-y-4 pt-4">
              <p>27 octobre 2022 All Harvey Solidarity</p>
              <h2 class="text-2xl">
                <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
              </h2>
              <p>{{ article.description }}</p>
            </div>
          </article>
        </ContentList>
      </div>
    </section>
  </NuxtLayout>
</template>
