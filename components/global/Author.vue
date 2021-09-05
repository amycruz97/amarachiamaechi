<template>
  <div>
    <!-- <img :src="author.image" /> -->
    <div>
      <h4>Author</h4>
      <p>{{ author.name }}</p> 
     
    </div>
  </div>
</template>

<script>
  export default {
    
    props: {
      author: {
        // type: Object,
        required: true,
        
      }
    }
  }
</script>