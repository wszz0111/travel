<template>
<div class="wrapper">
  <swiper v-if="this.swiperlist.length>1" :options="swiperOption">
    <swiper-slide v-for="item of this.swiperlist" :key="item.id">
      <img class="swiper-img" :src="item.src" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: { swiperlist: Array },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        speed: 300,
        notNextTick: true,
        autoplay: true
      }
    };
  }
};
</script>

<style scoped lang='stylus'>
.wrapper >>> .swiper-pagination-bullet {
  background-color: #fff;
}

.wrapper {
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 31.25%;
}

.swiper-img {
  width: 100%;
}
</style>