<template>
  <div class="">
    <div class="about lg:px-20 px-10 pb-10">
      <h3
        class="
          lg:text-7xl
          text-6xl text-purple
          font-bold
          text-center
          mb-20
          mt-10
        "
      >
        About Me
      </h3>

      <div class="flex justify-evenly lg:flex-row flex-col">
        <div class="lg:w-2/6 w-full pb-10 lg:mr-16 mr-0 lg:ml-2 ml-0">
          <img
            src="@/assets/images/amy2.jpeg"
            alt="my picture"
            class="border-4 border-purple border-dotted rounded-lg"
          />
        </div>

        <div class="lg:w-3/4 w-full">
          <div class="text-white lg:text-2xl text-xl pb-5 lg:pr-4 pr-1">
            <p class="pb-4">
              Hi, I'm Amarachi Amaechi a Front-End Developer who is focused on
              transforming UI designs into code and building applications that
              are scalable, accesssible & user friendly!
            </p>
            <p class="pb-4">
              I'm extremely passionate about building tools for developer,
              writing, speaking and building developer communities. I am an
              international
              <span class="underline hover:text-purple">
                <NuxtLink to="/Speaking" target="_blank"
                  >Speaker</NuxtLink
                > </span
              >, and have spoken at many meet-ups and conferences worldwide.
            </p>
            <p class="pb-4">
              I am an Author, who recently published an ebook
              <a
                href="https://gumroad.com/l/gswtebook"
                class="underline hover:text-purple pr-3"
                >"Getting Started in tech: A guide to building a tech
                career".</a
              >
              I write
              <span class="underline hover:text-purple">
                <NuxtLink to="/writing" target="_blank">articles</NuxtLink>
              </span>
              articles focused on web development and personal development.
            </p>
            <p class="pb-4">
              I organise
              <a href="https://twitter.com/VuejsNg">
                <span class="hover:text-purple font-bold underline">
                  Vuejs Nigeria
                </span>
              </a>
              a front-end developer community. when I am coding or studying new
              technologies on the web, you can find me watching documentaries,
              movies, trying out new food recipes, and reading.
            </p>
          </div>
        </div>
      </div>
     
    </div>

     <div
        class="bg-darkblue shadow-3xl lg:px-5 px-10 mt-20 lg:mb-40 mb-20 py-10 lg:mx-20 mx-0 "
        id="skills"
      >
        <h3 class="lg:text-5xl text-3xl text-purple font-bold text-center">
          Skills & Tools
        </h3>

        <div class="grid lg:grid-cols-8 grid-cols-2 pt-16 pb-5">
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg"
            alt="HTML5"
            class="lg:mr-10 lg:pr-1 pr-10 mb-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg"
            alt="CSS"
            class="mr-10 lg:pr-1 pr-10 mb-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg"
            alt="javascript"
            class="mr-10 lg:pr-1 pr-10 mb-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"
            alt="bootstrap"
            class="mr-10 lg:pr-1 pr-10 mb-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg"
            alt="tailwindcss"
            class="mr-10 lg:pr-1 pr-10 mb-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21.svg"
            alt="sass"
            class="mr-10 lg:pr-1 pr-10 mb-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg"
            alt="vuejs"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-ar21.svg"
            alt="Nuxt"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
            alt="React"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/jamstack/jamstack-ar21.svg"
            alt="jamstack"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
            alt="git"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/github/github-ar21.svg"
            alt="github"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg"
            alt="gitlab"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg"
            alt="visual studio code"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"
            alt="node"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-ar21.svg"
            alt="webpack"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/webflow/webflow-ar21.svg"
            alt="webflow"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/wordpress/wordpress-ar21.svg"
            alt=""
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
          <img
            height="50"
            src="https://www.vectorlogo.zone/logos/figma/figma-ar21.svg"
            alt="figma"
            class="mr-10 mb-10 lg:pr-1 pr-10"
          />
        </div>
      </div>

    <div
      class="lg:px-20 px-5 mt-10 pt-5 pb-20 bg-darkblue lg:mx-20"
      id="services"
    >
      <h3
        class="
          lg:text-5xl
          text-3xl text-purple
          font-bold
          pt-5
          lg:pb-20
          pb-10
          text-center
        "
      >
        My services
      </h3>
      <div class="flex lg:flex-row flex-col text-xl mx-auto lg:px-0 px-6">
        <div
          class="
            shadow-3xl
            w-72
            h-64
            rounded-xl
            text-white
            border-b-8 border-purple
            px-4
            lg:mr-10
            border-2
            mb-10
          "
        >
          <img
            src="@/assets/images/logo.svg"
            alt="my logo"
            class="w-8 rounded-full mt-5"
          />
          <h3 class="py-4 text-xl font-bold">Website Development</h3>
          <p class="mt-5 text-sm">
            I transforming UI designs into code and building applications that
            are scalable, accesssible & user friendly
          </p>
        </div>
        <div
          class="
            shadow-3xl
            w-72
            h-64
            rounded-xl
            text-white
            border-b-8 border-purple
            px-4
            mr-10
            border-2
            mb-10
          "
        >
          <img
            src="@/assets/images/logo.svg"
            alt="my logo"
            class="w-8 rounded-full mt-5"
          />
          <h3 class="py-4 text-xl font-bold">UX Design</h3>
          <p class="mt-5 text-sm">
            I am currently learning User Experience design to be able to create
            outstanding prototypes and designs.
          </p>
        </div>
        <div
          class="
            bg-darkblue
            shadow-3xl
            w-72
            h-64
            rounded-xl
            text-white
            border-b-8 border-purple
            px-4
            mr-10
            border-2
            mb-10
          "
        >
          <img
            src="@/assets/images/logo.svg"
            alt="my logo"
            class="w-8 rounded-full mt-5"
          />
          <h3 class="py-4 text-xl font-bold">Technical Writing</h3>
          <p class="mt-5 text-sm">
            I write well documented technical articles for clients and agencies.
          </p>
        </div>
        <div
          class="
            shadow-3xl
            w-72
            h-64
            rounded-xl
            text-white
            border-b-8 border-purple
            px-4
            border-2
            
          "
        >
          <img
            src="@/assets/images/logo.svg"
            alt="my logo"
            class="w-8 rounded-full mt-5"
          />
          <h3 class="py-4 text-lg font-bold">Community Management</h3>
          <p class="mt-5 text-sm">
            I build and manage community in the developer ecosystem such as
            <a href="https://twitter.com/VuejsNg">
              <span class="hover:text-purple font-bold underline">
                Vuejs Nigeria
              </span>
              &
            </a>
            <a href="https://t.me/joinchat/scigCJgqwVs1NzI0"
              ><span class="hover:text-purple font-bold underline"
                >Bitpowr Technologies Community</span
              >.
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
