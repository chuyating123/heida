import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    fn(state) {
      state.count++;
    }
  },
  getters:{
    xx:function(state) {
      return state.count*2+5;
    }
  },
  actions: {
    addAction({ commit }) {
      setTimeout(function () {
        commit('fn')
      }, 1000);
    }
  },
  modules: {
  }
})
