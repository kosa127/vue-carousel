<template>
  <div id="app">
    <image-carousel />
  </div>
</template>

<script>
import ImageCarousel from "./components/ImageCarousel.vue";

export default {
  name: "App",
  components: {
    ImageCarousel
  }
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
