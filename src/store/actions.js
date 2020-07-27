
export default {
    getComment ({commit}, comment) {
        commit('getComment', comment)
    },
    addComment ({commit}) {
        commit('addComment')
    },
    
}