<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <Home></Home>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./pages/home/Home.vue";
export default {
  components: {
    Home
  }
};
</script>

<style>
</style>
