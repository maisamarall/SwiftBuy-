import http from "./http-common";

class PostProdutoDataService {
    async getById(id) {

        try {

            return await http.get(`/Produto/show/${id}`);

        } catch (error) {

            console.error(`Erro ao buscar produto com id ${id}:`, error);
            throw error;
        }
    }

    async getByNome(nome) {

        try {

            return await http.get(`/Produto/show/${nome}`);

        } catch (error) {

            console.error(`Erro ao buscar produto com nome ${nome}:`, error);
            throw error;
        }
    }

    async getByPreco() {

        try {

            return await http.get(`/Produto/preco`);

        } catch (error) {

            console.error("Erro ao buscar produtos por esse preço", error);
            throw error;
        }
    }

    async getProdutosMaisVendidos() {

        try {

            return await http.get(`/Produto/maisVendidos`);

        } catch (error) {

            console.error("Erro ao buscar produtos mais vendidos", error);
            throw error;
        }
    }

    async getAll() {

        try {

            return await http.get("/Produto");

        } catch (error) {

            console.error("Erro ao buscar produto:", error);
            throw error;
        }
    }


    async insert(formData) {

        try {

            return await http.post("/Produto", formData, {
                headers: { "Content-Type": "multipart/form-data", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "POST" },
            });

        } catch (error) {

            console.error("Erro ao cadastrar produto:", error);
            throw error;
        }
    }

    async delete(id) {

        try {

            return await http.delete(`/Produto/delete/${id}`);

        } catch (error) {

            console.error(`Erro ao deletar produto com id ${id}:`, error);
            throw error;
        }
    }

    async update(id, formData) {

        try {

            return await http.post(`/Produto/${id}?_method=PUT`, formData, {
                headers: { "Content-Type": "multipart/form-data", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "POST" },
            });

        } catch (error) {

            console.error(`Erro ao atualizar produto com id ${id}:`, error);
            throw error;
        }
    }


}

export default new PostProdutoDataService();