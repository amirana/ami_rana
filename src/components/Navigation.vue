<template>
    <div>
        <div @click="isOpen = !isOpen" class="hamburger cursor-pointer">
            <img src="./img/hamburger.png" alt="Hamburger">
        </div>

        <nav :class="{'nav-open': isOpen}" class="menu">
            <ul class="menu-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
        </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
}
</script>