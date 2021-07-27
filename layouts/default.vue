<template>
  <div>
    <Navbar/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default {
  components: {
    Navbar,
    Footer
    
  }
  
}
</script>

<style>
body {
  /* background-color: #15202b; */
  background:#0a0a0a;
}
html {
  font-family: 'Play Display', serif;
  /* font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif; */
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
