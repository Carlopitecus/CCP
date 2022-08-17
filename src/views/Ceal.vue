<template>
<div >
  <div class="container" >
    <Titulo texto="Centro de Alumnos (C.E.A.L.)"></Titulo>
    <div >
    <img class="center border border-primary p-2" src="https://primersitio1php.000webhostapp.com/documentos/Centro_Alumnos/ceal_2022_2023.jpg" alt="CEAL">
    </div>
    <h4>Isidora Astorquiza (Presidenta), José Peralta (Vicepresidente), Amparo Espina (Tesorera), Matilde McIntyre (Secretaria), María Jesús Madrid (Relaciones Públicas), Carol Benenati (Medio ambiente y Cultura), Catalina Ríos (Delegada de Artes), María Paz Norambuena (Delegada de Acción Social y Pastoral), Diego Illanes (Delegado de Deportes y Actividad Física), José González (Delegado de Deportes y Actividad Física), Antonia Rivera (Delegada de Eventos)</h4>
    
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from "@/components/footer.vue";
import Titulo from "@/components/titulo.vue";
export default {
    components: { Footer, Titulo },

}
</script>

<style scoped>
.center {
  display: block;
  margin: 100px auto 0 auto;
  width: 70%;
  border: 3px;
  border-color: blue;
}
h4{
    margin: 30px auto 50px auto;
}

</style>