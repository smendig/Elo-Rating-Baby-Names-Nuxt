import axios from '~/plugins/axios'
import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            per: { username: null },
            nameList: []
        },
        getters: {},
        mutations: {
            setNamelist(state, nameList) { state.nameList = nameList },
            setUsername(state, uname) { state.per.username = uname }
        },
        actions: {
            updateList({ commit }, cb) {
                axios.get('/api/rank').then((d) => {
                    commit('setNamelist', d.data)
                    if (cb) { cb() }
                }).catch(e => {
                    console.log(e)
                    if (cb) { cb(e) }
                })
            }
        }
    })
}
export default createStore
