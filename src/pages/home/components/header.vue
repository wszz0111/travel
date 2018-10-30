<template>
  <div class="homeheader">
      <div class="back">
        <div class="iconfont back-icon">&#xe697;</div>
      </div>
      <div class="ss">输入搜索内容</div>
      <router-link to='/city/inner'>
        <div class="place">{{this.$store.state.city}}<span class="iconfont"> &#xe6dc;</span></div>
      </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='stylus'>
@import '~@/assets/style/stylus.styl';

.homeheader {
  background-color: $bgcolor;
  color: #ffffff;
  display: flex;
  line-height: 3 rem;

  a {
    text-decoration: none;
  }

  .back {
    width: 3 rem;

    .back-icon {
      font-size: 1.5 rem;
      text-align: center;
    }
  }

  .ss {
    background-color: white;
    border-radius: 0.5 rem;
    margin-top: 0.5 rem;
    line-height: 2 rem;
    height: 2 rem;
    color: #ccc;
    flex: 1;
    padding-left: 1 rem;
  }

  .place {
    text-align: center;
    color: white;
    padding: 0 0.3rem;
  }
}
</style>