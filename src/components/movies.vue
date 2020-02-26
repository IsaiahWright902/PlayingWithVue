<template>
  <div class="movies">
    <div class="col">
      <form type="submit">
        <div class="form-group">
          <input type="text" class="form-control" v-model="query" placeholder="Search..." />
          <button type="submit" class="btn btn-danger">Submit</button>
        </div>
      </form>
    </div>
    <movie v-for="movieObj in movies" :movieData="movieObj" :key="movieObj._id" />
  </div>
</template>


<script>
import movie from "../components/movie.vue";
export default {
  name: "movies",
  mounted() {
    this.$store.dispatch("getMovies");
  },
  data() {
    return {
      query: ""
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  methods: {},
  components: {
    movie
  }
};
</script>


<style scoped>
</style>