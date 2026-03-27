<template>
  <div>
    <footer id="footer">
      <p>Ben Vindo: {{ nome }} Olá Mundo do <b>VUE com CLI</b></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      nome: "Fernando",
    };
  },
};
</script>
