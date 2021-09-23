<template>
  <div>
    <div class="lg:px-20 px-10 pb-32">
      <h3 class="text-purple font-bold text-6xl mt-16 mb-20 text-center">
        Writing
      </h3>

      <div class="flex justify-between my-8 lg:mx-16">
        <div>
          <svg
            width="34"
            height="40"
            viewBox="0 0 34 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2188 0.415771H14.4177V29.4442L3.31965 18.3462L0.0327148 21.67L16.8182 38.4555L33.6407 21.67L30.2799 18.3462L19.2188 29.4442V0.415771Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div class="text-white font-bold pr-5 mt-2 text-xl">{{ articles.length}} Articles</div>
      </div>

      <!-- <div class="flex lg:flex-row flex-col justify-between lg:px-4 mb-10 mt-10"> -->

      <!-- <div class="lg:w-5/12 w-full  shadow-3xl mb-20 border-b-2 border-purple" id="article"> -->
      <!-- <img src="@/assets/images/cover.png" alt=""> -->
      <!-- @@ -38,65 +39,47 @@ -->
      <!-- </div>  -->


      <ul class="w-full grid lg:grid-cols-2 justify-between">
        <li
          class="lg:mx-16  my-10 shadow-3xl mb-20 border-b-2 border-purple"
          v-for="article of articles"
          :key="article.slug"
        >
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div id="article">
              <!-- <img :src="`/images/covers/${article.img}`" /> -->
              <img
      :src="article.img"
      :alt="article.alt"
      class="mx-auto"
    />
            </div>

            <div class="p-4">
              <h3 class=" lg:text-2xl
            text-xl
            font-bold
            my-10
            lg:px-5
            text-center text-white">{{ article.title }}</h3>
             
              <p class="text-gray-200 lg:px-4 px-3 pb-5 text-center">{{ article.description }}</p>
            </div>
            
          </NuxtLink>
        </li>
      </ul>
    </div>
    <Newsletter />
  </div>
</template>

<script>
import Newsletter from "@/components/Newsletter";
export default {
  components: {
    Newsletter,
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
    };
  },
};
</script>

<style scoped></style>