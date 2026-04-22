<template>
  <div>
    <p>Nome: {{ nome }}</p>
    <p>Email: {{ email }}</p>
    <hr />
    <h1 v-show="isBrasaCampeao">Brasil Campeão</h1>
    <img :src="urlImg" width="300" height="200" />
  </div>
</template>

<script>
export default {
  name: "UsuarioComponent",
  data() {
    return {
      nome: "Fernando Dias",
      email: "fernando@gmail.com",
      isBrasaCampeao: false,
      urlImg:
        "https://setelagoas.com.br/wp-content/uploads/2015/10/Alegria-27.jpg",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isBrasaCampeao = true;
    }, 4 * 1000);

    setTimeout(() => {
      this.isBrasaCampeao = false;
      this.urlImg = "https://pbs.twimg.com/media/BsRU0-vIQAAg4I5.jpg";
    }, 8 * 1000);
  },
};
</script>

<style></style>
