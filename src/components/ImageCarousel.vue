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
      ></div>
    </slide>
  </carousel>
</template>

<script>
import Carousel from "./Carousel/Carousel";
import Slide from "./Slide";
import { desktopSlides } from "../config/image-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  data: function() {
    return {
      currentSlide: 0
    };
  },
  computed: {
    slides() {
      return desktopSlides;
    }
  }
};
</script>

<style>
.image-container {
  background-size: cover;
}
</style>
