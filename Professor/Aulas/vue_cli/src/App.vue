<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Meu App Vue</h1>
    <p class="subtitulo">Meu subtitulo</p>
    <br />
    <home-component />
    <br />
    <usuario-component v-show="isUsuarioVisivel" />
    <br />
    <estilo-component />
    <br />
    <imagem-component
      @visibilidade-img="escutarVisibilidadeImg"
      larguraImg="300"
      urlImg="https://i0.statig.com.br/bancodeimagens/2c/na/9i/2cna9ia94r2cseq9t93j52dgt.jpg"
    />
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue";
import UsuarioComponent from "./components/UsuarioComponent.vue";
import EstiloComponent from "./components/EstiloComponent.vue";
import ImagemComponent from "./components/ImagemComponent.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
    UsuarioComponent,
    EstiloComponent,
    ImagemComponent,
  },
  data() {
    return {
      isUsuarioVisivel: false,
    };
  },
  methods: {
    escutarVisibilidadeImg(isImgComponentVisivel) {
      this.isUsuarioVisivel = !isImgComponentVisivel;
    },
  },
  mounted() {
    console.log("mounted");
  },
  created() {
    console.log("created");
  },
  updated() {
    console.log("updated");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* h1 {
  color: darkmagenta;
  text-align: center;
}
.subtitulo {
  color: darkseagreen;
  font-family: "Gill Sans";
  text-align: center;
} */
</style>
