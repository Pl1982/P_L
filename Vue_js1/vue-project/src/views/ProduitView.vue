<template>
      <section>
            <h1>Page produit</h1>
            <RouterLink to="">Retour à la boutique</RouterLink>
            <div v-if="product">
                  <p>{{ product.title }}</p>
                  <SliderComponents :imagesUrls="product.images" />
            </div>

            <!-- Afficher les infos sur le produit ici -->
      </section>
</template>
<script>
import SliderComponents from '../components/SliderComponents.vue'
import axios from 'axios'
// id du produit recue dans l'URL
// aller chercher le produit avec axios
// (https://dummyjson.com/products')
export default {
      components: { SliderComponents },
      data() {
            return {
                  product: null,
            }

      },


      // cette va chercher un produitsur l API et le stock dan sun edata
      methods: {

            fetchProductForId: async function (id) {
                  const data = await axios.get("https://dummyjson.com/products/" + id)
                  console.log(data)
                  this.product = data.data

            }
      },
      mounted() {
            console.log(this.$route.query.id)
            this.fetchProductForId(this.$route.query.id)
      }
}
</script>