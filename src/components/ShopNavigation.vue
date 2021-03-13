<template>
  <div class="navigation-container">
    <div class="navigation-title">spring 2019</div>
    <div class="navigation-subtitle">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
    </div>
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
$font-color: rgb(255, 255, 255);

.navigation-container {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: $font-color;
  width: 500px;
  height: 120px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;

  .navigation-title {
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 550;
  }

  .navigation-subtitle {
    font-size: 12px;
    color: darken($font-color, 10%);
  }

  .navigation-actions-container {
    display: flex;
    justify-content: space-around;

    .navigation-btn {
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      transition-duration: 0.3s;
      color: inherit;
      text-transform: uppercase;
      font-family: inherit;
      font-weight: 550;
      width: 200px;
      height: 40px;
      background-color: transparent;
      border: 2px solid white;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
