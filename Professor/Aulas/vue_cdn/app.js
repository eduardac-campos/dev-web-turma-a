const meuAppVue = {
  data() {
    return {
      nome: "Fernando Dias",
      idade: 38,
      inputText: "",
    };
  },
};

Vue.createApp(meuAppVue).mount("#app");
