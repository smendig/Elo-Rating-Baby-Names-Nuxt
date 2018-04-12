const utils = {
    malas(p) {
        const start = ['pis']
        const contain = ['caca', 'kak', 'teta', 'culo', 'puta', 'puto', 'almor', 'gord']
        const p2 = p.toLowerCase()
        if (!start.every(s => !p2.startsWith(s))) { return true }
        if (!contain.every(s => !p2.includes(s))) { return true }
        return false
    }
}
export default utils
