<template>
  <transition :name="direction" mode="out-in">
    <div
      v-show="visible"
      class="slide-container w-100 h-100"
      @mouseover="focused = true"
      @mouseleave="focused = false"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Slide",
  data: function() {
    return {
      focused: false
    };
  },
  props: {
    index: {
      type: [Number],
      required: true
    }
  },
  computed: {
    visible() {
      return this.$parent.index === this.index;
    },
    direction() {
      return this.$parent.direction;
    }
  }
};
</script>

<style lang="scss">
.slide-container {
  position: absolute;
}
.slide-left-enter-active {
  animation: slide-left-in 1s ease-in;
}
.slide-left-leave-active {
  animation: slide-left-out 1s ease-in;
}
.slide-right-enter-active {
  animation: slide-right-in 1s ease-in;
}
.slide-right-leave-active {
  animation: slide-right-out 1s ease-in;
}

@keyframes slide-left-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-left-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes slide-right-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes slide-right-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
