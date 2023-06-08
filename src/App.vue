<script>

import Navigation from './components/navigation.vue';
import Hero from './components/Hero.vue';

export default{
  components: {
    Navigation,
    Hero
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
  </main>
</template>

<style scoped>

</style>
