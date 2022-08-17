<template>
  <div class="container">
    <div>
      <Titulo texto="Informaciones"></Titulo>
    </div>

    <div class=" row row_display">   
    <div v-for="(card, index) in infocards" :key="index" class="noticias_display card  col-md-4 m-4 " >
  <img :src="card.imagen" class="card-img-top" :alt="card.alt">
  <div class="card-body">
    <h5 class="card-title">{{ card.titulo }}</h5>
    <p class="card-text">{{ card.mensaje }}</p>
    
    <router-link class="links btn btn-primary" :to="card.url">{{ card.textoBoton }}</router-link>
  </div>
</div>  
<div class="card noticias_display card  col-md-4 m-4 ">
  <img src="https://cdn.pixabay.com/photo/2016/09/30/06/53/kit-1704526_960_720.png" class="card-img-top " alt="Enfermería">
  <div class="card-body">
    <h5 class="card-title">Enfermería</h5>
    <p class="card-text">Tutorial explicativo sobre el ingreso de los datos de Salud de los Alumnos a SchoolNet</p>
    <a href="https://primersitio1php.000webhostapp.com/documentos/enfermeria/Ingreso_de_datos_de_salud_alumno_SchoolNet.pdf" class="btn btn-primary" target="_blank">Ver Tutorial</a>
  </div>
</div>


    </div>
  </div>
</template>

<script>
import Titulo from "./titulo.vue";

export default {
  name: "informaciones",
  components: { Titulo },
  data() {
    return {
      infocards: [
        {
          titulo: "Biblioteca",
          imagen:
            "https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg",
          alt: "Biblioteca",
          mensaje:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum veritatis doloribus eum totam, non explicabo?",
            url:"/Biblioteca",
            textoBoton:"Biblioteca"
        },
        {
          titulo: "Circulares",
          imagen:
            "https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884_960_720.png",
          alt: "Circulares",
          mensaje:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum veritatis doloribus eum totam, non explicabo?",
            url:"/Circulares",
            textoBoton:"Ir a Circulares"
        },
        
        
        
      ],
    };
  },
};
</script>


<style scoped>
.noticias_display {
  width: 300px;
}
.row_display{
    justify-content: space-around;
}
</style>