import PostUsuarioDataService from "../../../services/PostUsuarioDataService";

document.getElementById('usuario-form').addEventListener('submit', async (event) => {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    const formData = new FormData();

    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('telefone', telefone);
    formData.append('senha', senha);

    try {

        if (id) {

            await PostUsuarioDataService.update(id, formData);
            alert('Usuário atualizado com sucesso!');

        } else {


            await PostUsuarioDataService.insert(formData);
            alert('Usuário cadastrado com sucesso!');

        }

        document.getElementById('usuario-form').reset();

    } catch (error) {

        alert('Erro ao salvar produto. Veja o console para mais detalhes.');
        console.error(error);
    }
});