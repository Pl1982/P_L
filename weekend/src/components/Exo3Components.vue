<template>
      <section>
            <div class="tableau contenair">
                  <p v-for="personne in trieDescendant" :key="personne.nom">{{ personne.nom }} : {{ personne.note }}/20</p>
            </div>
            <div>
                  <p>Moyenne : {{ moyenne }}/20</p>
            </div>
      </section>
</template>

<script>
export default {
      data() {
            return {
                  notes: [
                        { nom: "Hildebert", note: 12 },
                        { nom: "Foulques", note: 8 },
                        { nom: "Bérenger", note: 14 },
                        { nom: "Eudes", note: 9 },
                  ],
            };
      },
      computed: {
            trieDescendant() {
                  return this.notes.sort((a, b) => b.note - a.note);
            },
            moyenne() {
                  const sum = this.notes.reduce((total, personne) => total + personne.note, 0);
                  return (sum / this.notes.length).toFixed(2);
            },
      },
};
</script>

<style scoped>
.contenair {
      width: 20%;
      border-radius: 7px;
      text-align: center;
}

.tableau {
      background-color: red;
}

p {
      color: #d9e410;
      font-size: 2rem;
      font-weight: bold;
}
</style>

