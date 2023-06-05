<template>
      <!--AFFICHER ICI LE PERSONAGE -->

      <PersonnageComponent nom="Gandalf" classe="Mage" vie="20" mana="10" />
      <PersonnageComponent nom="Moi" classe="Guerrier" vie="50" mana="5" />
      <PersonnageComponent nom="Gandalf" classe="Mage" vie="20" mana="10" />
</template>
     
<script>
import PersonnageComponent from './components/PersonnageComponent.vue'

export default {  // permettra d'appeler le composant dans d'autres fichiers
      name: 'App',
      components: {
            PersonnageComponent,  // liste des composants
      },
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
      background-color: rgb(116, 90, 141);
}

button {
      background-color: orange;
      height: 3em;
      border-radius: 1em;
}
</style>
     