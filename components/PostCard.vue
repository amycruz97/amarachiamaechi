<template>
 <div>
  <div class="lg:px-20 px-10 pb-32">
 
      <h3 class="text-purple font-bold text-6xl mt-16 mb-20 text-center">Writing</h3>

    <div class="flex justify-between  my-5">
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
      <div class=" text-white font-bold pr-5 mt-2">100 Articles</div>
    </div>

     <div class="flex lg:flex-row flex-col justify-between lg:px-4 mb-10 mt-10">
     
     <a href="#" class="lg:w-5/12 w-full  shadow-3xl mb-20 border-b-2 border-purple" id="article">
       <img src="@/assets/images/cover.png" alt="">
       <h3 class="lg:text-4xl text-2xl font-bold  my-10 lg:px-5 px-1 text-center text-white">item.title</h3>
       <p class="text-gray-200 lg:px-4 px-3 pb-5 text-center" >item.description</p>
     </a>

     <!-- <div class="lg:w-5/12   shadow-3xl mb-20 border-b-2 border-purple " id="article">
       <img src="@/assets/images/cover.png" alt="">
       <h3 class="lg:text-4xl text-2xl font-bold  my-10 lg:px-5 text-center text-white">Getting started with Open Source Contribution</h3>
       <p class="text-gray-200 lg:px-4 px-3 pb-5 text-center" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ut, similique atque ad optio temporibus magni doloremque alias consequuntur, tenetur modi repellendus explicabo! Debitis ipsum ullam velit eum, ut recusandae provident ducimus nobis repellat fugit quia, natus labore dolore obcaecati sapiente consectetur aspernatur accusamus nostrum alias quo facere libero inventore.</p>
     </div> -->
     
    </div> 

 <div class="flex text-sm leading-5 text-gray-500" >
            <!-- {{ formatDate(item.date) }} -->
          </div>
 <!-- <ul class="bg-red-400">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2> -->
            <!-- <p>by {{ article.author.name }}</p> -->
            <!-- <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul> -->
      

  

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
