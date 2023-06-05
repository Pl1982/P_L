<template>
      <section>
            <p v-for="image in imagesUrls">{{ image }}</p>
      </section>
</template>
<script>
export default {
      props: {
            imagesUrls: [String],
      }
}

</script>