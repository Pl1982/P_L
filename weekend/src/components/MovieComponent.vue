<template>
      <section>
            <div>
                  <p>Titre du film:{{ title }}</p>
                  <p>Note presse:{{ note }}</p>
            </div>
      </section>
</template>
<script>

export default {
      data() {
            return {

            }
      },
      props: {
            title: String,
            note: Number,
            viewerNotes: [Number]
      },
      computed: {

            moyenne: function () {
                  if (this.viewerNotes) {
                        return 0
                  }
                  let somme = 0
                  this.viewerNotes.forEach(note => {
                        somme += note
                  })
                  return somme / this.viewerNotes.length

            }
      },
}


</script>
<style></style>

<!-- 
1-Créer un composant MovieNote.vue.
2-Ce composant affiche un titre de film. Créer la prop title dans le composant.
3-Afficher la prop title dans le template.
4-Pareil pour la note du film.
5-Afficher 3 ou 4 MovieNotes avec chacun des titres et des notes différents.
 -->