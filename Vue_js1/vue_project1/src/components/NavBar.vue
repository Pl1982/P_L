<template>
      <header>
            <nav class="dekstop-nav">
                  <div>
                        <RouterLink to='/'>
                              <img src="../assets/logo_Ferme.png" class="logo">
                        </RouterLinK>
                  </div>

                  <div class="mains_links">
                        <RouterLink to="/restaurant">Restaurant</RouterLink>
                        <RouterLink to="/Hotel">Hôtel</RouterLink>
                        <RouterLink to="/bien-etre">Bien-Etret</RouterLink>
                        <RouterLink to="/seminaire">Séminaire</RouterLink>
                        <RouterLink to="/offir">Offrir</RouterLink>
                        <RouterLink to="/contact">Contact & accès</RouterLink>
                        <RouterLink v-if="!isLoggedIn" to="/login">Se connecter</RouterLink>
                        <p v-else>Bonjour, {{ userName }}</p>
                  </div>
                  <div class="butons-container">
                        <button>
                              <img src="../assets/logo_2.png">Langue</button>
                        <button class="book">Résever</button>
                  </div>
            </nav>
            <!-- mobile-nav -->
            <nav class="mobile-nav" :style="{ background: navBackground }">
                  <div class="top-nav">
                        <router-link to="/">
                              <img src="../assets/Logo_Ferme.png" alt="logo du site" class="mobile-logo" />
                        </router-link>
                        <button v-if="!mobileNavIsopen" @click="mobileNavIsopen = true">
                              <img src="../assets/hamb.png"></button>
                        <button v-else @click="mobileNavIsopen = false" class="hamb-button">
                              <img src="../assets/x.png">
                        </button>
                  </div>
                  <Transition>
                        <div v-if="mobileNavIsopen" class="mains_links">
                              <RouterLink to="/restaurant">Restaurant</RouterLink>
                              <RouterLink to="/Hotel">Hôtel</RouterLink>
                              <RouterLink to="/bien-etre">Bien-Etre</RouterLink>
                              <RouterLink to="/seminaire">Séminaire</RouterLink>
                              <RouterLink to="/offir">Offrir</RouterLink>
                              <RouterLink to="/login">Se connecter</RouterLink>
                              <div class="butons-container">
                                    <button>
                                          <img src="../assets/logo_2.png">Langue</button>
                                    <button class="book">Résever</button>
                              </div>
                        </div>
                  </Transition>

            </nav>
      </header>
</template>

<script>
import { useUserStore } from '../stores/user.store';

export default {
      data() {
            return {
                  mobileNavIsopen: false,
                  // currentScrollPosition: 0,
            }
      },
      computed: {
            isLoggedIn: function () {
                  const userStore = useUserStore()
                  return userStore.isLoggedIn
            },
            userName: function () {
                  const userStore = useUserStore()
                  return userStore.firstName
            }
            // computed: {
            //       navBackground: function () {
            //             return { this.currentScroll <=500?"transparent":" "var(----primary)"

            //       },


            //       currentScroll: function () {
            //             return document.body.scrollTop;
            //       },
            // },
            // //Hook :  quand le composant est créé
            // created() {
            //       //On ajoute un event listener au scroll, qui va appeler la méthode "handleScroll"
            //       window.addEventListener("scoll", thid.hadleScroll)
            // },
            // unmounted() {
            //       //Quand le composant est retiré du DOM, on retire notre event listener
            //       window.removeEventListener("scoll", this.handleScroll)
            // },
            // methods: {
            //       handleScroll() {
            //             this.currentScroll = window.scrollY
            //       },
            // }

      }
}
</script>

<style scoped>
.mobile-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
}

.mobile-nav .mains_links {
      flex-direction: column;
      align-items: center;
      background: white;
      height: 100vh;
}

.mobile-nav .mains_links a {
      font-size: 1.5rem;
      margin: 0.5rem;
}

.dekstop-nav {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid black;
      padding: 0 2rem;
      display: none;

}

@media screen and (min-width:1200px) {
      .dekstop-nav {
            display: flex;
      }

      .mobile-nav {
            display: none;
      }
}

.logo {
      height: 4rem;
}

.mains_links {
      text-transform: uppercase;
      display: flex;
      gap: 1rem;
}

button {
      color: red;
      display: flex;
      align-items: center;
      font-size: 1rem;
      background: transparent;
      border: none;
      padding: .75rem 1rem;
}

button img {
      height: 1.5rem
}

.book {
      border: 1px solid var(--primary);
      border-radius: 0.1rem;
}

.butons-container {
      display: flex;
      align-items: center;
}

.mobile-nav .top-nav {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: red;
}

.hamb-button img {
      height: 3rem;
}

.mobile-logo {
      height: 4rem;
}


@media screen and (max-width: 360px) {
      .mobile-logo {
            height: 3rem;
      }
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