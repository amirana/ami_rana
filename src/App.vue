<script>
// import CustomCursor from './components/CustomCursor.vue'
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import Intro from './components/Intro.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';

export default {
  components: {
    // CustomCursor,
    Navigation,
    Hero,
    Intro,
    About,
    Work,
    Contact
  },
};
</script>

<template>
  <div>

    <header class="fixed w-3/12 h-96 top-11 left-11 px-9 z-50">
      <Navigation />
    </header>

    <main>
      <!-- Hero  -->
      <Hero />

      <!-- Section Scroll -->
      <div class="relative ml-auto w-1/2 z-0">
        <Intro />
        <About />
        <Work />
        <Contact />
      </div>
      <!-- <CustomCursor /> -->

    </main>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.overlap-section {
  position: sticky;
  top: 0;
  z-index: -1;
}
</style>
