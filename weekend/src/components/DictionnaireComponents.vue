<template>
      <section>
            <div>
                  <label for="recherche">Recherche</label>
                  <input v-model="search" type="text" id="recherche">
                  <p>Résultats de recherche pour : {{ search }}</p>
                  <p v-for="result in searchResults" :key="result">{{ result }}</p>
                  <button @click="generatePhrase"> Générer une phrase aléatoires</button>                
                  <p>{{ generatedPhrase }}</p>
            </div>
      </section>
</template>

<script>
import mots from '../assets/mots.json'
export default {
      data() {
            return {
                  search: '',
                  mots: mots,
                  generatedPhrase: '',
            }
      },
      computed: {   // laa computed se calcule toute seule/automatiquement
            // Tableau de tous les mots du dictionnaire
            wordsArray: function () {
                  return Object.values(this.mots)
            },
            // Retourne les mots qui continnent le texte saisi dans la data 'search'
            searchResults: function () {
                  // Si on a tapé moins de 3 caractères on ne renvoie pas de résultat
                  if (this.search.length < 3) {
                        return []
                  }
                  return this.wordsArray.filter(word => {
                        return word.startsWith(this.search)  // booléen
                  })
            },
            anagrams: function () {
                  return this.wordsArray.filter((word) => {
                        if (this.search.length < 3) {
                              return []
                        }
                        for (let i = 0; i < this.search.length; i++) {
                              return word.includes(this.search.charAt(i))
                        }
                  })
            },
            wordByLength: function () {
                  return this.wordsArray.filter((word) => {
                        if (word.length >= 4 && word.length <= 9) {
                              return true
                        } else {
                              return false 
                        }

                  } )
            },
          
      },
        methods: {
            generatePhrase: function () {
                  let phrase = ''
                  for (let i = 0; i < 8; i++) {

                        const index = Math.floor(Math.random() * this.wordsArray.length)
                        console.log(index)
                        phrase = phrase + this.wordsArray[index]+' '
                  }
                  this.generatedPhrase = phrase
            }
      }, 
}



//       1 - Créer un bouton.
// 2 - Quand on clique dessus une méthode génère une phrase avec 8  mots aléatoires du dictionnaire
// 3 - Afficher la phrase sous le bouton une fois générée * /
// une computed qui liste les mots de plusde 4 lettres et mois de 9 lettres 
</script>

<style></style>