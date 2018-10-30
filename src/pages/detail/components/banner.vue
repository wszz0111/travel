<template>
<div>
    <div class="all" @click="imgbtn">
        <div class="imgpart">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_600x330_38a5c69c.jpg" alt="">
        </div>
        <div class="banner-info">
            <div class="info-title">峨眉山(AAAAA景区)</div>
            <div class="info-img"><span class="iconfont back-icon">&#xe678;</span> 39</div>
        </div>
    </div>
    <fade>
        <gallary v-show="isgallary"  @close="changeit"></gallary>
    </fade>
    </div> 
</template>
<script>
import gallary from "common/gallary/gallary.vue";
import fade from "common/fade/fade.vue";
export default {
  components: {
    gallary,
    fade
  },
  data() {
    return {
      isgallary: false
    };
  },
  methods: {
    imgbtn() {
      this.isgallary = true;
    },
    changeit() {
      this.isgallary = false;
    }
  }
};
</script>
<style scoped lang='stylus'>
.all {
    position: relative;

    .imgpart {
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;

        .banner-img {
            width: 100%;
        }
    }

    .banner-info {
        display: flex;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        color: #fff;
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

        .info-title {
            flex: 1;
            padding: 0 1rem;
            font-size: 1.2rem;
            line-height: 2rem;
        }

        .info-img {
            margin: 0.3rem 0;
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 0.7rem;
            flex: 0.15;
            padding: 0 1.2rem;
            text-align: center;
        }
    }
}
</style>
