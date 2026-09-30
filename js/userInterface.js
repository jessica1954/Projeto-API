import api from "./api.js";

const userInterface = {
  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos");

    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.forEach(userInterface.adicionarPensamentosNaLista);
    } catch {
      alert("Erro ao renderizar pensamentos");
    }
  },

  adicionarPensamentosNaLista(pensamento) {
    const listaPensamentos = document.getElementById("lista-pensamentos");
    const li = document.createElement("li");
    li.setAttribute("data-id", pensamento.id);
    li.classList.add("li-pensamento");

    const iconeAspas = document.createElement("img");
    iconeAspas.src = "assets/imagens/aspas-azuis.png";
    iconeAspas.alt = "Aspas Azuis";
    iconeAspas.classList.add("icone-aspas");

    //CONSTRUINDO A ESTRUTURA DA AUTORIA DA FRASE

    const pensamentoConteudo = document.createElement("div");
    pensamentoConteudo.textContent = pensamento.conteudo;
    pensamentoConteudo.classList.add("pensamento-conteudo");

    const pensamentoAutoria = document.createElement("div");
    pensamentoAutoria.textContent = pensamento.autoria;
    pensamentoAutoria.classList.add("pensamento-autoria");

    //DEFININDO A HIERARQUIA ENTRE AS TAGS(<li> <img> <div>)

    li.appendChild(iconeAspas);
    li.appendChild(pensamentoConteudo);
    li.appendChild(pensamentoAutoria);
    listaPensamentos.appendChild(li);

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.onclick = async () => {
      try {
        await api.excluirPensamento(pensamento.id);
        userInterface.renderizarPensamentos();
      } catch (erro) {
        alert("Erro ao excluir pensamento");
      }
    };
  },
};

export default userInterface;
