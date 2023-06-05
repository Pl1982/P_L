<template>
      <section>
            <div>
                  <form> <label for="list">A faire</label>
                        <input v-model="toodoText" type="text" name="list" id="list">
                  </form>

            </div>
      </section>
</template>
<script>
export default {

}
</script>
<style>
/* Une mini app “aide mémoire”
1 - Créer une data todos sera un tableau de chaînes de caractères (initialement
vide)
2 - Créer une data todoText , une chaîne de caractères vide ( ’’ )
3 - Créer un formulaire :
Input texte relié à todoText
Label associé à l’input : “Ajouter une tâche”
Un bouton qui valide le formulaire
4 - Une fois validé, le formulaire appelle la méthode addTodo (penser à ajouter la
méthode au composant)
5 - La méthode addTodo ajoute la valeur du champ todoText au tableau todos
Faire en sorte que lorsqu’une tâche est ajoutée au tableau le champ todoTexte
se réinitialise.
6 - Afficher une liste des tâches saisies à côté.
7 - Créer une méthode removeTodo :
Elle prend en paramètre un index .
Elle retire un élément du tableau todos à l’ index fourni en paramètre.
Exos Vue38 - Faire en sorte que lorsqu’on clique sur une tâche de la liste, elle est supprimée
de cette liste grâce à la méthode removeTodo */
</style>