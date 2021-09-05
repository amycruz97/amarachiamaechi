<template>
 <div>
  <div class="lg:px-20 px-10 pb-32">
 
     

     <div class="flex lg:flex-row flex-col justify-between lg:px-4 mb-10 mt-10">
     
    

     <!-- <div class="lg:w-5/12   shadow-3xl mb-20 border-b-2 border-purple " id="article">
       <img src="@/assets/images/cover.png" alt="">
       <h3 class="lg:text-4xl text-2xl font-bold  my-10 lg:px-5 text-center text-white">Getting started with Open Source Contribution</h3>
       <p class="text-gray-200 lg:px-4 px-3 pb-5 text-center" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ut, similique atque ad optio temporibus magni doloremque alias consequuntur, tenetur modi repellendus explicabo! Debitis ipsum ullam velit eum, ut recusandae provident ducimus nobis repellat fugit quia, natus labore dolore obcaecati sapiente consectetur aspernatur accusamus nostrum alias quo facere libero inventore.</p>
     </div> -->
     
    </div> 

 <div class="flex text-sm leading-5 text-gray-500" >
            <!-- {{ formatDate(item.date) }} -->
          </div>
 <ul class="bg-red-400">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2> -->
            <!-- <p>by {{ article.author.name }}</p> -->
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul> 
      

  

  </div>

 
</div>
  
</template>

<script>
export default {
    props: {
      item: {
        type: Object,
        required: true
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

<style  scoped>

</style>
