<template>
  <div>
    <banner></banner>
    <detailHeader></detailHeader>
    <detalist :list="list" class="aa"></detalist>
  </div>
</template>
<script>
import banner from "./components/banner.vue";
import detailHeader from "./components/header.vue";
import detalist from "./components/detalist.vue";
import axios from "axios";
export default {
  name:"Detail",
  components: {
    banner,
    detailHeader,
    detalist
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios
      .get("/api/detail.json",{
        params:{
          id:this.$route.params.id
        }
      }).then(res => {
        if (res.data.ret && res.data.data) {
          let data = res.data.data;
          this.list = data.list;
        }
      });
  }
  //由于使用了keep-alive，所以在二次进入recommend部分时，不会按照id重新加载，而是会使用第一次进入时的缓存数据
  //解决方案1：如Home组件，添加状态并在每一次进入时更新，根据本次进入状态与上次是否相同确认是否需要重新加载
  //解决方案2：在keep-alive标签添加 exclude="组件的name"，该方法注意被放任的组件中使用的钩子是否正确
  //keep alive使用 activated 和 deactivated
  //被exclude后使用的是mounted 和 destroyed
};
</script>

<style lang="stylus" scoped>
.aa{
   height 50rem
}
</style>
