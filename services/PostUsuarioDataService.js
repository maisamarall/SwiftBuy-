import http from "./http-common"

class PostUsuarioDataService {
    async getById(id) {

        try {

            return await http.get(`/Usuario/show/${id}`);

        } catch (error) {

            console.error(`Erro ao buscar usuário com id ${id}:`, error);
            throw error;
        }
    }

    async getAll() {

        try {

            return await http.get("/Usuario");

        } catch (error) {

            console.error("Erro ao buscar usuário:", error);
            throw error;
        }
    }


    async insert(formData) {

        try {

            return await http.post("/Usuario", formData, {
                headers: {"Content-Type": "multipart/form-data"},
            });

        } catch (error) {

            console.error("Erro ao cadastrar usuário:", error);
            throw error;
        }
    }

    async update(id, formData) {

        try {

            return await http.post(`/Usuario/${id}?_method=PUT`, formData, {
                headers: {"Content-Type": "multipart/form-data"},
            });

        } catch (error) {

            console.error(`Erro ao atualizar usuário com id ${id}:`, error);
            throw error;
        }
    }
}

export default new PostUsuarioDataService();