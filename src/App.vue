<script>

import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import About from './components/About.Vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';

export default{
  components: {
    Navigation,
    Hero,
    About,
    Work,
    Contact
  }
}
</script>

<template>
  <!-- Header -->
  <header>
    <Navigation/>
  </header>
  
  <!-- Main -->
  <main>
    <Hero />
    <div class="relative ml-auto w-1/2">
      <About />
      <Work />
      <Contact />
    </div>
  </main>
</template>

<style scoped>

</style>
