<template>
  <q-page class="flex flex-center bg-grey-9 text-white">
    <!-- <h3>{{ parseInt(num1) + parseInt(num2) }}</h3>
    <q-input standout="bg-teal" type="number" v-model="num1" label="First Number" />
    <q-input standout="bg-teal" type="number" v-model="num2" label="Second Number" /> -->

    <router-link to="/newpage">Papunta sa newpage</router-link>
    <div class="row">
      <div class="col q-ma-md">
        <!-- <input type="text" v-model="movName"> -->
        {{ text }}
        <q-input label="Movie Name" v-model="text" />
        <q-input label="Year" v-model="yr" />
        <!-- ternary operator syntax => condition ? true : false -->
        <!-- v-bind:color -->
        <q-btn :color="!isEdit ? 'white' : 'green' " text-color="black" @click="!isEdit ? addMovie() : updateMovie()" :label="!isEdit ? 'Add Movie' : 'Update Movie'" />
        <q-btn color="yellow" label="cancel" @click="cancelMovie()" />
        <q-btn @click="$router.push('/newpage')" label="To newpage" />
        <!-- condition -->
        <!-- <q-btn v-if="!isEdit" color="white" text-color="black" @click="addMovie()" label="Add Movie" />
        <q-btn v-else color="green" text-color="black" @click="updateMovie()" label="Update Movie" /> -->
      </div>
      <div class="col q-ma-md">
        <li v-for="(movie, index) in movielist" :key="index">
          {{movie.name}} - {{movie.year}} : <q-btn label="edit" @click="editMovie(movie, movie.id)" color="green"/> <q-btn icon="delete" @click="delMovie(movie.id)" flat color="red"/>
        </li>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      text: '',
      index: 0,
      id: 1,
      isEdit: false,
      yr: 0,
      movielist: [],
      movies: [
        {name: 'Alladin', year: 2019},
        {name: 'Spider-Man', year: 2019},
        {name: 'Fast and Furious', year: 2019}
      ]
    }
  },
  created() {
    // gets from the firebase
    this.$bind('movielist', this.$db.collection('movies'))
  },
  methods: {
    cancelMovie () {
      this.yr = ''
      this.text = ''
      this.isEdit = false
    },
    addMovie() {
      // array.push to add
      // this.movies.push({
      //   name: this.text,
      //   year: this.yr
      // })
      // this.$db.collection('movies').add({
      //   name: this.text,
      //   year: this.yr
      // })

      this.$db.collection('movies').doc(`${this.id}`).set({
        name: this.text,
        year: this.yr
      })
      this.id++ // this.id = this.id + 1
    },
    delMovie(i) {
      // removing a record
      // this.movies.splice(i,1)

      this.$db.collection('movies').doc(i).delete()
    },
    editMovie(data,i){
      // this.isEdit = true
      // this.index = i
      // console.log(i)
      // this.text = data.name
      // this.yr = data.year
      this.$router.push('/newpage/' + i)
    },
    updateMovie(){
      // the array, index, value
      // this.movie[this.index] = {name: this.text, year: this.yr}
      // Vue builtin api
      // this.$set(this.movies, this.index, {
      //   name: this.text,
      //   year: this.yr
      // })
      // yourcollection.id.update
      alert(this.index)
      this.$db.collection('movies').doc(this.index).update({
        name: this.text,
        year: this.yr
      })

      this.isEdit = false
      this.text = ''
      this.yr = ''
    }
  }
}
</script>
