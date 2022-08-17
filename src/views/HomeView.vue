<template>
<div>
  <carrusel></carrusel>
  <noticias></noticias>
  <informaciones></informaciones>
  <Footer></Footer>
  </div>
</template>

<script>
import carrusel from '../components/carrusel.vue'
import Informaciones from '../components/Informaciones.vue'
import noticias from '../components/noticias.vue'
import Footer from '@/components/footer.vue'
export default {
  components: { carrusel, noticias, Informaciones, Footer },

}
</script>

<style>

</style>