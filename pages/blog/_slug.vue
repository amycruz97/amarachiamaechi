<template>
  <article class="text-white p-5 mx-auto pt-10 lg:w-3/5">
    

    <img
      :src="`/images/covers/${article.img}`"
      :alt="article.alt"
      class="mx-auto"
    />
    <h1 class="text-white lg:text-3xl text-xl text-center py-10">{{ article.title }}</h1>

    <div class="flex justify-center text-center lg:text-xl font-bold my-8">
      <p>{{ formatDate(article.updatedAt) }}</p>
      <span class="px-10">⏱ 5mins read</span>
    </div>

    <p class="lg:text-xl text-lg">{{ article.description }}</p>
    <div class="mb-20">
      <nuxt-content :document="article" class="lg:text-xl text-lg" />
    </div>
    <!-- <nuxt-content :document="page" class="" /> -->
    <hr />
    <div class="flex mt-10">
      <div>
        <img
          src="@/assets/images/amy2.jpeg"
          alt="my picture"
          class="rounded-full w-20 h-20 mr-5"
        />
      </div>
      <div class="mt-2">
        <p>WRITTEN BY</p>
        <p>Amarachi Amaechi</p>
      </div>
    </div>
    <!-- <author :author="article.author" /> -->

    <!-- <prev-next :prev="prev" :next="next" /> -->

   

    <div id="disqus_thread" class="mt-20"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://www-amarachiamaechi-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug || "index";
    const article = await $content("articles", params.slug).fetch();

    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
.mx-auto {
  margin: 0 auto;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}

@media only screen and (max-width: 600px) {
  .nuxt-content h2 {
  font-weight: bold;
  font-size: 20px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 18px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
}
</style>
