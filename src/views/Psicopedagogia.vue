<template>
  <div class="container">
    <Titulo texto="Psicopedagogía"></Titulo>
     <div>
        <div class="row row_display">
      <div
        v-for="(card, index) in psicocards"
        :key="index"
        class="noticias_display card col-md-4 m-4"
      >
        <img :src="card.imagen" class="card-img-top" :alt="card.alt" />
        <div class="card-body">
          <h5 class="card-title">{{ card.titulo }}</h5>
          <p class="card-text">{{ card.texto }}</p>
         <p><a :href="card.link1" target="_blank">{{ card.texto1 }}</a></p>
         <p> <a :href="card.link2" target="_blank">{{ card.texto2 }}</a></p>
         <p> <a :href="card.link3" target="_blank">{{ card.texto3 }}</a></p>
         <p> <a :href="card.link4" target="_blank">{{ card.texto4 }}</a></p>
         <p> <a :href="card.link5" target="_blank">{{ card.texto5 }}</a></p>
         <p> <a :href="card.link6" target="_blank">{{ card.texto6 }}</a></p>
         <p> <a :href="card.link7" target="_blank">{{ card.texto7 }}</a></p>
         <p> <a :href="card.link8" target="_blank">{{ card.texto8 }}</a></p>
         

          
        </div>
      </div>
    </div>


     </div>
    
  </div>
</template>

<script>
import Titulo from "../components/titulo.vue";
export default {
    components: { Titulo },
    data () {
        return {
            psicocards: [
                {
                imagen:"https://cdn.pixabay.com/photo/2018/03/01/05/46/business-3189797_960_720.png",
                titulo:"Planificación",
                link1:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/planificacion/Planificacion_padres.pdf",
                texto1:"Padres",
                link2:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/planificacion/Planificacion_prebasica_y_basica.pdf",
                texto2:"Educación Parvularia y Educación Básica",
                link3:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/planificacion/Planificacion_intermedia_y_%20media.pdf",
                texto3:"Educación intermedia y Educación Media ",
                },
                {
                imagen:"https://cdn.pixabay.com/photo/2017/01/06/09/23/leave-1957302_960_720.jpg",
                titulo:"La Escritura",
                link1:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/laEscritura/Motricidad_fina_prebasica.pdf",
                texto1:"MOTRICIDAD FINA PRE-BÁSICA",
                link2:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/laEscritura/ciclo_basico.pdf",
                texto2:"LA ESCRITURA EN BÁSICA",
                link3:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/laEscritura/ciclo_intermedio_medio.pdf",
                texto3:"PROCESO DE ESCRITURA CLICLO INTERMEIO Y MEDIO",
                link4:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/laEscritura/Escritura_Padres.pdf",
                texto4:"PARA LOS PADRES ",
                },
                {
                imagen:"https://cdn.pixabay.com/photo/2017/01/18/12/33/session-1989711_960_720.png",
                titulo:"Evaluaciones",
                link1:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/guiaPadresEvaluacion/Guia_de_Padres_evaluacion.pdf",
                texto1:"GUÍA PARA LOS PADRES",
                link2:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/enfrentarEvaluacion/Como_enfrentar_una_evaluacion.pdf",
                texto2:"COMO ENFRENTAR UNA EVALUACIÓN ",
                },
                {
                imagen:"https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_960_720.jpg",
                titulo:"Técnicas de Estudio",
                link1:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/tecnicasEstudio/Guia_para_padres_tecnicas_de_estudio.pdf",
                texto1:"GUÍA PARA LOS PADRES",
                link2:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/tecnicasEstudio/Tecnicas_de_estudio.pdf",
                texto2:"TÉCNICAS DE ESTUDIO"
                },                
                {
                imagen:"https://cdn.pixabay.com/photo/2019/03/14/08/21/whiteboard-4054377_960_720.jpg",
                titulo:"Rutinas en el Hogar",
                link1:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/rutinasHogar/guia_para_padres_rutina.pdf",
                texto1:"GUÍA PARA LOS PADRES",
                link2:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/rutinasHogar/rutina_basica.pdf",
                texto2:"RUTINA NIVEL BÁSICA ",
                link3:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/rutinasHogar/rutina_nivel_intermedio_medio.pdf",
                texto3:"RUTINAS NIVEL INTERMEDIO Y MEDIO ",
                link4:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/rutinasHogar/plantilla_tableros_rutina_prebasica.pdf",
                texto4:"PLANTILLA TABLEROS PRE-BÁSICA ",
                },
                {
                imagen:"https://cdn.pixabay.com/photo/2020/03/23/17/04/brain-4961452_960_720.jpg",
                titulo:"Funciones Ejecutivas",
                link1:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/funciones%20Ejecutivas/funcion_ejecutiva_padres.pdf",
                texto1:"CARTA A LOS PADRES",
                link2:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/funciones%20Ejecutivas/infografia_funciones_ejecutivas.pdf",
                texto2:"INFOGRAFÍA 8 FUNCIONES EJECUTIVAS CLAVES",
                link3:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/funciones%20Ejecutivas/fichas_funciones_ejecutivas_basica.pdf",
                texto3:"FICHAS U FUNCIONES EJECUTIVAS EDUC. BÁSICA",
                link4:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/funciones%20Ejecutivas/check_list_intermedia.pdf",
                texto4:"CHECK LIST FUNCIONES EJECUTIVAS INTERMEDIA",
                link5:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/funciones%20Ejecutivas/check_list_media.pdf",
                texto5:"CHECK LIST FUNCIONES EJECUTIVAS MEDIA ",
                },
                {
                imagen:"https://cdn.pixabay.com/photo/2015/03/12/19/08/children-studying-670663_960_720.jpg",
                titulo:"Comprensión Lectora",
                link1:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/comprensionLectora/Guia_Padres_CL.pdf",
                texto1:"GUÍA PARA PADRES",
                link2:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/comprensionLectora/CB.Lectura_Compartida.pdf",
                texto2:"LECTURA COMPARTIDA CICLO BÁSICO",
                link3:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/comprensionLectora/CL.%20estrategias_media.pdf",
                texto3:"ESTRATÉGIAS CICLO MEDIA",
                link4:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/comprensionLectora/CK.L.comprension_lectora_intermedia.pdf",
                texto4:"COMPRENSIÓN LECTORA CICLO INTERMEDIA",
                link5:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/comprensionLectora/CL.Media.pdf",
                texto5:"COMPRENSIÓN LECTORA CICLO MEDIA ",
                },
                {
                imagen:"https://cdn.pixabay.com/photo/2019/03/14/08/21/whiteboard-4054377_960_720.jpg",
                titulo:"Pensamiento Lógico Matemático",
                link1:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/pensamientoLogicoMatematico/GUIA_PADRES.pdf",
                texto1:"GUÍA PARA PADRES",
                link2:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/pensamientoLogicoMatematico/Pensamiento_logico_matematico_Pre_kinder_Kinder.pdf",
                texto2:"PREKINDER Y KINDER",
                link3:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/pensamientoLogicoMatematico/Como_potenciar_pensamiento_logico_matematico.pdf",
                texto3:"COMO POTENCIARLO",
                link4:"https://primersitio1php.000webhostapp.com/documentos/psicopedagogia/pensamientoLogicoMatematico/Resolucion_de_problemas.pdf",
                texto4:"RESOLUCIÓN DE PROBLEMAS ",
                },

            ]
        }
    }

}
</script>

<style scoped>
.noticias_display {
  width: 300px;
}
.row_display {
  justify-content: space-around;
}

</style>