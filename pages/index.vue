<template>
  <section class="container">
    
    <div
      class="flex lg:flex-row flex-col-reverse justify-between lg:pt-14 lg:pb-10 lg:px-20 px-10"
    >
      <div class="py-10 lg:w-1/2 w-full">
        <h3 class="text-2xl pb-4">Hello! I am Amarachi Amaechi</h3>
        <!-- <p class="pb-4 text-3xl ">I am Amarachi Amaechi</p> -->
        <p class="text-4xl text-purple">
          Front-end Developer | Technical Writer | Community Expert
        </p>
        <p class="py-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          nulla in sunt sequi. Obcaecati architecto atque eos? Inventore
          consequatur possimus placeat perferendis, laborum modi impedit quos,
          labore nesciunt pariatur repellendus. Quae architecto a officiis nemo
          deleniti. Totam repellat sunt, odit similique, ipsum sint inventore
          corrupti consectetur molestias mollitia sit porro adipisci cumque
          doloribus distinctio. Quidem sunt pariatur nisi sint est temporibus
          qui rem velit, consequuntur deleniti odio magnam facilis officia sit
          quaerat maxime obcaecati unde? Nobis cum dignissimos expedita aperiam.
        </p>
      </div>
      <div>
        <img
          src="@/assets/images/amy2.jpeg"
          alt="my pics"
          class="pics h-96 w-96 mt-10"
        />
      </div>
    </div>

    <hr />

    <div class="bg-darkblue py-10 mb-20 flex justify-between lg:flex-row flex-col lg:px-20 px-10">
      <div class="lg:w-1/4">
        <h4 class="text-4xl text-bold pb-2 text-purple">I write stuffs</h4>
        <p>Frontend development, <br> Technical Writing,<br> community building,<br> and personal branding.</p>
        <button class="flex read-article px-2 py-3 border w-60 my-4 ">
          <NuxtLink to="/Writing" class="pr-3 pt-1">READ MY ARTICLES</NuxtLink>
          <svg
            width="55"
            height="31"
            viewBox="0 0 55 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13.3027L0 17.7313L46.6074 17.7313L36.3706 27.9681L39.4366 31L54.9195 15.517L39.4366 0L36.3706 3.1L46.6074 13.3027L0 13.3027Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div class="vertical-line border my-10">

      </div>

      <div class="lg:w-1/4">
        <h4 class="text-4xl text-bold pb-2 text-purple">I build stuffs</h4>
        <p>Frontend development, <br> Technical Writing,<br> community building,<br> and personal branding.</p>
        <button class="flex read-article px-2 py-3 border w-60 my-4 ">
          <a href="https://github.com/amycruz97/" class="pr-3 pt-1 ">SEE MY WORK</a>
         
          <svg
            width="55"
            height="31"
            viewBox="0 0 55 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13.3027L0 17.7313L46.6074 17.7313L36.3706 27.9681L39.4366 31L54.9195 15.517L39.4366 0L36.3706 3.1L46.6074 13.3027L0 13.3027Z"
              fill=""
            />
          </svg>
        </button>
      </div>
    </div>

    <hr>

    <Newsletter/>

    

    


    


  </section>
</template>
 
 <script>
export default {
  
};
</script>




<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body {
  background-color: #15202b;
}
.read-article svg {
  fill: #6c00ff;
}

@media only screen and (max-width: 600px) {
  .pics {
    /* background-color: red; */
  }
}
</style>
