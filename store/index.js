import axios from '~/plugins/axios'
import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            nameList: [],
            username: null
        },
        getters: {},
        mutations: {
            setNamelist(state, nameList) { state.nameList = nameList },
            setUsername(state, uname) { state.username = uname }
        },
        actions: {
            updateList({ commit }, cb) {
                axios.get('/api/rank').then((d) => {
                    commit('setNamelist', d.data)
                    if (cb) { cb() }
                    this.randomNames()
                }).catch(e => {
                    console.log(e)
                    if (cb) { cb(e) }
                })
            }
        }
    })
}
export default createStore
