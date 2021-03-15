export default {
  data: function() {
    return {
      touch: {
        startX: 0,
        endX: 0
      }
    };
  },
  mounted() {
    this.$el.addEventListener("touchstart", this.handleTouchStart);
    this.$el.addEventListener("touchmove", this.handleTouchMove);
    this.$el.addEventListener("touchend", this.handleTouchEnd);
  },
  beforeDestroy() {
    this.$el.removeEventListener("touchstart", this.handleTouchStart);
    this.$el.removeEventListener("touchmove", this.handleTouchMove);
    this.$el.removeEventListener("touchend", this.handleTouchEnd);
  },
  methods: {
    handleTouchStart({ touches }) {
      this.touch.startX = touches[0].clientX;
      this.touch.endX = 0;
    },
    handleTouchMove({ touches }) {
      this.touch.endX = touches[0].clientX;
    }
  }
};
