<template>
      <button @click="showNav = true">
            <img v-if="!showNav" src="../assets/img/hamburger.png" alt="menu">
      </button>
      <Transition>
            <section v-if="showNav">
                  <button @click="showNav = false">
                        <img src="../assets/img/x.png" alt="croix">
                  </button>
                  <nav>
                        <ul>
                              <li>
                                    <RouterLink @click="showNav = false" to="/">Home
                                    </RouterLink>
                              </li>

                              <li>
                                    <RouterLink @click="showNav = false" to="/Page 1">HPage 1
                                    </RouterLink>
                              </li>
                              <li>


                                    <RouterLink @click="showNav = false" to="/project">My_project
                                    </RouterLink>
                              </li>
                              <li>

                                    <RouterLink @click="showNav = false" to="/contact">Page_contact
                                    </RouterLink>
                              </li>
                              <li>

                                    <RouterLink @click="showNav = false" to="/blog">blog
                                    </RouterLink>
                              </li>
                              <li>

                                    <RouterLink @click="showNav = false" to="/boutique">boutique
                                    </RouterLink>
                              </li>
                        </ul>
                  </nav>

            </section>
      </Transition>
</template>
<script>
export default {
      data() {
            return {
                  showNav: false,
            }
      },
}
</script>
<style scped>
section {
      display: flex;

}

nav ul li {
      margin: 1rem 2rem;
}

.v-enter-active,
.v-leave-active {
      transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
      opacity: 0;
}
</style>