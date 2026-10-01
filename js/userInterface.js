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
    //CONSTRUINDO O ITEM DA LISTA (UMA NOVA FRASE)
    const listaPensamentos = document.getElementById("lista-pensamentos");
    const li = document.createElement("li");
    li.setAttribute("data-id", pensamento.id);
    li.classList.add("li-pensamento");
    //ADICIONANDO A IMAGEM DAS ASPAS
    const iconeAspas = document.createElement("img");
    iconeAspas.src = "assets/imagens/aspas-azuis.png";
    iconeAspas.alt = "Aspas Azuis";
    iconeAspas.classList.add("icone-aspas");
    //CONSTRUIR A ESTRUTURA DO CONTEÚDO DA FRASE
    const pensamentoConteudo = document.createElement("div");
    pensamentoConteudo.textContent = pensamento.conteudo;
    pensamentoConteudo.classList.add("pensamento-conteudo");
    //CONSTRUIR A ESTRUTURA DA AUTORIA DA FRASE
    const pensamentoAutoria = document.createElement("div");

    pensamentoAutoria.textContent = pensamento.autoria;
    pensamentoAutoria.classList.add("pensamento-autoria");
    //DEFININDO A HIERARQUIA ENTRE AS TAGS (<ul> <li> <img> <div>)
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
      } catch (error) {
        alert("Erro ao excluir pensamento");
      }
    };
    const iconeExcluir = document.createElement("img");
    iconeExcluir.src = "assets/imagens/icone-excluir.png";
    iconeExcluir.alt = "Icone Excluir";
    botaoExcluir.appendChild(iconeExcluir);
    const icones = document.createElement("div");
    icones.classList.add("icones");
    icones.appendChild(botaoExcluir);
    li.appendChild(icones);
  },
};
export default userInterface;
