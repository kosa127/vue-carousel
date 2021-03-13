<template>
  <div id="app">
    <image-carousel />
    <shop-navigation />
  </div>
</template>

<script>
import ImageCarousel from "./components/ImageCarousel";
import ShopNavigation from "./components/ShopNavigation";

export default {
  name: "App",
  components: {
    ImageCarousel,
    ShopNavigation
  }
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
