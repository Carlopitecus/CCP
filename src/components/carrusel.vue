<template>
  <!-- Carrusel -->
  <div class="home_carrusel-fondo">
  

  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div v-for="(imagen,indice) in imagenes" :key="indice" class="carousel-item " :class="{active:indice==0}">
      <img :src="imagen.url" class="home_carrusel-size " :alt="imagen.alt">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ imagen.texto}}</h5>
      </div>
    </div>    
  </div>
</div>
</div>
</template>

<script>
export default {
    name:'Carrusel',
    
    data() {
      return {
        
        imagenes: [
          {
            url:"https://primersitio1php.000webhostapp.com/carrusel/30annios.jpg",
            alt:"30 años de nuestro colegio",
            texto:"30 años de nuestro colegio",
            },
          {
            url:"https://primersitio1php.000webhostapp.com/carrusel/abanderados2022.jpg",
            alt:"Abanderados 2022",
            texto:"Abanderados 2022",
            },
          {
            url:"https://primersitio1php.000webhostapp.com/carrusel/CEAL22_23.jpg",
            alt:"C.E.A.L. 2022 - 2023",
            texto:"C.E.A.L. 2022 - 2023",
            },
          {
            url:"https://primersitio1php.000webhostapp.com/carrusel/g21.jpg",
            alt:"Generación 2021",
            texto:"Generación 2021",
            },
          {
            url:"https://primersitio1php.000webhostapp.com/carrusel/g33.jpg",
            alt:"Generación 2033",
            texto:"Generación 2033",
            },
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.home_carrusel-fondo{
  background-image: url(../assets/Imagenes/fondo_nav.jpg) ;
  background-repeat: no-repeat;
  height: 35rem;
}

.home_carrusel-size{
  display: block;
  /* margin: auto; */
  width: 100%;
  height: 35rem;
}

</style>