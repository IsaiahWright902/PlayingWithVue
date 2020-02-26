import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let _api = axios.create({
  baseURL: "//api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=movie"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []

  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    }
  },
  actions: {
    async getMovies({ commit, dispatch }) {
      try {
        let res = await _api.get("");
        commit("setMovies", res.data.results)
      } catch (error) {
        console.error(error);
      }
    }

  },
  modules: {
  }
})
