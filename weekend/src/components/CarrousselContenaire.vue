<template>
      <carousel :items-to-show="1.5" :autoplay="2000" :pauseAutoplayOnHver="true" wraParound="true">
            <slide v-for="image in images" :key="image">
                  <img :src="image" alt="" class="slider-image">

            </slide>

            <template #addons>
                  <navigation />
                  <pagination />
            </template>
      </carousel>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
      components: {
            Carousel,
            Slide,
            Pagination,
            Navigation
      },
      data() {
            return {
                  images: [
                        ' https://picsum.photos/id/237/300/200',
                        ' https://picsum.photos/id/237/300/200',
                        ' https://picsum.photos/id/237/300/200',
                        ' https://picsum.photos/id/237/300/200',
                        ' https://picsum.photos/id/237/300/200',
                  ]
            }
      }
}
</script>
<style></style>