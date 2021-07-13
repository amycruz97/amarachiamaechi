<template>
  <div class="lg:px-20 px-10">
    <div class="speaking ">
      <h3 class="text-purple font-bold text-6xl mt-16 mb-20 text-center">
        Speaking
      </h3>
      <p class="text-white text-center text-xl">
        Want me to speak at your event? Reach out to me via
        <a
          href="mailto:amarachiamaechi4@gail.com"
          class="hover:text-purple font-bold "
          >email</a
        >
        or
        <a
          href="https://twitter.com/AmarachiAmaechi"
          class="hover:text-purple font-bold "
          >twitter</a
        >
      </p>

      <h4 class="text-center text-4xl font-bold text-purple my-10">
        Past Talks
      </h4>
      <div class=" flex justify-center items-center flex-col cursor-pointer">
        <div
          class="bg-purple text-white lg:w-3/5 w-full lg:h-48  rounded-lg mt-5 my-5 lg:pl-5 pl-4 pr-1"
          v-for="past in speaking.past.slice().reverse()"
          :key="past.id"
        >
          <a :href="past.link" target="blank">
            <p class="pt-5">{{ past.date }}</p>
            <p class="font-bold  lg:text-3xl text-2xl py-4">
              {{ past.title }}
            </p>
            <p class="pb-4 lg:text-2xl text-xl font-semibold">
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
