<!-- <template>
  <div>
    <p>Coucou</p>
    <p>{{ monText }}</p>
    <p>{{ nombre + 2 }}€</p>
    <button @click="increment">Incrementer</button>
    <button @click="decrement">decrementer</button>
    <inputsComponents />
    <ContactFormComposent />
    <div>
      <p v-for="fruit in article">
        {{ fruit.titel }}|{{ fruit.price }}€
      </p>
    </div>
    <p v-if="afficherText">Texte</p>
    <button @click="toggleTextDisplay">Afficher/Masquer</button>
    <TestimonialComponents />
    <MonCoponents />
    <ImageComponents />

  </div>
</template>
<script>
import TestimonialComponents from './components/TestimonialComponents.vue'
import MonCoponents from './components/MonCoponents.vue'
import ImageComponents from './components/icons/ImageComponents.vue'
import inputsComponents from './components/icons/inputsComponents.vue'
import ContactFormComposent from './components/icons/ContactFormComposent.vue'

export default {
  name: 'App',
  components: {
    TestimonialComponents,
    MonCoponents,
    ImageComponents,
    inputsComponents,
    ContactFormComposent

  },
  data() {
    return {
      monText: 'Mon super text',
      nombre: 8,

      afficherText: true,
      article: [
        {
          titel: "Ananas",
          price: "2",
        },

        {
          titel: "Banane",
          price: "23",
        },

        {
          titel: "Pomme",
          price: "25",
        },
        {
          titel: "poire",
          price: "28",
        },
        {
          titel: "fraise",
          price: "225",
        }
      ]
    }
  },
  methods: {
    increment: function () {
      this.nombre++
    },
    decrement: function () {
      this.nombre--
    },
    toggleTextDisplay: function () {
      this.afficherText = !this.afficherText
    },
  },
}

</script>
<style>
#app {
  background-color: rgb(132, 0, 255);
}

p {
  font-size: 1em;
  color: yellowgreen;
}
</style> -->

<template>
  <!--AFFICHER ICI LE PERSONAGE -->

  <PersonnageComponent v-for="personnage in personnages" :nom="personnage.nom" :classe="personnage.classe"
    :vie="personnage.vie" :mana="personnage.manaryutgregt" />
  <PasswordCompenent />
  <FormRencontreAnimaux />
</template>
 
<script>

import PersonnageComponent from './components/PersonnageComponent.vue';
// import PasswordCompenent from './components/PasswordCompenent.vue';
import FormRencontreAnimaux from './components/FormRencontreAnimaux.vue';
export default
  {  // permettra d'appeler le composant dans d'autres fichiers
    name: 'App',
    components: {
      PersonnageComponent,  // liste des composants
      // PasswordCompenent,
      FormRencontreAnimaux,
    },
    data() {
      return {
        personnages: [
          {
            nom: "Gandalf",
            classe: "Mage",
            vie: 0,
            mana: 10,
            monnaie: 15,
          },
          {
            nom: "Elle",
            classe: "Guerrier",
            vie: 50,
            mana: 5,
            monnaie: 10,
          },
          {
            nom: "Lui",
            classe: "Marchand",
            vie: 100,
            mana: 96,
            monnaie: 30,
          },
        ]
      }

    }
  }

/*
* 1 -- Faire un composant PersonnageComponent
* Affiche son nom (DATA)
* Affiche sa classe (par ex "Guerrier") (DATA)
* Affiche une image
* Affiche ses points de vie (DATA)
* Affiche ses points de mana (DATA)
*/

/*
* 2 -- Ajouter des boutons au personnage pour lui retirer / ajouter de la vie
*/

/*
* 3 -- Rendre le personnage dynamique avec des props
*/

/*
* 4 -- Afficher une liste dynamique de personnages
*/

/*
* 5 -- Afficher l'état d'un personnage avec une computed
*/
</script>
 
<style scoped>
p {
  color: black;
}

div {
  text-align: center;
  background-color: red;
}

button {
  background-color: orange;
  height: 3em;
  border-radius: 1em;
}
</style>
 