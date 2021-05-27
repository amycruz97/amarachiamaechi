<template>
    <div class="lg:px-20 px-10 ">
        <p class="text-9xl font-bold text-purple text-center mt-40">404</p>
         <p class="text-5xl font-bold text-purple text-center mt-10">page not found</p>
         <NuxtLink to="/" class="flex justify-center py-10">
                    <button class="bg-purple py-3 px-10 rounded-lg my-4 focus:outline-none "> 
                        Return to Home Page
                    </button>
                </NuxtLink>
    </div>
</template>

<script>
export default {
    layout: 'plain-layout',

}
</script>