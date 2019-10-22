import * as types from '../types'

const state = {
  showSideBar: false
}

// 修改数据源 mutations
const mutations = {
  [types.COM_SHOW_SIDE_BAR](state, status) {
    state.showSideBar = status
  }
}
// 提交mutations方法
const actions = {
  setShowSideBar({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}

const getters = {
  showSidebar:state => state.showSideBar
}

export default {
  state,
  mutations,
  actions,
  getters
}