<template>
      <section>
            <h1>login</h1>
            <form @submit.prevent="submit">
                  <div>
                        <label for="login">Login</label>
                        <input v-model="login" id="login" type="text">
                  </div>
                  <div>
                        <label for="password">Mot de passe</label>
                        <input v-model="password" id="password" type="password">
                  </div>
                  <p v-if="loginError">Identifiant ou mot de passe incorrect</p>
                  <button type="submit">Se connecter</button>
            </form>
      </section>
</template>
<script>
import axios from "axios"
import { useUserStore } from "../stores/user.store"
export default {
      data() {
            return {
                  login: '',
                  password: '',
                  loginError: '',
            }
      },
      methods: {
            submit: async function () {
                  console.log("Submit:", this.login, this.password)
                  //faire le login API
                  try {
                        const loginData = await axios.post("https://dummyjson.com/auth/login",
                              {
                                    username: this.login,
                                    password: this.password,
                              }
                        )
                        const userStore = useUserStore()
                        userStore.setUserData(loginData.data)
                        console.log(loginData)
                        this.$router.push("/user")
                        //Si la requete echoue on tombe sans le c tch
                  } catch (e) {
                        //Vu que le login a raté, on affiche le texte d'erreur
                        this.loginError = true

                  }

            }
      },
}
</script>
<style>
section {
      display: flex;
      align-items: center;
      flex-direction: column;
}

form {
      border: 1px solid var(--primary);
      padding: 1rem;
}

button {
      border: 1px solid var(--primary);
      background: var(--primary);
      color: white;
      padding: 0.5rem 2rem;
}

form input {
      border: 1px solid var(--primary);
      padding: 0.5rem;
      font-size: 1rem;
}

form div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
}

h1 {
      margin: 1rem 0;
}
</style>
