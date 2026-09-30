const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json();
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  async salvarPensamentos(pensamento) {
    try {
      const response = await fetch("http://localhost:3000/pensamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await responsei.json();
    } catch {
      alert("Erro ao salvar pensamento");
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
        method: "DELETE",
      });
    } catch {
      alert("Erro ao excluir o pensamento");
      throw error;
    }
  },
};
export default api;
