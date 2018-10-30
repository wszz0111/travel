<template>
    <div class="recommend">
        <div class="title">热门推荐</div>
        <router-link tag="div" :to="'/detail/'+ item.id" class="content" v-for="item in this.recommendlist" :key="item.id">
            <img class="img" :src="item.img" alt="">
            <div class="con-word">
                <div>{{item.name}}</div>
                <div class="word2">{{item.address}}</div>
                <div><span class="fh">￥</span><span class="price">{{item.price}}</span><span class="qi">起</span></div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  props: ["recommendlist"]
};
</script>

<style scoped lang='stylus'>
@import '~@/assets/style/min.styl';

.title {
    line-height: 2 rem;
    background-color: #eee;
    text-indent: 1.2 rem;
}

.content {
    display: flex;
    padding: 1rem;
    height: 6.8 rem;
    border-bottom: 0.1rem solid #eee;

    .img {
        height: 6.8 rem;
    }

    .con-word {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        margin: 0.5rem 1rem;
        min-width: 0;

        .word2 {
            font-size: 0.8rem;
            color: #616161;
            ellipsis();
        }
    }

    .fh {
        color: #ff8300;
    }

    .price {
        color: #ff8300;
        font-size: 1.2 rem;
        font-weight: bold;
    }

    .qi {
        font-size: 0.8rem;
        color: #616161;
    }
}
</style>
