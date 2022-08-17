<template>
<div class="titulo-margin">
  <h2> {{ texto }}</h2>
  </div>
</template>

<script>
export default {
    name: 'Titulo',
    props: {
        texto: String
    }

}
</script>

<style scoped>
.titulo-margin{
  margin-top:3em;
  text-decoration: underline;
}
</style>