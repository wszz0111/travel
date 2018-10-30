<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="title">当前城市</div>
        <div class="btn">
            <div class="citybtn">{{this.city}}</div>
        </div>
        <div class="title">热门城市</div>
        <div class="btn">
            <div class="citybtn"  @click="holdit(item.city)" v-for="item of this.hotcity" :key="item.id">{{item.city}}</div>
        </div>
        <div class="title1" v-for="(item,index) of this.cities" :key="index" :ref="item.word">
            <div class="py">{{item.word}}</div>
            <div v-for="val of item.content" :key="val.id" class='singlecity' @click="holdit(val.city)">{{val.city}}</div>
        </div>
      </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  computed:{
    ...mapState({city:'city'})
  },
  methods: {
    holdit: function(city) {
      this.$store.dispatch("changgecity", city);
      this.$router.push("/");
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true
    });
  },
  props: ["cities", "hotcity", "letter"],
  data() {
    return {
      current_city: "北京"
    };
  },
  watch: {
    letter() {
      if (this.letter) {
        let ele = this.$refs[this.letter][0];
        this.scroll.scrollToElement(ele);
      }
    }
  }
};
</script>
<style scoped lang='stylus'>
.list {
  position: absolute;
  top: 6.2rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  .title {
    background-color: #eee;
    color: #666;
    font-size: 0.8rem;
    padding: 0.5rem;
    line-height: 1.5rm;
  }

  .title1 {
    background-color: #eee;
    color: #666;
    font-size: 0.8rem;
    padding: 0.5rem 0 0 0;

    .py {
      padding: 0 0 0.5rem 0.5rem;
    }

    .singlecity {
      background-color: white;
      width: 100%;
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  .btn {
    overflow: hidden;
    padding: 0.3rem 1rem 0.8rem 0.8rem;

    .citybtn {
      border: 0.01rem solid #cccccc;
      padding: 0.1rem 2rem;
      float: left;
      text-align: center;
      margin: 0.5rem 1rem 0 0;
    }
  }
}
</style>

