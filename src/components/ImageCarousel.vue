<template>
  <carousel v-model="currentSlide" :timeout="10000" :thumbnails="thumbnails">
    <slide
      class="d-flex"
      v-for="(slideCfg, slideIdx) in slides"
      :key="slideIdx"
      :index="slideIdx"
    >
      <div
        v-for="(src, urlIdx) in slideCfg.src"
        :key="urlIdx"
        class="image-container w-100 h-100"
        :style="{ backgroundImage: getDareknImage(src, 0.5) }"
      >
        <shop-navigation />
      </div>
    </slide>
  </carousel>
</template>

<script>
import Carousel from "./Carousel/Carousel";
import Slide from "./Slide";
import { desktopSlides, mobileSlides } from "../config/image-carousel";
import ShopNavigation from "./ShopNavigation";
import breakpoints from "../utils/breakpoints";

export default {
  components: {
    Carousel,
    Slide,
    ShopNavigation
  },
  created() {
    window.addEventListener("resize", this.syncWindowWidth);
    this.syncWindowWidth();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.syncWindowWidth);
  },
  data: function() {
    return {
      currentSlide: 0,
      windowWidth: 0
    };
  },
  computed: {
    slides() {
      return this.windowWidth >= breakpoints.md ? desktopSlides : mobileSlides;
    },
    thumbnails() {
      return this.slides.map(s => [...s.src]);
    }
  },
  methods: {
    syncWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    getDareknImage(src, darken) {
      return `linear-gradient(rgba(0, 0, 0, ${darken}),rgba(0, 0, 0, ${darken})) , url(${src})`;
    }
  }
};
</script>

<style>
.image-container {
  background-size: cover;
}
</style>
