<template>
    <div class="recommend">
        <div class="title">周末去哪儿</div>
        <div class="content" v-for="item in this.weekendlist" :key="item.id">
            <img class="img" :src="item.img" alt="">
            <div class="con-word">
                <div class="word1">{{item.name}}</div>
                <div class="word2">{{item.address}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props:['weekendlist']
};
</script>

<style scoped lang='stylus'>
@import '~@/assets/style/min.styl';

.title {
    line-height: 2 rem;
    background-color: #eee;
    text-indent: 1.2 rem;
}

.img {
    width: 100%;
}

.con-word {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    margin: 0.5rem 1rem;
    min-width: 0;

    .word1 {
        font-size: 0.8rem;
        margin: 0.3rem 0;
    }

    .word2 {
        font-size: 0.6rem;
        color: #616161;
        margin: 0 0 0.3rem 0;
        ellipsis();
    }
}
</style>