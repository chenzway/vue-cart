import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    COUNT(state) {
      state.count += 1;
    }
  },
  getters: {
    count: state => state.count,
    hello: state => state.test.hello
  },
  actions: {
    count({ commit }, payload) {
      commit('COUNT');
    }
  },
  modules: {
    test: {
      namespaced: true,
      state: {
        hello: 'world'
      },

    }
  }
});
