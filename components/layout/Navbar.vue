<template>
    <div class="container">

        <nav class="navbar text-white w-screen py-4 lg:px-20 px-10 flex items-center justify-between flex-wrap shadow-xl">
            <div class="flex items-center flex-no-shrink text-white mr-6">
                <nuxt-link to="/">
                        <img src="@/assets/images/logo.svg" alt="my logo" class="w-8 rounded-full">
                </nuxt-link>

            </div>
            <div class="block sm:hidden">
                <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"> 
                    <span>
                        <svg
                            class="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </span>
                </button>

            </div>

            <div 
                :class="open ? 'block' : 'hidden'"
                class="w-full  sm:flex sm:items-center sm:w-auto"
            >
                <div class="text-sm sm:flex-grow" >
                    <NuxtLink to="/About" class="about block mt-4 sm:inline-block sm:mt-0 text-white text-lg font-bold hover:text-white mr-10 hover:text-purple-700 border-transparent border-b-2 hover:border-purple" >About</NuxtLink>
                    <NuxtLink to="/Speaking" class="speaking block mt-4 sm:inline-block sm:mt-0 text-white text-lg font-bold hover:text-white mr-10  hover:text-purple-700  border-transparent border-b-2 hover:border-purple">Speaking</NuxtLink>
                    <NuxtLink to="/blog" class="blog block mt-4 sm:inline-block sm:mt-0 text-white text-lg font-bold hover:text-white mr-10  hover:text-purple-700 border-transparent border-b-2 hover:border-purple">Writing</NuxtLink>
                    <NuxtLink to="/Contact" class="contact block mt-4 sm:inline-block sm:mt-0 text-white text-lg font-bold hover:text-white mr-10  hover:text-purple-700 border-transparent border-b-2 hover:border-purple">Contact</NuxtLink>
                </div>  
            </div>


        </nav>

    </div>
</template>
 
 <script>
export default {
  data() {
    return {
      open: false,
    }
  },

  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
 
 <style scoped>

</style>

