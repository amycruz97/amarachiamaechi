<template>
  <div class="mb-20 mt-16">
    <h2 class="text-purple font-bold text-6xl text-center">Contact Me</h2>
    <p class="text-white text-center my-10 lg:mx-60 mx-8">
      Hey there. If you are looking to reach out to me you can use this form
      although in general you will probably reach me quicker on <a href="https://twitter.com/AmarachiAmaechi" class="hover:text-purple">Twitter</a> or <a href="https://www.linkedin.com/in/amaechi-amarachi/" class="hover:text-purple">Linkedin</a>
    </p>

    <form action="https://formsubmit.co/amarachiamaechi4@gmail.com" method="POST" class="mx-auto" @submit="submit">
      <div class=" lg:mx-60 mx-10">
        <input type="hidden" name="_subject" value="New message from your website">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="http://localhost:3000/thankyou">
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder="Your Name"
          required
          class="w-full h-12 p-2 rounded border-2 border-transparent  focus:outline-none focus:border-purple"
        />
      </div>
      <div class="lg:mx-60 mx-10  my-10">
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="Your Email"
          required
          class="w-full h-12 p-2 rounded border-2 border-transparent  focus:outline-none focus:border-purple"
        />
      </div>
      <div class=" lg:mx-60 mx-10 mt-5 mb-5">
        
        <textarea
          name="message"
          id=""
          v-model="message"
          cols="30"
          rows="7"
          placeholder="Your Message"
          required
          class="w-full p-2 rounded border-2 border-transparent  focus:outline-none focus:border-purple"
        ></textarea>
      </div>

      <div class="flex justify-center">
        <button type="submit" class="bg-purple w-48  h-12 rounded font-bold  text-white border-2 border-transparent focus:outline-none">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
        return {
          name:'',
          email:'',
          message:''


        
            
          
        }
      },
  methods: {
    submit(){
      // this.name = '',
      // this.email = '',
      // this.message = ''
    }
       
   }
}

</script>