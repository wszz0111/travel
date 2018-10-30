<template>
    <div>
        <search class="fixed" :cities='cities'></search>
        <list class="list" :cities="cities" :hotcity="hotcity" :letter="letter"></list>
        <words :cities="cities" @changge="handlecity"></words>
    </div>
</template>
<script>
import search from "./components/search.vue";
import list from "./components/list.vue";
import words from "./components/words.vue";
import axios from "axios";
const all = [];
export default {
  components: {
    search,
    list,
    words
  },
  data() {
    return {
      cities: [],
      hotcity: [],
      letter: ""
    };
  },
  methods: {
    handlecity(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    axios.get("/api/city.json").then(res => {
      if (res.data.ret && res.data.data) {
        let data = res.data.data;
        this.cities = data.cities;
        this.hotcity = data.hotcity;
      }
    });
  }
};
</script>
<style scoped lang='stylus'>
</style>
