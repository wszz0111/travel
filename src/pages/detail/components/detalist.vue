<template>
    <div class="allcontent">
        <div v-for="(item,index) in this.list" :key="index" class="first">
            <div>
                <img src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png" alt="" class="icon-p">
            {{item.title}}
            </div>
            <div v-if="item.children" class="second">
                <detalist :list='item.children'>
                    <img src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png" alt="" class="icon-p">
                {{item.title}}
                </detalist>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "detalist",
  props: ["list"]
};
</script>
<style scoped lang='stylus'>
.first {
    padding: 0.5rem 0.5rem;

    .icon-p {
        width: 1rem;
    }

    .second {
        border-bottom: 0.01rem #eee solid;
    }
}
</style>
