import api from "./api.js";

const userInterface = {
  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos");

    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.forEach((pensamento) => {
        listaPensamentos.innerHTML += `
                <li class="li-pensamento" data-id="${pensamento.id}">
                <img src="assets/imagens/aspas-azuis.png" class="icone-aspas">
                <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                <div class="pensamento-autoria">${pensamento.autoria}</div>
                </li>
            `;
      });
    } catch {
      alert("Erro ao renderizar pensamentos");
    }
  },

  adicionarPensamentosNaLista() {
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
  },
};

export default userInterface;
