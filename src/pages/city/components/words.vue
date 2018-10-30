<template>
    <div class="py">
        <div v-for="(item,index) of this.cities" :ref="item.word" :key='index' @click="wordbtn"
        @touchstart.prevent="handletouchstart"
        @touchmove="handletouchmove"
        @touchend="handletouhend">{{item.word}}</div>
    </div>
</template>
<script>
//touchstart.prevent阻止开始触摸的默认事件
export default {
  props: ["cities"],
  data() {
    return {
      touchstate: false,
      AToTop: 0,
      timer: null
    };
  },
  updated() {
    this.AToTop = this.$refs.A[0].offsetTop;
  },
  methods: {
    wordbtn(e) {
      this.$emit("changge", e.target.innerHTML);
    },
    handletouchstart() {
      this.touchstate = true;
    },
    handletouchmove(e) {
      //找到a到顶部的距离，再找到当前字母到顶部的距离
      //用当前字母距离 - a到顶部距离 = 当前字母到a的距离
      //再除以每个字母的高度 = 当前在第几个字母
      if (this.touchstate) {
        //性能优化
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          let NowToTop = e.touches[0].clientY;
          let result = Math.floor((NowToTop - this.AToTop) / 24);
          if (result >= 0 && result < this.cities.length) {
            this.$emit("changge", this.cities[result].word);
          }
        }, 16);
      }
    },
    handletouhend() {
      this.touchstate = false;
    }
  }
};
</script>
<style scoped lang='stylus'>
@import '~@/assets/style/stylus.styl';

.py {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding-top: 5rem;

  div {
    line-height: 1.5rem;
    color: $bgcolor;
    text-align: center;
  }
}
</style>
