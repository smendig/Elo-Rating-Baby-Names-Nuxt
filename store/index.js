import axios from '~/plugins/axios'
import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            per: { username: null, localRanking: {}, prevu: '' },
            nameList: [],
            ultimoVoto: { user: null, b: null, time: null },
            ultimoAniadido: { user: null, name: null, time: null }
        },
        getters: {},
        mutations: {
            setNamelist(state, nameList) { state.nameList = nameList },
            setUsername(state, uname) {
                state.per.username = uname
                if (uname && !state.per.localRanking.hasOwnProperty(uname)) { state.per.localRanking[uname] = [] }
            },
            setLocalRanking(state, { u, r }) { state.per.localRanking[u] = r },
            resetLocalRanking(state, u) {
                state.per.localRanking = {}
                if (u) { state.per.localRanking[u] = [] }
            },
            resetUserLocalRanking(state, u) { if (u) { state.per.localRanking[u] = [] } },
            setPushToLocalRanking(state, { u, r }) { state.per.localRanking[u].push(r) },
            addPrevu(state, u) { state.per.prevu += '||' + u },
            setUltimoVoto(state, d) { state.ultimoVoto = d },
            setUltimoAniadido(state, d) { state.ultimoAniadido = d }
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
            },
            updateUltimoVoto({ commit }) {
                axios.get('/api/ultimovoto').then((d) => {
                    if (d.data.user) { commit('setUltimoVoto', d.data) }
                }).catch(e => { console.log(e) })
            },
            updateUltimoAniadido({ commit }) {
                axios.get('/api/ultimoaniadido').then((d) => {
                    if (d.data.user) { commit('setUltimoAniadido', d.data) }
                }).catch(e => { console.log(e) })
            },
            localRankingCalc({ commit, state }, { u, n }) {
                function getRatingDelta(myRating, opponentRating, myGameResult) {
                    if ([0, 0.5, 1].indexOf(myGameResult) === -1) { return null }
                    var myChanceToWin = 1 / (1 + Math.pow(10, (opponentRating - myRating) / 400))
                    return Math.round(32 * (myGameResult - myChanceToWin))
                }
                if (!(state.per.localRanking[u] instanceof Array)) {
                    commit('setLocalRanking', { u: u, r: [] })
                }
                let i1 = state.per.localRanking[u].find(i => i.name === n[0].name)
                let i2 = state.per.localRanking[u].find(i => i.name === n[1].name)
                if (!i1) {
                    i1 = { rating: 1500, name: n[0].name, i: 0 }
                    commit('setPushToLocalRanking', { u: u, r: i1 })
                }
                if (!i2) {
                    i2 = { rating: 1500, name: n[1].name, i: 0 }
                    commit('setPushToLocalRanking', { u: u, r: i2 })
                }
                let rDelta = getRatingDelta(i1.rating, i2.rating, 1)
                i1.rating += rDelta
                i2.rating -= rDelta
                i1.s += 1
                i1.i += 1
                i2.i += 1
            }
        }
    })
}
export default createStore
