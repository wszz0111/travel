<template>
    <div class="container" @click="backimg">
        <swiper :options="swiperOption" class="warpper">
            <swiper-slide v-for="item of swiperlist" :key="item.id">
                <img class="swiper-img" :src="item.src" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  data() {
    return {
      swiperlist: [
        {
          id: "01",
          src:
            "http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_600x330_5aa6e477.jpg"
        },
        {
          id: "02",
          src:
            "http://img1.qunarzz.com/sight/p0/1801/41/418630d0998c5bcaa3.img.jpg_r_800x800_3625e06a.jpg"
        },
        {
          id: "03",
          src:
            "http://img1.qunarzz.com/sight/p0/1704/6e/6ee4db45bb93a129a3.img.jpg_r_800x800_f7c378e1.jpg"
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        observer:true,
        observeParents:true,
      }
    };
  },
  methods:{
      backimg(){
          this.$emit('close')
      }
  }
};
</script>
<style scoped lang='stylus'>
.container {
    background-color: #000;
    position: absolute;
    z-index :100
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;

    .warpper {
        height 0
        padding-bottom 100%
        overflow hidden
        width 100%

        .swiper-img {
            width: 100%;
        }
    }

    .swiper-pagination {
        color: #eee;
    }
}
</style>
