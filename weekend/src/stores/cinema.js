import { defineStore } from 'pinia'

export const useCinemaStore = defineStore('cinema', {
      // Là où on stocke les données 
      // Equivalent de "data" dans un composant
      state: () => {
            return {
                  favoris: []
            }
      },

      // Là où on modifie le state 
      // Equivalent de "methods" dans un composant
      actions: {
          actions: {
            ajouterAuxFavoris: function (film) {
                  let index = this.favoris.findIndex(function (element) {
                        return element === film;
                  });
                  if (index > -1) {
                        this.favoris.splice(index,1 );
                  } else {
                        this.favoris.push(film)
                  }


            }
      }, 

            // Là où on récupère des données calculées 
            // Equivalent de "computed" dans un composant
            getters: {

            }
      }
})