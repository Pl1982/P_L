<template>
      <section>
            <h1>Cinema</h1>

            <p>Nombre de film {{ favoris.lentgh}}</p>
            <FilmCard v-for="filmData in films" :key="filmData.id" :film="filmData"> </FilmCard>

           
      </section>
</template>

<script>
import FilmCard from '../components/FilmCard.vue';
import { useCinemaStore } from '../stores/cinema.js'
import { mapState } from 'pinia'
export default (await import('vue')).defineComponent({
      data() {
            return {
                  films: [],
            }
      },
      components: {
            FilmCard,
      },

      methods: {
            fetchFilms: function () {
                  const options = {
                        method: 'GET',
                        headers: {
                              accept: 'application/json',
                              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODdkODdjZjE5MmVhZjg4ZWY0NWIwMWQzZjVhOWJhZCIsInN1YiI6IjY0Nzk4ZjA2MGUyOWEyMDBkY2JhMTQxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._eRV0WALSsmoMvolijRlK20UbkLDilqJF541Mr_OoKg'
                        }
                  };

                  fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
                        .then(response => response.json())
                        .then(response => this.films = response.results)
                        .catch(err => console.error(err));
            },
            posterLien: function (chemin) {
                  return "https://image.tmdb.org/t/p/w500" + chemin;
            }
      },
      created() {
            this.fetchFilms();
      },
      computed: {
            // https://pinia.vuejs.org/core-concepts/state.html
            // Va créer des computed pour les valeurs du state
            ...mapState(useCinemaStore, ['favoris'])
      },


}   )  
</script>