<template>
      <section>
            <h1>Boutique</h1>
      </section>
</template>

<script>

/**
 
1- créer un composant ShopArticle.vue
Props : title et prix
2- Afficher la liste des articles
3- Chaque ShopArticle contient un sélecteur de quantité
et un bouton "Ajouter au panier"
4- Le click sur "Ajouter au panier" envoie ua parent un évènement avec le titre, le prix et la quantité
5- Le parent ajoute tout ça au panier (tableau initialement vide)
6- Afficher dans ShopView le prix total du panier
*/
export default {
      data() {
            return {
                  article: [
                        {
                              title: "stylo rouge",
                              prix: 5,
                        },
                        {
                              title: "stylo bleu",
                              prix: 3,
                        },
                        {
                              title: "stylo rose",
                              prix: 2,

                        },


                  ],
                  panier: []


            }
      }
}
</script>