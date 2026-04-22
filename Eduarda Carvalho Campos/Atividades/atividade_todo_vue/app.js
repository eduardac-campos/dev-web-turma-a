const { createApp, ref } = Vue;

createApp({
  setup() {
    // Estado reativo: texto do campo de entrada
    const novaTarefa = ref("");

    // Estado reativo: lista de tarefas
    const tarefas = ref([]);

    // Contador para gerar IDs únicos
    let proximoId = 1;

    /**
     * Adiciona uma nova tarefa à lista.
     * Ignora entradas em branco.
     */
    function adicionarTarefa() {
      const texto = novaTarefa.value.trim();

      if (!texto) return;

      tarefas.value.push({
        id: proximoId++,
        texto: texto,
        concluida: false,
      });

      // Limpa o campo de entrada após adicionar
      novaTarefa.value = "";
    }

    /**
     * Alterna o estado de conclusão de uma tarefa.
     * @param {Object} tarefa - A tarefa a ser marcada/desmarcada.
     */
    function marcarConcluida(tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }

    /**
     * Remove uma tarefa da lista pelo seu ID.
     * @param {number} id - O ID da tarefa a ser removida.
     */
    function removerTarefa(id) {
      tarefas.value = tarefas.value.filter((t) => t.id !== id);
    }

    return {
      novaTarefa,
      tarefas,
      adicionarTarefa,
      marcarConcluida,
      removerTarefa,
    };
  },
}).mount("#app");
