import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    COUNT(state, payload = 1) {
      state.count += payload;
    }
  },
  // 相当于 Vuex 中的计算属性
  getters: {
    hello: state => state.test.hello
  },
  actions: {
    count({ commit }, payload) {
      commit('COUNT', payload);
    }
  },
  modules: {
    test: {
      namespaced: true,
      state: {
        hello: 'world'
      }
    }
  }
});
