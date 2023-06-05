<template>
      <form>
            <h1>Formulaire de contact</h1>
            <inputsComponents />
            <inputsComponents />
      </form>
</template>
<script>
import inputsComponents from './inputsComponents.vue';
export default {
      name: "ContactForm",
      components: {
            inputsComponents
      },
}
</script>