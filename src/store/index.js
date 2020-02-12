import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  products:[
  {nama:'pisang', harga:20},
  {nama:'anggur', harga:30},
  {nama:'jeruk', harga:40},
  {nama:'pepaya', harga:10},
  ]
  },
  getters:{
  saleProducts: state =>{
  let saleProduct = state.products.map(product => {
  return {
  nama:'**'+product.nama + '**',
  harga:product.harga/2
  }
  });
  return saleProduct;
  }
  },
  mutations: {
  reducePrice: (state, payload)=>{
  state.products.forEach(product => {
  product.harga -= payload;
  });
  }
  },
  actions: {
  reducePrice:(context, payload) => {
  setTimeout(function(){
  context.commit('reducePrice', payload)
  }, 2000)
  }
  },
  modules: {
  }
})
