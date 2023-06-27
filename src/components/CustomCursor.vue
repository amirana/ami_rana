<template>
    <div class="cursor" ref="cursor">
      <div class="cursor-outer"></div>
      <div class="cursor-inner"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.updateCursor();
      document.addEventListener('mousemove', this.handleMouseMove);
    },
    methods: {
      handleMouseMove(event) {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      },
      updateCursor() {
        const cursor = this.$refs.cursor;
        const cursorInner = cursor.querySelector('.cursor-inner');
        const cursorOuter = cursor.querySelector('.cursor-outer');
  
        const ease = 0.2;
        let posX = 0;
        let posY = 0;
        let mouseX = 0;
        let mouseY = 0;
  
        const animate = () => {
          posX += (mouseX - posX) * ease;
          posY += (mouseY - posY) * ease;
  
          cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
          cursorInner.style.transform = `translate(-50%, -50%)`;
          cursorOuter.style.transform = `translate(-50%, -50%) scale(2)`;
  
          requestAnimationFrame(animate);
        };
  
        document.addEventListener('mousemove', (event) => {
          mouseX = event.clientX;
          mouseY = event.clientY;
        });
  
        animate();
      },
    },
    data() {
      return {
        mouseX: 0,
        mouseY: 0,
      };
    },
  };
  </script>
  
  <style>
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    pointer-events: none;
    z-index: 9999;
  }
  
  .cursor-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
  
  .cursor-outer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #fff;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.2s ease-out;
  }
  
  html {
    cursor: none;
  }
  </style>
  