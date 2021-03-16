<template>
  <div class="indicator-container">
    <div class="thumbnails-container">
      <div
        v-for="(thumb, idx) in thumbnails"
        :key="idx"
        class="thumbnail d-flex"
        :class="{ active: idx === index }"
        @click="() => $emit('thumbnail-clicked', idx)"
      >
        <div v-for="(src, id) in thumb" :key="id" class="thumbnail-item">
          <div
            class="thumbnail-image d-flex w-100 h-100"
            :style="{ backgroundImage: `url(${src})` }"
          ></div>
        </div>
      </div>
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
    thumbnails: {
      validator: val => Array.isArray(val) && val.every(v => Array.isArray(v)),
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";
$thumbnail-width: 50px;

.indicator-container {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);

  .thumbnails-container {
    display: flex;
    justify-content: center;
    height: 70px;

    .thumbnail {
      cursor: pointer;
      display: flex;
      margin: 0 20px;
      border: 2px solid white;
      transition: transform 2s ease;

      &.active {
        cursor: auto;
        box-shadow: 10px 10px 20px black;
        transform: translateY(-15px);
      }

      .thumbnail-item {
        width: 50px;

        .thumbnail-image {
          background-size: cover;
        }
      }
    }
  }
}
</style>
