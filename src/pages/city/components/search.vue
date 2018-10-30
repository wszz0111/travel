<template>
<div>
    <div class="search">
        <input type="text" class="input" name="" id="" v-model="keyword" placeholder="请输入城市名或拼音">
    </div>
    <div ref="wrapper" class="thinkpart" v-show="keyword">
        <ul>
            <li v-for="(item,index) in thinklist" :key="index" @click="holdit(item)" class="search-result">{{item}}</li>
            <li class="search-result" v-show="isshow">没有找到匹配数据</li>
        </ul>
    </div>
</div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  props: ["cities"],
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true
    });
  },
  data() {
    return {
      keyword: "",
      thinklist: [],
      timer: null
    };
  },
  methods:{
    holdit(city){
      this.$store.dispatch('changgecity',city)
      this.$router.push('/')
    }
  },
  computed: {
    isshow() {
      return !this.thinklist.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        let result = [];
        if (!this.keyword.length) {
          this.thinklist = [];
          return;
        }
        for (let i in this.cities) {
          let cd = this.cities[i].content;
          for (let index in cd) {
            if (
              cd[index].spell.indexOf(this.keyword) > -1 ||
              cd[index].city.indexOf(this.keyword) > -1
            ) {
              result.push(cd[index].city);
            }
          }
        }
        this.thinklist = result;
      }, 100);
    }
  }
};
</script>
<style scoped lang='stylus'>
@import '~@/assets/style/stylus.styl';

.search {
    background-color: $bgcolor;
    text-align: center;
    padding: 0.3rem 0.5rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 3.9rem;
    z-index: 2;

    .input {
        width: 100%;
        outline: none;
        border: none;
        border-radius: 0.1rem;
        height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
    }
}

.thinkpart {
    position: absolute;
    top: 6.2 rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    z-index: 1;

    .search-result {
        padding-left: 1 rem;
        line-height: 2.5 rem;
        border-bottom: 0.01rem solid #eee;
        background-color: white;
    }
}
</style>

