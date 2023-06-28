<script>
// import CustomCursor from './components/CustomCursor.vue'
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import Intro from './components/Intro.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
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

    <header class="fixed z-10 w-9/12 lg:w-2/4 xl:w-3/12 top-5 md:top-11 lg:top-11 left-8 md:left-11 lg:left-11 px-0 md:px-7 lg:px-9">
      <Navigation />
    </header>

    <main>
      <!-- Hero  -->
      <Hero />

      <!-- Section Scroll -->
      <div class="relative ml-0 lg:ml-auto w-full xl:w-1/2 z-0">
        <div class="overlap-section">
            <Intro />
            <About />
            <Work />
            <Contact />
        </div>
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
  z-index: 1;
}
</style>
