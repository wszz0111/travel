<template>
    <div>
        <div class="fixed">
            <div class="header">
                <router-link to='/'>〈</router-link>
                <div class="title">城市选择</div>
            </div>
            <div class="choice">
                <div class="border">
                    <router-link to='/city/inner' :class="['outter']">境内</router-link>
                    <router-link to="/city/outter" :class="['outter']">境外</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang='stylus'>
@import '~@/assets/style/stylus.styl';

.fixed {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;

    .header {
        line-height: 2rem;
        color: white;
        background-color: $bgcolor;
        display: flex;
        border-bottom: 0.01rem solid lightgrey;

        a {
            color: white;
            text-decoration: none;
            position: absolute;
        }

        .title {
            text-align: center;
            flex: 1;
        }
    }

    .choice {
        background-color: $bgcolor;
        padding: 0.3rem 0;

        a {
            color: white;
            text-decoration: none;
        }

        .border {
            border: 0.01rem solid white;
            width: 12rem;
            text-align: center;
            margin: auto;
            display: flex;
            justify-content: space-around;

            .router-link-active {
                background-color: white;
                color: $bgcolor;
            }

            .outter {
                width: 6 rem;
            }
        }
    }
}
</style>
