<template>
  <div class="carousel-container w-100 h-100">
    <navigator v-if="navigator" @next="next" @previous="previous" />
    <slot></slot>
    <indicator v-if="indicator" :index="index" :thumbnails="thumbnails" />
  </div>
</template>

<script>
import Navigator from "./Navigator";
import Indicator from "./Indicator";
import throttle from "lodash.throttle";
import touchMixin from "../../mixins/touch";

export default {
  name: "Carousel",
  mixins: [touchMixin],
  components: {
    Navigator,
    Indicator
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
      type: Number,
      required: true
    },
    navigator: {
      type: Boolean,
      default: true
    },
    indicator: {
      type: Boolean,
      default: true
    },
    timeout: {
      type: Number,
      default: 0
    },
    throttle: {
      type: Number,
      default: 2000
    },
    swipeable: {
      type: Boolean,
      default: true
    },
    swipeTolerance: {
      type: Number,
      default: 20
    },
    thumbnails: {
      validator: val => Array.isArray(val) && val.every(v => Array.isArray(v)),
      default: () => []
    }
  },
  computed: {
    currentSlide() {
      return this.slides[this.index];
    }
  },
  created() {
    if (this.timeout) setInterval(() => this.next(true), this.timeout);

    // prevent from spamming next and previous indicators
    this.next = throttle(this.next, this.throttle);
    this.previous = throttle(this.previous, this.throttle);
  },
  mounted() {
    this.slides = this.$children.filter(
      child => child.$options.name === "Slide"
    );
  },
  methods: {
    next(invokedByInterval = false) {
      // prevent from going to next slide invoked by interval if user has focus on current slide
      if (invokedByInterval && this.currentSlide.focused) return;

      this.direction = "slide-right";
      if (this.index === this.slides.length - 1) {
        this.$emit("slide-changed", 0);

        return;
      }
      this.$emit("slide-changed", this.index + 1);
    },
    previous() {
      this.direction = "slide-left";
      if (this.index === 0) {
        this.$emit("slide-changed", this.slides.length - 1);

        return;
      }
      this.$emit("slide-changed", this.index - 1);
    },
    handleTouchEnd() {
      if (!this.swipeable) return;

      const { endX, startX } = this.touch;

      // too small move, ignore it
      if (!endX || Math.abs(endX - startX) < this.swipeTolerance) return;

      if (endX < startX) this.next();
      else this.previous();
    }
  }
};
</script>

<style lang="scss" scoped />
