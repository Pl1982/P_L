<!-- Créer un composant qui affiche deux input de nombres
<input type="number"...>
Créer une computed qui additionne les 2 nombres, et l'afficher dans le template.
Pareil pour multiplication.
Pareil pour puissance : premier nombre puissance le 2eme
Math.pow(nombre, exposant)
-->
<template>
  <section>
    <h2>Calculs</h2>
    <div>
      <label for="number1">Afficher le texte</label>
      <input v-model="chiffre1" type="number" id="number1" name="number1">
    </div>
    <div>
      <label for="number2">Afficher le texte</label>
      <input v-model="chiffre2" type="number" id="number2" name="number2">
    </div>
    <p>Addition : {{ this.chiffre1 }} + {{ this.chiffre2 }} = {{ addition }}</p>
    <p>Multiplication : {{ this.chiffre1 }} x {{ this.chiffre2 }} ={{ multiplication }}</p>
    <p>Puissance : {{ this.chiffre1 }} ^ {{ this.chiffre2 }} ={{ puissance }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      chiffre1: 0,
      chiffre2: 0,
    }
  },
  computed: {
    addition: function () {
      return this.chiffre1 + this.chiffre2
    },
    multiplication: function () {
      return this.chiffre1 * this.chiffre2
    },
    puissance: function () {
      return Math.pow(this.chiffre1, this.chiffre2)
    },
  },
}
</script>

<style scoped>
input {
  width: 3rem;
  text-align: center;
}

div,
p {
  margin: 1rem 0;
}

section {
  width: 20rem;
  border: 1px solid black;
}
</style>