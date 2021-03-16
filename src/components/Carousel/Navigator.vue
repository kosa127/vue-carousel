<template>
  <div class="navigator-container">
    <div class="navigator navigator-previous" @click="() => $emit('previous')">
      <span class="material-icons navigator-icon">arrow_back_ios</span>
    </div>
    <div class="navigator navigator-next" @click="() => $emit('next')">
      <span class="material-icons navigator-icon">arrow_forward_ios</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigator"
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";
$navigator-color: rgb(255, 255, 255);

.navigator-container {
  :hover {
    background-color: rgba($navigator-color, 0.05);
    cursor: pointer;
  }

  @media screen and (min-width: $breakpoint-md) {
    display: block;
  }

  display: none;
  position: absolute;
  width: 100%;
  height: 100%;

  .navigator {
    transition-duration: 0.3s;
    :hover {
      background-color: transparent;
    }
    z-index: 1;
    position: absolute;
    flex-flow: column;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    align-content: center;
    color: $navigator-color;
    height: 100%;
    padding: 0 10px;
    user-select: none;

    .navigator-icon {
      font-size: 40px;
      padding: 0 15px;
    }
  }

  .navigator-previous {
    left: 0;
  }

  .navigator-next {
    right: 0;
  }
}
</style>
