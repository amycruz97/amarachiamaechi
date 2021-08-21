<template>
  <div class="lg:px-20 px-10">
    <div class="speaking pb-10 ">
      <h3 class="text-purple font-bold lg:text-6xl text-5xl mt-16 mb-20 text-center">
        Speaking
      </h3>
      <p class="text-white text-center text-lg ">
        Want me to speak at your event? Reach out to me via
        <a
        rel="nofollow noopener noreferrer"
          href="mailto:amarachiamaechi4@gail.com"
          class="hover:text-purple font-bold "
          >email</a
        >
        or
        <a
        rel="nofollow noopener noreferrer"
          href="https://twitter.com/AmarachiAmaechi"
          class="hover:text-purple font-bold "
          >twitter</a
        >
      </p>

      <h4 class="text-center lg:text-4xl text-2xl font-bold text-purple my-10">
        Past Talks
      </h4>
      <div class=" flex justify-center items-center flex-col cursor-pointer">
        <div
          class="bg-purple text-white lg:w-3/5 w-full  h-48  rounded-lg mt-5 my-5 lg:pl-5 pl-4 pr-1"
          v-for="past in speaking.past.slice().reverse()"
          :key="past.id"
        >
          <a :href="past.link" target="blank" rel="nofollow noopener noreferrer">
            <p class="pt-5">{{ past.date }}</p>
            <p class="font-bold  lg:text-3xl text-lg py-4">
              {{ past.title }}
            </p>
            <p class="pb-4 lg:text-xl text-base font-semibold pt-2">
              {{ past.event }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import speaking from "../data/speaking.json";
export default {
  data() {
    return {
      speaking
    };
  },
  layout: "plain-layout"
};
</script>
