<template>
    <div class="fixed w-3/12 top-11 left-11 rounded px-9 z-50" :class="{ 'bg-transparent': isMenuOpen, 'bg-transparent': !isMenuOpen }">
        <div @click="toggleMenu" class="hamburger cursor-pointer w-16 py-6" >
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
              <g style="opacity:0.35;">
                <path d="M93,35.5v-11c0-3.584-2.916-6.5-6.5-6.5h-69c-3.584,0-6.5,2.916-6.5,6.5v11c0,2.317,1.222,4.349,3.052,5.5   C12.222,42.151,11,44.183,11,46.5v11c0,2.317,1.222,4.349,3.052,5.5C12.222,64.151,11,66.183,11,68.5v11c0,3.584,2.916,6.5,6.5,6.5   h69c3.584,0,6.5-2.916,6.5-6.5v-11c0-2.317-1.222-4.349-3.052-5.5C91.778,61.849,93,59.817,93,57.5v-11   c0-2.317-1.222-4.349-3.052-5.5C91.778,39.849,93,37.817,93,35.5z"/>
              </g>
              <g>
                <path style="fill:#F2F2F2;" d="M91,33.5v-11c0-3.584-2.916-6.5-6.5-6.5h-69C11.916,16,9,18.916,9,22.5v11   c0,2.317,1.222,4.349,3.052,5.5C10.222,40.151,9,42.183,9,44.5v11c0,2.317,1.222,4.349,3.052,5.5C10.222,62.151,9,64.183,9,66.5v11   c0,3.584,2.916,6.5,6.5,6.5h69c3.584,0,6.5-2.916,6.5-6.5v-11c0-2.317-1.222-4.349-3.052-5.5C89.778,59.849,91,57.817,91,55.5v-11   c0-2.317-1.222-4.349-3.052-5.5C89.778,37.849,91,35.817,91,33.5z"/>
              </g>
              <g>
                <g>
                  <rect x="15.5" y="22.5" style="fill:#f8e792;" width="69" height="11"/>
                  <path style="fill:#40396E;" d="M84.5,35h-69c-0.828,0-1.5-0.671-1.5-1.5v-11c0-0.829,0.672-1.5,1.5-1.5h69    c0.828,0,1.5,0.671,1.5,1.5v11C86,34.329,85.328,35,84.5,35z M17,32h66v-8H17V32z"/>
                </g>
                <g>
                  <rect x="15.5" y="44.5" style="fill:#f8e792;" width="69" height="11"/>
                  <path style="fill:#40396E;" d="M84.5,57h-69c-0.828,0-1.5-0.671-1.5-1.5v-11c0-0.829,0.672-1.5,1.5-1.5h69    c0.828,0,1.5,0.671,1.5,1.5v11C86,56.329,85.328,57,84.5,57z M17,54h66v-8H17V54z"/>
                </g>
                <g>
                  <rect x="15.5" y="66.5" style="fill:#f8e792;" width="69" height="11"/>
                  <path style="fill:#40396E;" d="M84.5,79h-69c-0.828,0-1.5-0.671-1.5-1.5v-11c0-0.829,0.672-1.5,1.5-1.5h69    c0.828,0,1.5,0.671,1.5,1.5v11C86,78.329,85.328,79,84.5,79z M17,76h66v-8H17V76z"/>
                </g>
              </g>
              </svg>        
          </div>

        <nav v-show="isMenuOpen" class="menu">
            <ul class="menu-list">
                <li><a href="#" class="mb-4 block font-semibold">About</a></li>
                <li><a href="#" class="mb-4 block font-semibold">Projects</a></li>
                <li><a href="#" class="mb-4 block font-semibold">Contact</a></li>
                <li><a href="#" class="mb-6 block font-semibold">Resume</a></li>
            </ul>
        </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
}
</script>