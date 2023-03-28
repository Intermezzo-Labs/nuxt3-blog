<template>
  <footer aria-label="Site Footer" class="bg-white">
    <div class="container px-4 mx-auto sm:px-0">
      <div class="lg:grid lg:grid-cols-2">
        <div
          class="py-8 border-b border-gray-100 lg:order-last lg:border-b-0 lg:border-l lg:py-16 lg:pl-16"
        >
          <div class="block lg:hidden">
            <AppLogo />
          </div>

          <div class="mt-8 space-y-4 lg:mt-0">
            <span class="hidden w-10 h-1 bg-teal-500 rounded lg:block"></span>

            <div class="mb-6">
              <h2 class="text-2xl font-medium">Request a Demo</h2>

              <p class="max-w-lg mt-4">
                Welcome to Intermezzo Labs, We provide a powerful tool that helps you
                generate high-quality content quickly and easily. Whether you're a
                blogger, social media marketer, or content creator of any kind, Intermezzo
                Labs provides the resources and support you need to create compelling
                content that engages your audience and achieves your goals. With
                Intermezzo Labs, you'll have access to a range of intuitive and
                user-friendly tools that guide you through the content creation process.
                From topic brainstorming to headline generation to content analysis and
                optimization, our tools are designed to help you create content that
                resonates with your audience and drives results. In addition to our tools,
                Intermezzo Labs offers a wealth of resources to support your content
                creation efforts. From writing guides and tutorials to templates and
                examples, we provide everything you need to craft effective content that
                meets your specific needs and goals. So whether you're a seasoned content
                creator or just getting started, Intermezzo Labs is the ultimate resource
                for generating high-quality content that gets results. Try it out today
                and experience the power of effective content creation! We provide a
                platform for users to create, manage and trade digital assets. These
                platforms can be used for a variety of purposes, such as gaming,
                collectibles, and e-commerce. Intermezzo Labs is for anyone who wants to
                leverage blockchain technology.
              </p>
            </div>

            <CoreContactUs />
          </div>
        </div>

        <div class="py-8 lg:py-16 lg:pr-16">
          <div class="hidden lg:block">
            <AppLogo />
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-3">
            <div>
              <p class="font-medium text-gray-900">Services</p>
              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li v-for="link in servicesToc.body.toc.links">
                    <NuxtLink
                      :to="`${servicesToc._path}#${link.id}`"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      {{ link.text }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-medium text-gray-900">Company</p>

              <nav aria-label="Footer Navigation - About" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li v-for="link in aboutToc.body.toc.links">
                    <NuxtLink
                      :to="`${aboutToc._path}#${link.id}`"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      {{ link.text }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-medium text-gray-900">Helpful Links</p>

              <nav aria-label="Footer Navigation - Company" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <NuxtLink
                      to="/blog"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Blog
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="pt-8 mt-8 border-t border-gray-100">
            <nav aria-label="Footer Navigation - Support">
              <ul class="flex flex-wrap gap-4 text-xs">
                <li>
                  <a href="#" class="text-gray-500 transition hover:opacity-75">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </nav>

            <p class="mt-8 text-xs text-gray-500">
              &copy; 2023. Intermezzo Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const [servicesToc] = await queryContent("/services").find();
const [aboutToc] = await queryContent("/about").find();
</script>
