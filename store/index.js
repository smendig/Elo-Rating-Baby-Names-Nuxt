import axios from '~/plugins/axios'
import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            per: { username: null, localRanking: [] },
            nameList: []
        },
        getters: {},
        mutations: {
            setNamelist(state, nameList) { state.nameList = nameList },
            setUsername(state, uname) { state.per.username = uname },
            setLocalRanking(state, r) { state.per.localRanking = r },
            setPushToLocalRanking(state, r) { state.per.localRanking.push(r) }
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
            localRankingCalc({ commit, state }, n) {
                function getRatingDelta(myRating, opponentRating, myGameResult) {
                    if ([0, 0.5, 1].indexOf(myGameResult) === -1) { return null }
                    var myChanceToWin = 1 / (1 + Math.pow(10, (opponentRating - myRating) / 400))
                    return Math.round(32 * (myGameResult - myChanceToWin))
                }
                if (!(state.per.localRanking instanceof Array)) {
                    commit('setLocalRanking', [])
                }
                let i1 = state.per.localRanking.find(i => i.name === n[0].name)
                let i2 = state.per.localRanking.find(i => i.name === n[1].name)
                if (!i1) {
                    i1 = { rating: 1500, name: n[0].name, i: 0 }
                    commit('setPushToLocalRanking', i1)
                }
                if (!i2) {
                    i2 = { rating: 1500, name: n[1].name, i: 0 }
                    commit('setPushToLocalRanking', i2)
                }
                let rDelta = getRatingDelta(i1.rating, i2.rating, 1)
                i1.rating += rDelta
                i2.rating -= rDelta
                i1.i += 1
                i2.i += 1
            }
        }
    })
}
export default createStore
