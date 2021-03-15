<template>
  <carousel v-model="currentSlide" :timeout="10000">
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
        :style="{ backgroundImage: `url(${src})` }"
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
    }
  },
  methods: {
    syncWindowWidth() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>

<style>
.image-container {
  background-size: cover;
}
</style>
