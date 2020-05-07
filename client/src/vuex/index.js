import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        ...layout.state,
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        isCollapse: state => state.layout.isCollapse,
    },
    modules: {
        layout
    }
})

export default store