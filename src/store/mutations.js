import * as types from './mutation-types'

const mutations = {
  [types.SET_COUNTER](state) {
    state.count++
  }
}

export default mutations