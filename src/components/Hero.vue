<template>
    <!-- Hero Section -->
   <section class="hero fixed w-1/2 top-0 left-0 bottom-0 min-h-screen flex items-center px-20 bg-purple">
        <div class="hero__content text-white">
            <h1 class="font-bold text-4xl leading-snug mb-8">
                <transition-group name="fade">
                    <span v-for="(char, index) in typedText" :key="index" class="typed-char animate-fade">
                        {{ char }}
                    </span>
                </transition-group>
            </h1>
            <p class="mb-16 text-lg">A skilled front-end developer with nearly 3 years of experience, complemented by a fresh perspective in UI-UX design, aiming to create intuitive and visually appealing digital experiences.</p>
            <a href="#contact" class="rounded-full inline-block bg-lightPurple text-lg text-purple px-8 py-5 transition-bg duration-300 hover:bg-yellow">Let's Connect and Collaborate</a>
        </div>
   </section>
</template>

<script>
export default {
  data() {
    return {
      text: 'Hey there, I am Ami Rana, a front-end developer and UI-UX designer.',
      typedText: ''
    };
  },
  computed: {
    delay() {
      return 40; // Adjust this value to control the typing speed
    }
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex >= this.text.length) {
          clearInterval(intervalId);
        } else {
          this.typedText += this.text[currentIndex];
          currentIndex++;
        }
      }, this.delay);
    }
  }
};
</script>

<style>
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade {
  animation-name: fade;
  animation-duration: 0.5s;
}
</style>