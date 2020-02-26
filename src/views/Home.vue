<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Movie Finder</h1>
      </div>
    </div>
    <div class="row">
      <movies />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import movies from "../components/movies";
export default {
  name: "Home",
  data() {
    return { query: "" };
  },
  components: {
    movies
  }
};
</script>
