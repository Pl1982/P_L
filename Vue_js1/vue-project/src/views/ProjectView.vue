<template>
      <h1>New_project</h1>
      <div class="Liste" v-for="item in projects">
            <img :src="item.image" alt="photo">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
      </div>
</template>

<script>
export default {
      data() {
            return {
                  projects: [
                        {
                              name: "Machine à voyager dans le temps",
                              description:
                                    "Invention de la machine à voyager dans le temps. Ne fonctionne que vers le futur, à une cadence de 1 seconde toutes les secondes.",
                              image:
                                    "https://file1.telestar.fr/var/telestar/storage/images/2/8/9/289342/1727784-2/Retour-vers-le-futur-4-Christopher-Lloyd-alias-le-Doc-est-partant.jpg",
                        },
                        {
                              name: "Un objet de ouf",
                              description: "On sait pas trop à quoi ça sert",
                              image:
                                    "https://file1.telestar.fr/var/telestar/storage/images/2/8/9/289342/1727784-2/Retour-vers-le-futur-4-Christopher-Lloyd-alias-le-Doc-est-partant.jpg",
                        },
                        {
                              name: "J'ai plus d'idées",
                              description: "On sait pas trop à quoi ça sert",
                              image:
                                    "https://file1.telestar.fr/var/telestar/storage/images/2/8/9/289342/1727784-2/Retour-vers-le-futur-4-Christopher-Lloyd-alias-le-Doc-est-partant.jpg",
                        },
                  ],
            }
      }
}


</script>
<style>
div img {
      width: 100px;

}

.liste {
      margin: 1em;

}
</style>


