<template>
  <div class="navigation-container">
    <div class="navigation-title">spring 2019</div>
    <p class="navigation-subtitle">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
    </p>
    <div class="navigation-actions-container">
      <button class="navigation-btn">shop women</button>
      <button class="navigation-btn">shop men</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopNavigation"
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";

$font-color: rgb(255, 255, 255);

.navigation-container {
  @media screen and (min-width: $breakpoint-md) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    margin: 0;
    height: 250px;
  }

  z-index: 1;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: $font-color;
  width: $breakpoint-xs;
  margin: 0 calc((100% - #{$breakpoint-xs}) / 2);
  bottom: 130px;
  user-select: none;
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  .navigation-title {
    text-transform: uppercase;
    font-size: 2.3rem;
    font-weight: 550;
  }

  .navigation-subtitle {
    font-size: 0.9rem;
    color: darken($font-color, 10%);
  }

  .navigation-actions-container {
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    height: 150px;
    width: 100%;

    @media screen and (min-width: $breakpoint-md) {
      flex-flow: row;
      justify-content: space-between;
    }

    .navigation-btn {
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      @media screen and (min-width: $breakpoint-md) {
        width: 45%;
        height: 45px;
      }

      transition-duration: 0.3s;
      color: inherit;
      text-transform: uppercase;
      font-family: inherit;
      font-weight: 550;
      width: 100%;
      height: 60px;
      background-color: transparent;
      border: 2px solid white;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
