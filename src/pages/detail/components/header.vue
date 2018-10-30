<template>
<div>
    <div class="fixed">
        <div v-show="isshowback">
            <router-link to='/' tag="div" class="back">〈</router-link>
        </div>
        <div class="header" v-show="!isshowback" :style="opstyle">
            <router-link to='/' tag="div" class="back2">〈</router-link>
            <div class="title" >景点详情</div>
        </div>
    </div>
</div>
</template>
<script>

export default {
  data() {
    return {
      isshowback: true,
      opstyle: { opacity: 0 }
    };
  },
  methods: {
    changescroll() {
       let top = document.documentElement.scrollTop;
      if (top > 20) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opstyle = { opacity };
        this.isshowback = false;
      } else {
        this.isshowback = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.changescroll);
  },
  //由于在监听滚动事件时是在全局注册，所以离开页面需要解绑该事件
  destroyed() {
    window.removeEventListener("scroll", this.changescroll);
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/style/stylus.styl';

.fixed {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;

    .back {
        width: 2rem;
        height: 2.1rem;
        line-height: 2rem;
        padding-left: 0.5rem;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 50%;
        color: #eee;
        position: absolute;
        left: 0.8rem;
        top: 0.8rem;
    }

    .header {
        line-height: 2rem;
        color: white;
        background-color: $bgcolor;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 105;

        .back2 {
            flex: 0.2;
            padding-left: 2rem;
        }

        .title {
            text-align: center;
            flex: 0.5;
        }
    }
}
</style>
