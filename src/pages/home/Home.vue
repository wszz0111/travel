<template>
  <div class="home">
    <homeheader></homeheader>
    <homeswiper :swiperlist="swiperlist"></homeswiper>
    <choice :iconsimgs="icons_imgs"></choice>
    <recommend :recommendlist="recommendlist"></recommend>
    <weekend :weekendlist="weekendlist"></weekend>

    <div>
      <router-link to='/a'>aaaaaaaaaa</router-link>
        <router-link to='/b'>bbbbbbbbb</router-link>
        <router-view/> 
    </div>
  </div>
</template>

<script>
import homeheader from "./components/header.vue";
import homeswiper from "./components/swiper.vue";
import choice from "./components/choice.vue";
import recommend from "./components/recommend.vue";
import weekend from "./components/weekend.vue";
import axios from "axios";
import { mapState } from "vuex";
export default {
  components: {
    homeheader,
    homeswiper,
    choice,
    recommend,
    weekend
  },
  data() {
    return {
      lastcity: "",
      swiperlist: [],
      icons_imgs: [],
      recommendlist: [],
      weekendlist: [],
      aa: true
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    cityinfo() {
      axios.get("/api/index.json?city=" + this.city).then(res => {
        if (res.data.ret && res.data.data) {
          let data = res.data.data;
          this.swiperlist = data.swiperlist;
          this.icons_imgs = data.icons_imgs;
          this.recommendlist = data.recommendlist;
          this.weekendlist = data.weekendlist;
        }
      });
    },
  },
  mounted() {
    this.lastcity = this.city;
    this.cityinfo();
  },
  activated() {
    if (this.lastcity !== this.city) {
      this.lastcity = this.city;
      this.cityinfo();
    }
  }
};
</script>

<style scoped lang='stylus'>
</style>
