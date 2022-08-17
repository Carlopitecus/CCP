<template>
  <div class="container">
    <div>
      <Titulo texto="Circulares"></Titulo>
    </div>
    <div class="row row_display">
      <div
        v-for="(card, index) in infocards"
        :key="index"
        class="noticias_display card col-md-4 m-4"
      >
        <img :src="card.imagen" class="card-img-top" :alt="card.alt" />
        <div class="card-body">
          <h5 class="card-title">{{ card.titulo }}</h5>
          <p class="card-text">{{ card.mensaje }}</p>

          <b-button :href="card.url" variant="primary" target="_blank">{{ card.textoBoton }}</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from "../components/titulo.vue";
export default {
  name: "circulares",
  components: { Titulo },
  data() {
    return {
      infocards: [
        {
          titulo: "CIRCULAR N° 01/2022",
          imagen:
            "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg",
          mensaje: "Información sobre el inicio del año escolar 2022.",
          url: "https://primersitio1php.000webhostapp.com/documentos/Circulares/CIRCULAR_N1.pdf",
          textoBoton: "Ver Circular",
        },
        {
          titulo: "CIRCULAR N° 02/2022",
          imagen:
            "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg",
          mensaje: "Actualización Protocolos COVID 2022 MINEDUC",
          url: "https://primersitio1php.000webhostapp.com/documentos/Circulares/Circular_N2.pdf",
          textoBoton: "Ver Circular",
        },
        {
          titulo: "CIRCULAR Nº 3/2022 ",
          imagen:
            "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg",
          mensaje:
            "Retorno de las Actividades Curriculares de Libre Elección (ACLE) para todos los alumnos desde 1º básico hasta IVº Medio.",
          url: "https://primersitio1php.000webhostapp.com/documentos/Circulares/CIRCULAR_N3..pdf",
          textoBoton: "Ver Circular",
        },
        {
          titulo: "CIRCULARN°04/2022",
          imagen:
            "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg",
          mensaje: "Calendario de actividades de Semana Santa",
          url: "https://primersitio1php.000webhostapp.com/documentos/Circulares/Circular_N4.pdf",
          textoBoton: "Ver Circular",
        },
        {
          titulo: "CIRCULARN°05/2022",
          imagen:
            "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg",
          mensaje:
            "Modificación de los protocolos y medidas sanitarias paralos colegios en el amrco del COVID-19",
          url: "https://primersitio1php.000webhostapp.com/documentos/Circulares/Circular_N5.pdf",
          textoBoton: "Ver Circular",
        },
        {
          titulo: "CIRCULAR N° 06/2022 ",
          imagen:
            "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg",
          mensaje:
            "Fechas importantes del calendario escolar el último mes del primer semestre.",
          url: "https://primersitio1php.000webhostapp.com/documentos/Circulares/Circular_N6.pdf",
          textoBoton: "Ver Circular",
        },
        {
          titulo: "CIRCULAR N°07/2022 ",
          imagen:
            "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg",
          mensaje:
            "Reprogramacón de las actividades de acuerdo a las nuevas fechas de vacaciones de invierno informadas por el Mineduc",
          url: "https://primersitio1php.000webhostapp.com/documentos/Circulares/Circular_N7.pdf",
          textoBoton: "Ver Circular",
        },
        {
          titulo: "CIRCULAR N° 08/2022",
          imagen:
            "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg",
          mensaje: "información importante para el inicio del 2º semestre",
          url: "https://primersitio1php.000webhostapp.com/documentos/Circulares/CIRCULAR_N8.pdf",
          textoBoton: "Ver Circular",
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
.row_display {
  justify-content: space-around;
}
</style>