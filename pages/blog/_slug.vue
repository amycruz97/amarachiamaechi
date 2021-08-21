<template>
    <article class="text-white">
      <!-- <nav>
  <ul>
    <li v-for="link of article.toc" :key="link.id">
      <NuxtLink :to="`#${link.id}`" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</nav> -->
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    

    <nuxt-content :document="article" />
     <!-- <nuxt-content :document="page" class="" /> -->

<author :author="article.author" />

 <!-- <prev-next :prev="prev" :next="next" /> -->
    
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const slug = params.slug || 'index'
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },

    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 }
  }
</script>

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
    color: #6C00FF;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>