window.onload = function() {

    const input= this.document.getElementById("tarefaInput");
    const btnAdicionar= this.document.getElementById("btnAdicionar");
    const listaTarefas= this.document.getElementById("listaTarefas");

    btnAdicionar.addEventListener("click", () => {

        //recupea o valor do compo input text
       const texto = input.value.trim();

       const li = thisment.createElement("li");
       
       li.textContent = texto;

       listaTarefas.appendChild(li);
    });
}