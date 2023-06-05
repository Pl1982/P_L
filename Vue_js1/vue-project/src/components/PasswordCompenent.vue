<template>
      <input type="password" v-model="password">
      <p>{{ password }}</p>
      <p class="error" v-if="!passwordHminLengthCharcters
            || !passwordContainOneNumber
            || !passwordContainOneUppercase
            || !passwordOneSpecialCharacter">
            WRONG
      </p>
</template>


<script>
export default {
      data() {
            return {
                  password: "",
            }
      },
      computed: {
            passwordHminLengthCharcters: function () {
                  return this.password.length !== ''
                        || this.passwordHminLengthCharcters.length > 8
            },

            passwordContainOneNumber: function () {
                  return /[0-9]/.test(this.password)
            },

            passwordContainOneUppercase: function () {
                  return /[A-Z]/.test(this.password)
            },
            passwordOneSpecialCharacter: function () {
                  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.password)
            },


      }

}
</script>

<style></style>