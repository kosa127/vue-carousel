<template>
  <div class="carousel-container w-100 h-100">
    <navigator v-if="navigator" @next="handleNext" @previous="handlePrevious" />
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
  model: {
    prop: "index",
    event: "slide-changed"
  },
  data: function() {
    return {
      slides: [],
      direction: "slide-right"
    };
  },
  props: {
    index: {
      type: [String, Number],
      required: true
    },
    navigator: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.slides = this.$children.filter(
      child => child.$options.name === "Slide"
    );
  },
  methods: {
    handleNext() {
      this.direction = "slide-right";
      if (this.index === this.slides.length - 1) {
        this.$emit("slide-changed", 0);

        return;
      }
      this.$emit("slide-changed", this.index + 1);
    },
    handlePrevious() {
      this.direction = "slide-left";
      if (this.index === 0) {
        this.$emit("slide-changed", this.slides.length - 1);

        return;
      }
      this.$emit("slide-changed", this.index - 1);
    }
  }
};
</script>

<style lang="scss" scoped />
