<template>
      <section>
            <div class="container">
                  <div class="welcome">
                        <hr>
                        <h4>BIENVENUE</h4>
                        <hr>
                  </div>
                  <h2>LA FERME ... tout court ... </h2>
                  <h2>Restaurant - Bien-Etre</h2>
                  <p>C'est dans une bâtisse datant du 17ème siècle que La Ferme du bien-être demeure, à plus de 1000 mètres
                        d'ltitude au coeur du paysage capitolien vallonné.</p>
                  <p>Hôtel, restaurant et SPA, notre équope vous accueille du lundi au dimanche et toute l'année au coeur d'un
                        lieu authentique et chaleureux.</p>
            </div>
      </section>
</template>

<script>

</script>

<style scoped>
.container {
      width: 70%;
      margin: 0 auto 3rem;
}

section {
      text-align: center;
      width: 80%;
      margin: auto;
      border-right: 1px solid var(--primary);
      margin: 0 auto 3rem;
}

.welcome {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      padding: 2rem;
}

hr {
      width: 100px;
      height: 2px;
}

h2 {
      font-weight: bold;
      font-size: 2rem;
}

h2:last-of-type {
      margin-bottom: 1em;
}

p {
      font-size: 0.8rem;
}
</style>