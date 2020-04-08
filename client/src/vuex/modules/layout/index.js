export default {
    state: {
        isCollapse: false,
    },
    mutations: {
        collapse(state, arg) {
            state.isCollapse = !state.isCollapse
        },
    },
    actions: {
        collapse({ commit }, arg) {
            commit('collapse', arg)
        },
    }
}