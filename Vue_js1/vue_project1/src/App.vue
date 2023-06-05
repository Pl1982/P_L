<script >
import Navbar from "./components/NavBar.vue"

export default {
  components: { Navbar },
}
</script>

<template>
  <Navbar />
  <div class="main-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
@media screen and (max-width:1200px) {
  .main-wrapper {
    margin-top: 6rem;
  }

}
</style>
