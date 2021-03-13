<template>
  <carousel>
    <slide class="d-flex">
      <div
        class="image-container w-100 h-100"
        style="background-image: url(carousel/woman/3.jpg)"
      ></div>
      <div
        class="image-container w-100 h-100"
        style="background-image: url(carousel/man/3.jpg)"
      ></div>
    </slide>
  </carousel>
</template>

<script>
import Carousel from "./Carousel/Carousel";
import Slide from "./Slide";

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style>
.image-container {
  background-size: cover;
}
</style>
