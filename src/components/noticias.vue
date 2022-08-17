<template>
  <div class="container">
    <div>
        <Titulo texto="Noticias"></Titulo>
    </div>

    <div class="noticias_display">
      <b-card
        v-for="(card, index) in noticards"
        :key="index"
        title="Noticias"
        :img-src="card.imagen"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ card.mensaje }}
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import Titulo from './titulo.vue'

export default {
  name: "noticias",
  components: { Titulo, Titulo },
  data() {
    return {
      noticards: [
        {
          imagen:
            "https://cdn.pixabay.com/photo/2018/11/16/14/10/feather-3819497_960_720.jpg",
          mensaje:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum veritatis doloribus eum totam, non explicabo?",
        },
        {
          imagen:
            "https://cdn.pixabay.com/photo/2015/02/12/14/58/frost-633826_960_720.jpg",
          mensaje:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum veritatis doloribus eum totam, non explicabo?",
        },
        {
          imagen:
            "https://cdn.pixabay.com/photo/2018/06/21/16/30/newspapers-3488857_960_720.jpg",
          mensaje:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum veritatis doloribus eum totam, non explicabo?",
        },
      ],
    };
  },
};
</script>

<style scoped>
.noticias_display {
  display: flex;
  justify-content: space-around;
  margin-top: 3em;
}
</style>