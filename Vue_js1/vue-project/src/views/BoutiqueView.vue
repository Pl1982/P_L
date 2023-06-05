<template>
      <section>
            <h1>Ma_boutique</h1>
            <div>
                  <RouterLink v-for="produit in produits" :to="'/produit?id=' + produit.id">
                        <div>
                              <img :src="produit.thumbnail" alt="" />
                              <p>{{ produit.title }}</p>
                              <p>{{ produit.price }}</p>
                        </div>
                  </RouterLink>
            </div>
            <p v-if="fetchError">{{ fetchError }}</p>
      </section>
</template>
<script>
import axios from "axios"
export default {
      data() {

            return {
                  produits: null,
                  fetchError: null,
            }
      },
      methods: {
            chcercherProduits: async function () {
                  try {

                        const data = await axios.get('https://dummyjson.com/products')
                        console.log(data)
                        this.produits = data.data.products
                  }
                  catch (e) {
                        this.fetchError = "Une erreur s'est produite"
                  }
            },
      },
      mounted() {
            console.log("le composant à été monté ")
            this.chcercherProduits()
      },
}
</script>

<style scoped>
/* .mon_titre {

      font-size: 1.5em;
      color: red;
      background-color: yellow;
      border-radius: 1.5em;
} */

h1 {
      text-align: center;
}
</style>