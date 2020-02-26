<template>
  <div class="movie col-6">
    <div class="card">
      <img :src="`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{movieData.original_title}}</h5>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "movie",
  props: ["movieData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>