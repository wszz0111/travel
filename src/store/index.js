import Vue from 'vue'
import Vuex from "vuex"
import state from './state';
import mutations from './mutations'
import actions from './actions';
Vue.use(Vuex)

export default new Vuex.Store({
    state: state,
    //改变状态
    mutations: mutations,
    //异步操作
    actions: actions,
    //vuex中的类似computed
    // getters: {
    //     add(state) {
    //         return state.city + " " + state.city
    //     }
    // }
})