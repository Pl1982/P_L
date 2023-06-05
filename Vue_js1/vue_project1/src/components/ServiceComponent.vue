<template>
      <section class="service">
            <div>
                  <img :src="imageUrl" alt="globe">
                  <h3>{{ title }}</h3>
                  <p>{{ content }}</p>
            </div>

      </section>
</template>

<script>
export default {
      props: {
            icon: String,
            title: String,
            content: String,
      },
      computed: {
            imageUrl: function () {
                  return new URL(this.icon, import.meta.url).href
            }
      }
}
</script>

<style scoped>
div {
      text-align: center;
      width: 80%;

}

img {
      height: 3rem;
      background-color: red;
}
</style>