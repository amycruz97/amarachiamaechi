<template>
  <section class="lg:px-20 px-10 ">
    <div class="text-center mx-auto mt-20 mb-10">


      <h3 class="lg:text-3xl text-2xl text-white">Hello 👋 ,  my name is</h3>
      <h3 class="lg:text-7xl text-5xl pb-4 text-purple font-bold mt-10">
        Amarachi Amaechi
      </h3>

      <h4 class="pt-10">
        <span class="typed-text lg:text-4xl text-3xl  pb-5 text-white font-semibold"
          >I'm a {{ typeValue }}</span
        >
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h4>
      <p class="text-sm  text-white mt-10">
        Front-End Developer | UX Enthusiast | Technical Writer | Community
        Expert
      </p>

      <div class="pt-10">
        <button
          class="border-2 border-purple  w-60 h-12 text-white rounded-lg focus:outline-none lg:mr-10 mr-0 mb-5"
        >
        <a href="mailto:amarachiamaechi4@gmail.com" rel="nofollow noopener noreferrer" target="_blank">Get In Touch</a>
          
        </button>

        <a
          href="https://drive.google.com/file/d/1COP3hTZ5XT6bwqP32_oZ_shBpkC9O3WG/view?usp=sharing" rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <button
            class="border-2 border-purple  w-60 h-12 text-white rounded-lg focus:outline-none"
          >
            Resume
          </button>
        </a>
      </div>

      <div class="flex mx-auto justify-center items-center my-20">
    <a href="https://github.com/amycruz97" rel="nofollow noopener noreferrer" target="_blank" class="px-2" title="github">
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="49"
            height="49"
          >
            <rect
              x="0.233398"
              y="0.179443"
              width="48.2817"
              height="48.2817"
              fill="url(#pattern0)"
            />
          </mask>
          <g mask="url(#mask0)">
            <circle cx="27.5514" cy="24.5118" r="27.318" fill="#6C00FF" />
          </g>
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0" transform="scale(0.0111111)" />
            </pattern>
            <image
              id="image0"
              width="90"
              height="90"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </a>
        <a
        href="https://twitter.com/AmarachiAmaechi"
        target="_blank"
        class="px-2"
        title="twitter"
      >
        <svg
          width="43"
          height="35"
          viewBox="0 0 43 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.1421 4.34368C40.6019 5.02767 38.9475 5.48796 37.2109 5.69557C38.9845 4.63337 40.3444 2.95156 40.9849 0.946266C39.3273 1.9296 37.4893 2.64417 35.5323 3.03042C33.9664 1.36149 31.7358 0.318604 29.267 0.318604C24.5257 0.318604 20.6825 4.16343 20.6825 8.90308C20.6825 9.57581 20.7598 10.2324 20.9046 10.8585C13.7702 10.5012 7.44529 7.08286 3.20938 1.88776C2.47228 3.15596 2.04901 4.63016 2.04901 6.20575C2.04901 9.18312 3.56344 11.8112 5.86648 13.3498C4.45987 13.3048 3.13535 12.9185 1.9782 12.2764C1.9782 12.3134 1.9782 12.3472 1.9782 12.3842C1.9782 16.5445 4.93625 20.0143 8.86477 20.8013C8.14537 20.9976 7.38574 21.1022 6.60197 21.1022C6.04995 21.1022 5.5108 21.0475 4.98775 20.9494C6.08053 24.3596 9.25102 26.8429 13.0073 26.9121C10.0702 29.2152 6.36861 30.588 2.34514 30.588C1.6531 30.588 0.969111 30.5477 0.296387 30.4673C4.09615 32.9023 8.60727 34.3234 13.4564 34.3234C29.2477 34.3234 37.8804 21.2423 37.8804 9.89768C37.8804 9.52591 37.8724 9.15576 37.8563 8.7872C39.5349 7.57534 40.9914 6.06412 42.1421 4.34368Z"
            fill="#6C00FF"
          />
        </svg>
      </a>
           <a
        href="https://www.linkedin.com/in/amaechi-amarachi/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="px-2"
        title="linkedin"
      >
        <svg
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.2434 0.616943H3.27444C1.49607 0.616943 0.0556641 2.05735 0.0556641 3.83572V32.8047C0.0556641 34.5831 1.49607 36.0235 3.27444 36.0235H32.2434C34.0218 36.0235 35.4622 34.5831 35.4622 32.8047V3.83572C35.4622 2.05735 34.0218 0.616943 32.2434 0.616943ZM11.2474 29.5859H6.49965V14.3096H11.2474V29.5859ZM8.82522 12.1257C7.29469 12.1257 6.05707 10.8848 6.05707 9.35753C6.05707 7.83022 7.2963 6.59099 8.82522 6.59099C10.3509 6.59099 11.5918 7.83183 11.5918 9.35753C11.5918 10.8848 10.3509 12.1257 8.82522 12.1257ZM29.0311 29.5859H24.2866V22.157C24.2866 20.3851 24.2544 18.1062 21.8194 18.1062C19.349 18.1062 18.9692 20.0358 18.9692 22.0282V29.5859H14.2247V14.3096H18.7793V16.397H18.8437C19.4778 15.1964 21.026 13.9298 23.3355 13.9298C28.1427 13.9298 29.0311 17.0939 29.0311 21.2075V29.5859Z"
            fill="#6C00FF"
          />
        </svg>
      </a>
      </div>
    </div>
    <!--     
    <div
      class="flex lg:flex-row flex-col-reverse justify-between  lg:pt-14 lg:pb-5 lg:px-20 px-10  "
    >
      <div class="py-10 lg:w-3/4 w-full pr-40 bg-red-400">
        <h3 class="text-5xl pb-4 text-white font-bold">Hello!  I am Amarachi Amaechi</h3>
     
       
<h4>
  
  <span class="typed-text text-4xl my-5 text-purple font-semibold">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
</h4>
  <p class="text-sm  text-purple mt-10">
          Front-End Developer | UX Enthusiast | Technical Writer | Community Expert
        </p> 

        <p class=" text-white  text-lg pt-5 pb-5   ">

           I am a Front-End Developer that is focused on  transforming UI designs into code and building applications that are scalable, accesssible & user friendly!     
         I'm extremely passionate about building tools for developer, writing, speaking and building developer communities.
        </p>
       
       
        
      </div>
      <div class="lg:w-2/6 w-full  bg-red-200">
        <img
          src="@/assets/images/amy.jpeg"
          alt="my pics"
          class="pics h-80 w-80 mt-3 rounded-full border-dotted border-purple border-4 m-auto "
        />
      </div>
    </div> -->

   

    <!-- <div class="bg-darkblue py-10 mb-20 flex justify-between lg:flex-row flex-col lg:px-20 px-10">
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
    </div> -->

  

    <!-- <Newsletter/> -->
  </section>
</template>

<script>
export default {
  layout: "plain-layout",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "Front-End Developer",
        "UX Enthusiast",
        "Technical Writer",
        "Community Expert"
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    };
  },

  

  methods: {

   
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
 
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body {
  background-color: #15202b;
  /* background: black; */
}
.read-article svg {
  fill: #6c00ff;
}

span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 5px;
  background-color: white;
  animation: cursorblink 1s infinite;
}
span.cursor.typing {
  animation: none;
}

@keyframes cursorblink {
  49% {
    background-color: white;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

@media only screen and (max-width: 600px) {
  
}
</style>
