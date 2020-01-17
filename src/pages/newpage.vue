<template>
  <q-page padding>
    <!-- content -->
    <h1>{{ $route.params.id }}</h1>
    <q-input label="Movie Name" v-model="movieData.name" />
    <q-input label="Year" v-model="movieData.year" />
    <q-btn @click="updateMovie()" label="Update Movie" />
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      movieData: [],
      text: '',
      yr: 0
    }
  },
  created() {
    this.$bind('movieData', this.$db.collection('movies').doc(this.$route.params.id))
  },
  methods: {
    updateMovie () {
      this.$db.collection('movies').doc(this.$route.params.id).update({
        name: this.movieData.name,
        year: this.movieData.year
      })
      this.$router.push('/')
    }
  }
}
</script>
