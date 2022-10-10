import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  },
  mutations: {
    SET_PRODUCTS_TO_VUEX: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
      }).then((response) => {
        commit('SET_PRODUCTS_TO_VUEX', response.data);
      });
    },
  },
  modules: {
  }
})
