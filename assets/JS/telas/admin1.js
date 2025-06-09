// // Cadastro do Produto

// const http = axios.create({
//   baseURL: "https://localhost:7279/api", 
//   headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*"},
// });

// var btnProduto = document.getElementById('btnCadastroProduto')

// btnProduto.addEventListener('click', function(event) {

//     event.preventDefault();

//     const nome = document.getElementById('nome').value;
//     const descricao = document.getElementById('descricao').value;
//     const preco = document.getElementById('preco').value;
//     const imagem = document.getElementById('imagem').value;
   

//     const jsonCadastro = {};
//     jsonCadastro.nome = nome.trim();
//     jsonCadastro.descricao = descricao.trim();
//     jsonCadastro.preco = preco.trim();
//     jsonCadastro.imagem = imagem.trim();
    

//     try {

//         try {

//             insert(jsonCadastro);

//             alert('Produto cadastrado com sucesso!');

//         } catch (error) {

//             console.error("Erro ao produto usuário:", error);
//             throw error;
//         }


//     } catch (error) {

//         alert('Erro ao cadastrar produto. Veja o console para mais detalhes.');
//         console.error(error);
//     }
// });

// async function insert(data) {

//     try {

//         return await http.post("/Produto", data, {
//             headers: {"Content-Type": "application/json", "accept": "*/*"},
//         });

//     } catch (error) {

//         console.error("Erro ao cadastrar produto:", error);
//         throw error;
//     }
// }