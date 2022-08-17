<template>
<div>
  <div class="container">
    <titulo texto="Biblioteca"></titulo>
    <div class="biblio_aviso--centrado">
      <img
        src="https://primersitio1php.000webhostapp.com/documentos/biblioteca/aviso_biblio.jpg"
        alt="aviso"
      />
    </div>

    <div class="row row_display">
      <div
        v-for="(card, index) in bibliocards"
        :key="index"
        class="noticias_display card col-md-4 m-4"
      >
        <img :src="card.imagen" class="card-img-top" :alt="card.alt" />
        <div class="card-body">
          <h5 class="card-title">{{ card.titulo }}</h5>
          <p class="card-text">{{ card.texto }}</p>

          <b-button :href="card.url" variant="primary" target="_blank">{{ card.textoBoton }}</b-button>
        </div>
      </div>
    </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Titulo from "../components/titulo.vue";
import Footer from "@/components/footer.vue";

export default {
  components: { Titulo, Footer },
  data() {
    return {
      bibliocards: [
        {
          imagen: "https://cdn.pixabay.com/photo/2021/11/10/18/21/woman-6784555_960_720.jpg",
          texto: "Catálogo Biblioteca CRA CCP",
          url: "https://capellanpascal.colegium.com/mt",
          textoBoton:"Ir al Catalogo"
        },
        {
          imagen: "https://www.colegiolafuente.cl/wp-content/uploads/2021/03/UCE-2021-portada.png",
          texto: "Biblioteca Escolar de la Unidad de Currículum y Evaluación (UCE) del Mineduc",
          url: "https://capellanpascal.colegium.com/mt",
          textoBoton:"Ir al Biblioteca UCE"
        },
        {
          imagen: "https://cdn.pixabay.com/photo/2018/04/17/09/02/child-3326960_960_720.png",
          texto: " PLan LEctor 2022",
          url: "https://primersitio1php.000webhostapp.com/documentos/biblioteca/Documentos/PLAN_LECTOR_2022.pdf",
          textoBoton:"Plan Lector"
        },
        {
          imagen: "https://primersitio1php.000webhostapp.com/documentos/biblioteca/Documentos/mes_gatos.jpg",
          texto: "¿Por qué agosto es el mes de los gatos?",
          url: "https://primersitio1php.000webhostapp.com/documentos/biblioteca/Documentos/Por_que_agosto_eselmesdelos_gatos_%20Lecturas%20recomendadas.pdf",
          textoBoton:"Ir a la Lectura"
        },
        {
          imagen: "https://primersitio1php.000webhostapp.com/documentos/biblioteca/Documentos/cuentos_otonno.jpg",
          texto: "Libors para celebrar Otoño",
          url: "https://primersitio1php.000webhostapp.com/documentos/biblioteca/Documentos/Libros_para_celebrar_el_otono.pdf",
          textoBoton: "Ir a Cuentos"
        },        
        {
          imagen: "https://primersitio1php.000webhostapp.com/documentos/biblioteca/Documentos/Imagen_dia_madre.jpg",
          texto: "Lectura recomendada para el día de la Madre",
          url: "https://primersitio1php.000webhostapp.com/documentos/biblioteca/Documentos/Lecturas-Recomendadas-Dia-de-la-Madre-CCP.pdf",
          textoBoton:" Ir a la Lectura"
        },
        
        {
          imagen: "https://primersitio1php.000webhostapp.com/documentos/biblioteca/Documentos/Lectura_dia_padre.jpg",
          texto: "Lecturas para el día del Padre",
          url: "https://primersitio1php.000webhostapp.com/documentos/biblioteca/Documentos/Lecturas_Recomendadas_Dia_del_Padre.pdf",
          textoBoton:"Ir a la Lectura"
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.biblio_aviso--centrado{
    margin: auto;
    width: 50%;
    display: block;
}
.biblio_display {
  display: flex;
  justify-content: space-around;
  margin-top: 3em;
}
.noticias_display {
  width: 300px;
}
.row_display {
  justify-content: space-around;
}
</style>