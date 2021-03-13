<template>
  <transition :name="direction">
    <div v-show="visible" class="slide-container w-100 h-100">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Slide",
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
.slide-left-enter-active {
  animation: slide-left-in 0.5s ease-in;
}
.slide-left-leave-active {
  animation: slide-left-out 0.5s ease-in;
}
.slide-right-enter-active {
  animation: slide-right-in 0.5s ease-in;
}
.slide-right-leave-active {
  animation: slide-right-out 0.5s ease-in;
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
