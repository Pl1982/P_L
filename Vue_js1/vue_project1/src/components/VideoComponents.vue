<template>
      <section>
            <video autoplay muted loop playsinline> <!-- playsinline -> pour que ça fonctionne sur iOs-->
                  <source src="../assets/media-hero-video.mp4" type="video/mp4" />
            </video>
            <router-link to="/hotel">Découvrir dès maintenant</router-link>
      </section>
</template>
<script></script>
<style scoped>
video {
      width: 100%;
      padding: 0 2rem;
      grid-column: 1;
      grid-row: 1;
}

a {
      grid-column: 1;
      grid-row: 1;
      align-self: end;
      justify-self: center;
      background: var(--primary);
      color: whitesmoke;
      padding: .5rem 2rem;
      margin-bottom: 1rem;
}

section {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
}
</style>