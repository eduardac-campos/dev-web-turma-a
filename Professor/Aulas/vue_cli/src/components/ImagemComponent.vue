<template>
  <div>
    <img :width="larguraImg" v-show="isImgVisivel" :src="urlImg" />
    <br />
    <button @click="apareceEsconde(), trocaLabel()">{{ nomeBotao }}</button>
  </div>
</template>

<script>
export default {
  name: "ImagemComponent",
  data() {
    return {
      isImgVisivel: true,
      nomeBotao: "Aparecer",
    };
  },
  methods: {
    apareceEsconde() {
      this.isImgVisivel = !this.isImgVisivel;
      this.$emit("visibilidadeImg", this.isImgVisivel);
    },
    trocaLabel() {
      if (this.isImgVisivel) {
        this.nomeBotao = "Esconder";
      } else {
        this.nomeBotao = "Aparecer";
      }
    },
  },
  props: {
    urlImg: String,
    larguraImg: Number,
  },
  emits: ["visibilidadeImg"],
};
</script>

<style scoped>
img {
  border: 10px solid darkorange;
  border-radius: 16px;
}
</style>
