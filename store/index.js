import Vuex from 'vuex'
import axios from '~/plugins/axios'

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
            setN2(state, n) { state.n2 = n },
            setWaitingServerResponse(state, d) { state.waitingServerResponse = d }
        },
        actions: {
            startUpdates({ commit, dispatch }) {
                axios.get('/api/rank').then((d) => {
                    console.log(d.data)
                    commit('setNamelist', d.data)
                    dispatch('randomNames')
                }).catch(e => console.log(e))
            },
            randomNames({ commit, state, dispatch }) {
                let nombres = state.nameList
                if (nombres.length < 2) {
                    dispatch('resetNames')
                    return
                }
                // si null o si se ha actualizado y ya no existe n1 en namelist
                if (!state.n1 || (state.n1 && !nombres.find(n => n.name === state.n1.name))) {
                    let n1 = nombres[Math.floor(Math.random() * nombres.length)]
                    commit('setN1', n1)
                    if (state.n2 && state.n2.name !== state.n1.name) {
                        return
                    }
                }
                if (!state.n2 || (state.n2 && !nombres.find(n => n.name === state.n2.name))) {
                    let nombresFiltered = nombres.filter(n => n.name !== state.n1.name)
                    let n2 = nombresFiltered[Math.floor(Math.random() * nombresFiltered.length)]
                    commit('setN2', n2)
                }
            },
            resetNames({ commit }) {
                commit('setN1', null)
                commit('setN2', null)
            }
        }
    })
}
export default createStore
