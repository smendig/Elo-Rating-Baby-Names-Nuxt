import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            nameList: [],
            n1: null,
            n2: null,
            username: null
        },
        getters: {},
        mutations: {
            setNamelist(state, nameList) { state.nameList = nameList },
            setUsername(state, uname) { state.username = uname },
            setN1(state, n) { state.n1 = n },
            setN2(state, n) { state.n2 = n }
        },
        actions: {}
    })
}
export default createStore
