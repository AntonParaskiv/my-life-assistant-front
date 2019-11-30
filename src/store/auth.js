export default {
    state: {
        user: null,
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        signUp ({commit}, user) {
            commit('setUser', user)
        },
        signIn ({commit}, user) {
            commit('setUser', user)
        },
    },
    getters: {
        user (state) {
            return state.user
        }
    },
}