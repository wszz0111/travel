<template>
    <div class="icons">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages"  :key="index">
            <div v-for="(item,index) in page" :key="index" class="one-icons">
            <img :src="item.src" alt="" class="img">
            <p class="word">{{item.name}}</p></div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
export default {
  props:['iconsimgs'],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    pages() {
      let pages = [];
      this.iconsimgs.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) 
        pages[page]=[]
        pages[page].push(item)
      });
      return pages
    }
  }
};
</script>

<style scoped lang='stylus'>
.icons >>> .swiper-pagination-bullet
  background-color #eee
.icons {
    overflow hidden
    padding .3rem 0
    .swiper-container {
        margin: 0;
        overflow: visible;
        padding-bottom: 50%;
        height: 0;
    }

    .swiper-slide {
        display: flex;
        flex-flow: wrap;
    }

    .one-icons {
        width: 25%;
    }

    .img {
        width: 4rem;
        display: block;
        margin: 0 auto;
        height: 4rem;
    }

    .word {
        text-align: center;
        margin-bottom: 1rem;
    }
}
</style>

