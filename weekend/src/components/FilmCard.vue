<template>
      <img :src="posterLien(film.poster_path)" alt="film.original_title"
       style="width: 100px;">
                         <button @click="AjouterAuxFavoris">Ajouter aux favoris</button>
                        <p>{{ film.title }}</p>
                        <p>{{ film.overview }}</p>
                        <p>{{ film.average }}</p>/10 calculé sur <p>{{ film.average }} vote(s)</p>
                        <p>{{ film.vote_count }}</p>
      </template>
<script>

export default (await import('vue')).defineComponent({
      props: {
            film: Object

      },
      methods: {
            posterLien: function (chemin) {
                  return "https://image.tmdb.org/t/p/w500" + chemin;
            },
            AjouterAuxFavoris: function () {
                 console.log(this.film.value);
            },
              ajouterAuxFavoris: function () {
                    const useCinemaStore = useCinemaStore();
                    useCinemaStore.AjouterAuxFavoris(this.film);
            },


      },
      
})

</script>
<style scoped></style>