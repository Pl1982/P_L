<template>
  <main>
    <h1>Home</h1>
    <DictionnaireComponents />
    <Exo1componets />
    <Exo2components />
    <Exo3Components />
    <section class="movies">
      <MovieComponent title="Jacquie & Michel" note="10" />
      <MovieComponent title="Paul Henry" note="8" :viewerNotes="[5, 4, 2, 1, 0, 5, 4, 3]" />
      <MovieComponent title="YoungP" note="10" />
      <Exo5Components />
      <StylesBinding />
      <CarrousselContenaire />
      <CalendarContainer />
      <EmitComponent @jerome="FaireUnTruc" />
      <InputComponent id="prenom" @updated="handleInput" label="Prénom" initial-value="" placeholder="Votre prénom" />
      <p>{{ prenom }}</p>
    </section>
  </main>
</template>
<script>
import DictionnaireComponents from '../components/DictionnaireComponents.vue';
import Exo1componets from '../components/Exo1componets.vue';
import Exo2components from '../components/Exo2Component.vue';
import Exo3Components from '../components/Exo3Components.vue';
import MovieComponent from '../components/MovieComponent.vue';
import Exo5Components from '../components/Exo5Components.vue';
import StylesBinding from '../components/StylesBinding.vue';
import CarrousselContenaire from '../components/CarrousselContenaire.vue';
import CalendarContainer from '../components/CalandarContainer.vue';
import EmitComponent from '../components/EmitComponent.vue';
import InputComponent from '../components/InputComponent.vue';


export default {
  components: {
    DictionnaireComponents,
    Exo1componets,
    Exo2components,
    Exo3Components,
    MovieComponent,
    Exo5Components,
    StylesBinding,
    CarrousselContenaire,
    CalendarContainer,
    EmitComponent,
    InputComponent,

  },
  methods: {
    faireUnTruc: function (data) {
      console.log("formulaire validé : ", data)
    },
    // méthode appelée quand l'enfant emit "updated"
    handleInput: function (valeur) {
      //On assigne la valeur reçue de l'enfant à la data "prenom"
      this.prenom = valeur
    },
  },
  data() {
    return {
      prenom: ''
    }
  }
}
</script>

