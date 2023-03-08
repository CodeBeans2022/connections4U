import axios from 'axios'
import { createStore } from 'vuex'
const conn4uURL = "https://connections4u.onrender.com/"
export default createStore({
  state: {
    product: null,
    products: null,
    message: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, value) {
      state.products = value
    },
    setProduct( state, value) {
      state.product = value
    },
    setMessage(state, value){
      state.message = value
    }
  },
  actions: {
    async fetchProducts(context) {
      const res = await axios.get(`${conn4uURL}products`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setProducts', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${conn4uURL}product/${id}`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setProduct', results[0])
      }else{
        context.commit('setMessage', err)
      }
    },
    async addProduct(context, payload) {
      const res = await axios.post(`${conn4uURL}products`, payload)
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg)
      }else if (err) {
        console.log(err);
        context.commit('setMessage', err)
      }
    }
  },
  modules: {
  }
})
