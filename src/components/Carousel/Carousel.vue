<template>
  <div class="carousel-container w-100 h-100">
    <slot v-if="navigator" name="navigator">
      <navigator />
    </slot>
    <slot></slot>
  </div>
</template>

<script>
import Navigator from "./Navigator";

export default {
  name: "Carousel",
  components: {
    Navigator
  },
  props: {
    navigator: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped />
