export default {
    state: {
        isCollapse: false,
        avatarUrl: require("@/assets/logo.jpeg"),
        userName:"小黎"
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