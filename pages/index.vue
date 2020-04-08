<template>
  <div class="test">
    <h1>Hello world !</h1>
    <p>Find Denis</p>
    <Pot />
    <div>
      <img class="lazy" data-src="/denis.jpg" />
    </div>
  </div>
</template>

<script>
import Pot from '~/assets/svg/pot.svg?inline';

export default {
  components: {
    Pot,
  },
};
</script>

<style lang="scss" scoped>
.test {
  p {
    margin-top: 100px;
  }
  svg {
    width: 100px;
    height: 100px;
    fill: $titleColor;
  }
  img {
    margin-top: 2000px;
  }
}
</style>
