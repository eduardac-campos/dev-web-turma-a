<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>Email: {{ email }}</p>
        <hr />
        <h1 v-show="isBrasaCampeao">Brasil Campeão</h1>
        <img scr="">
    </div>
</template>

<script>
//https://pbs.twimg.com/media/BsRU0-vIQAAg4I5.jpg

export default {
    name: "UsuarioComponet",
    data() {
        return {
            nome: "Eduarda Carvalho",
            email: "eduarda@gmail.com"
            isBrasaCampeao: false,
            urlImg:
                "https://setelagoas.com.br/wp-content/uploads/"
        }
    }
}
</script>



export default {
  data() {
    };
  },
    mounted() {
    setTimeout(() => {
        this.isBrasaCampeao = true;
    }, 8 * 1000);

    setTimeout(() => {
        this.isBrasaCampeao = false;
    }, 8 * 1000);
  },
};

</script>
