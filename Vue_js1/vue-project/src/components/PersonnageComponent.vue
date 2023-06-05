<template>
  <div>
    <img :src="image" alt="guerrier">
    <h2>{{ nom }}<span v-if="!isAlive"> ☠ </span><!--{{ isAlive }}--> </h2>

    <p>{{ classe }}</p>
    <p>Points de vie : {{ vie }}</p>
    <button @click="increment">Ajout vie</button>
    <button @click="decrement">Retrait vie</button>
    <p>Points de mana : {{ mana }}</p>
    <p>Monnaie: {{ monnaie }} po</p>

  </div>
</template>


<script>
import imageGuerrier from "../assets/img/guerrier.png"
import imageSorcier from "../assets/img/sorcier.png"
import imageVoleur from "../assets/img/voleur.png"
import imageMage from "../assets/img/mage.png"
import imageMarchand from "../assets/img/marchand.png"
export default {
  name: "PersonnageComponent",
  props: {
    nom: String,
    classe: String,
    vie: Number,
    mana: Number,
    image: File,
  },
  methods: {
    // increment: function () {
    //   this.vie++
    // },
    // decrement: function () {
    //   thisivie--
  },
  computed: {
    isAlive: function () {
      return this.vie > 0
    },

    image: function () {
      switch (this.classe) {
        case "Mage":
          return imageMage
        case "Guerrier":
          return imageGuerrier
        case "Sorcier":
          return imageSorcier
        case "Voleur":
          return imageVoleur
        case "Marchand":
          return imageMarchand
      }
    },
  },
}


  // d,ata() {   // renvoi un objet
  //   return {
  //     // nom: 'Moi',
  //     // classe : "Guerrier",
  //     // vie : 20,
  //     // mana : 10,
  //   }
  // },
  // methods: {  // contient des fonctions
  //   increment: function () {
  //     this.vie++
  //   },
  //   decrement: function () {
  //     this.vie--
  //   },
  // },

</script>
    
<style scoped>
h2 {
  color: goldenrod;
}

h2 span {
  color: black;
}


p {
  color: whitesmoke;
}

div {
  text-align: center;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.5em;
}

button {
  background-color: greenyellow;
  height: 3em;
  border-radius: 1em;
}

img {
  height: 150px;
}
</style>