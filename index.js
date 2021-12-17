// function carregamentoPagina() {
//     alert("Mensagem apresentada no carregamento do sistema");
// }

function populaTabela() {
    if(localStorage.getItem("produtos")) {
        let produtos = JSON.parse(localStorage.getItem("produtos"))

        produtos.forEach((produto) => {
            $("#tblProdutos tbory").append(`<tr>
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.valores}</td>
                <td style-"width: 50px"><button type="button" class="btn btn-info">E</button></td>
                <td style-"width: 50px"><button type="button" class="btn btn-danger">D</button></td>

            </tr`)
        })

    }
    
}


$(() => {
    //Código executado no carregamento da página
    // alert("Mensagem apresentada no carregamento do sistema");
    
    $("#btnSalvar").click(() => {
        // console.log("FUNÇÃO CLICK FUNCIONOU")
        localStorage.setItem("key", "efetivo valor que será armazenado")

        // let produto =  { nome: "", quantidade: 0, valor: 0 }
        let produto = {}
        produto.nome = $("#nmProduto").val()
        produto.quantidade = $("#quantidade").val()
        produto.valor = $("#vlrProduto").val()

        let listaProdutos = []
        listaProdutos.push(produto)

        localStorage.setItem("produtos", JSON.stringify(listaProdutos))

        alert("Produto salvo com sucesso")

        $("#nmProduto").val("")
        $("#quantidade").val("")
        $("#vlrProduto").val("")

        populaTabela()
        
    })
})