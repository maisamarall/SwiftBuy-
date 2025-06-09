// Login do Usuário

const http = axios.create({
    baseURL: "https://localhost:7279/api",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" },
});

var btnLogin = document.getElementById('btnLogin');
var btnLoginAdm = document.getElementById('btnLoginAdm');

if (btnLogin !== null) {

    btnLogin.addEventListener('click', function (evento) {

        evento.preventDefault();

        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();

        //Forma 1
        // const jsonLogin = {};
        // jsonLogin.email = email.trim();
        // jsonLogin.senha = senha.trim();

        //Forma 2
        // const jsonLogin = {
        //     "email": email.trim(),
        //     "senha": senha.trim(),
        // };

        //Forma 3
        // const jsonLogin = {
        //     email,
        //     senha
        // };

        try {

            try {

                const response = logar(email, senha);

                Promise.resolve(response).then(
                    (value) => {
                        const retornoLogin = value.data; // "Success"
                        localStorage.setItem("id", retornoLogin.id);
                        localStorage.setItem("nome", retornoLogin.nome);
                        localStorage.setItem("email", retornoLogin.email);
                        localStorage.setItem("telefone", retornoLogin.telefone);
                        localStorage.setItem("cpf", retornoLogin.cpf);
                        localStorage.setItem("tipo", retornoLogin.tipo);

                        window.location.href = 'index.html';

                    }
                );

            } catch (error) {

                console.error("Erro ao cadastrar usuário:", error);
                throw error;
            }


        } catch (error) {

            alert('Erro ao cadastrar usuário. Veja o console para mais detalhes.');
            console.error(error);
        }


    });
}

if (btnLoginAdm !== null) {

    btnLoginAdm.addEventListener('click', function (evento) {

        evento.preventDefault();

        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();

        try {

            try {

                const response = logar(email, senha);

                Promise.resolve(response).then(
                    (value) => {
                        const retornoLogin = value.data;
                        localStorage.setItem("idAdm", retornoLogin.id);
                        localStorage.setItem("nomeAdm", retornoLogin.nome);
                        localStorage.setItem("emailAdm", retornoLogin.email);
                        localStorage.setItem("telefoneAdm", retornoLogin.telefone);
                        localStorage.setItem("cpfAdm", retornoLogin.cpf);
                        localStorage.setItem("tipoAdm", retornoLogin.tipo);

                        window.location.href = 'area_administrador.html';

                    }
                );

            } catch (error) {

                console.error("Erro ao cadastrar usuário:", error);
                throw error;
            }


        } catch (error) {

            alert('Erro ao cadastrar usuário. Veja o console para mais detalhes.');
            console.error(error);
        }

    });

}


async function logar(email, senha) {

    try {

        return http.get(`/Usuario/login?email=${email}&senha=${senha}`, {
            headers: { "Content-Type": "application/json", "accept": "*/*" },
        });

    } catch (error) {

        console.error("Erro ao localizar usuários:", error);
        throw error;
    }
}