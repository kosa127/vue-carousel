<template functional>
  <div class="indicator-container">
    <div
      v-for="(el, idx) in Array(props.length)"
      :key="idx"
      class="material-icons indicator"
      :style="{
        color: idx === props.index ? 'rgb(200, 200, 200)' : 'white'
      }"
    >
      fiber_manual_record
    </div>
  </div>
</template>

<script>
export default {
  name: "Indicator",
  props: {
    index: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

.indicator-container {
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, -50%);

  position: absolute;
  text-align: center;
  width: 100%;

  .indicator {
    padding: 0 10px;
    font-size: 15px;
  }
}
</style>
