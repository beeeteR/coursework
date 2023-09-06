<template>
  <div class="container home-content">
    <my-carousel></my-carousel>
    <div class="line"></div>
  </div>
</template>

<script lang="ts" setup>
import MyCarousel from "@/components/MyCarousel.vue";

</script>


<style lang="scss" scoped>
.line {
  height: 2px;
  width: 100%;
  margin-top: 10px;
  border-radius: 50%;
  background: linear-gradient(90deg, rgb(255, 255, 255), rgb(185, 185, 185) 5%, rgb(145, 145, 145), rgb(185, 185, 185) 95%, rgb(255, 255, 255));
}

</style>
