<template>
  <Navbar />
  <HeaderComponents />
  <RouterView />
  <FooterComponents />
</template>
<script>
import HeaderComponents from './components/HeaderComponents.vue';
import Navbar from './components/Navbar.vue';
import FooterComponents from './components/FooterComponents.vue';

export default {
  name: 'App',
  components: { Navbar, HeaderComponents, FooterComponents },
}
</script>
<style>
html,
body,
#app {
  min-height: 100vh;
  margin: 0;
  padding: 0,
}

/* #app {
  display: grid;
  grid-template-rows: auto 1fr auto;
} */

:root {
  font-family: sans-serif;
}

main {
  margin-top: 4rem;
}
</style>