<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <h1> Ckeck-box</h1>
      <section>
            <div>
                  <label for="Afficher texte">Afficher texte</label>
                  <input type="checkbox" id="scales" name="scales" checked>
            </div>

            <div>
                  <label for="texte à afiicher">texte à afiicher</label>
                  <input type="texte à afiicher" id="texte à afiicher" name="texte à afiicher">
                  <input v-model="done" type="checkbox" id="coche" name="coche">
                  <!--<input v-model="done" type="checkbox" id="coche" name="coche"> sert a relier le bootn coche avec la variabel-->
            </div>
      </section>
</template>
     

<script>
export default {

      data() {                            //data= parametre de la variabel--
            return {
                  done: false,
            }
      },
}
</script>
<style>
div,
input {
      margin: 1rem;
      color: red;
}
</style>