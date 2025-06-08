// Cadastro do Usuário

const http = axios.create({
  baseURL: "https://localhost:7279/api", // ou o endereço correto da sua API
  headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*"},
});

var btnCadastro = document.getElementById('btnCadastrarUsuario');

btnCadastro.addEventListener('click', function(event) {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const tipo = document.getElementById('tipo').value; 

    const jsonRegistro = {};
    jsonRegistro.nome = nome.trim();
    jsonRegistro.email = email.trim();
    jsonRegistro.telefone = telefone.replace('(', '').replace(')', '').replace('-', '').trim();
    jsonRegistro.cpf = cpf.replace('-', '').replace('.', '').trim();
    jsonRegistro.senha = senha.trim();
    jsonRegistro.tipo = parseInt(tipo.trim());

    try {

        try {

            insert(jsonRegistro);

            alert('Usuário cadastrado com sucesso!');
            window.location.href = 'login.html';

        } catch (error) {

            console.error("Erro ao cadastrar usuário:", error);
            throw error;
        }


    } catch (error) {

        alert('Erro ao cadastrar usuário. Veja o console para mais detalhes.');
        console.error(error);
    }


});


async function insert(data) {

    try {

        return await http.post("/Usuario", data, {
            headers: {"Content-Type": "application/json", "accept": "*/*"},
        });

    } catch (error) {

        console.error("Erro ao cadastrar usuário:", error);
        throw error;
    }
}