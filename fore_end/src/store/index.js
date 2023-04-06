import { createStore } from 'vuex'

export default createStore({
  state: {
    user_addr: "",
    post_li: [],
    post_li_status: false,
    web3: null
  },
  getters: {
  },
  mutations: {
    setUserAddr(state, _addr) {
      state.user_addr = _addr;
    },
    set_post_li(state, data) {
      state.post_li = data;
    },
    set_web(state, ins) {
      state.web3 = ins;
    },
    change_post_li_status(state) {
      state.post_li_status = !state.post_li_status;
    }
  },
  modules: {
  }
})
