// Preços por unidade de cada produto para tema personalizado
const precos = {
    prato: {
        dourado: 20,
        branco: 15,
        azul: 18,
        vermelho: 17,
    },
    taca: {
        cristal: 30,
        vidro: 25,
        azul: 28,
        verde: 26,
    },
    talher: {
        preto: 10,
        prata: 12,
        dourado: 11,
        azul: 9,
    },
    decoracao: {
        simples: {
            cor: {
                branca: 30,
                azul: 35,
                rosa: 32,
                verde: 33,
            },
        },
        detalhada: {
            cor: {
                branca: 50,
                azul: 55,
                rosa: 52,
                verde: 53,
            },
        },
    },
};

// Função para calcular o preço do tema personalizado
function calcularPreco() {
    const dias = document.getElementById("dias").value;
    const prato = parseFloat(document.getElementById("pratos").value);
    const talher = parseFloat(document.getElementById("talheres").value);
    const decoracao = parseFloat(document.getElementById("decoracao").value);
    const tacas = parseFloat(document.getElementById("tacas").value);

    // Validação do número de dias
    if (dias < 1 || dias > 4) {
        alert("Escolha um período de aluguel entre 1 e 4 dias.");
        return;
    }

    // Cálculo do preço total
    const precoTotal = (prato + talher + decoracao + tacas) * dias;

    // Atualiza o preço na página
    document.getElementById("precoTotal").innerText = `R$ ${precoTotal.toFixed(2)}`;
}

// Função para continuar a compra no tema personalizado e armazenar os dados no localStorage
function continuarCompra() {
    const dias = document.getElementById("dias").value;
    const prato = parseFloat(document.getElementById("pratos").value);
    const talher = parseFloat(document.getElementById("talheres").value);
    const decoracao = parseFloat(document.getElementById("decoracao").value);
    const tacas = parseFloat(document.getElementById("tacas").value);

    // Cálculo do preço total
    const precoTotal = (prato + talher + decoracao + tacas) * dias;

    // Armazenar o valor total e o número de dias em localStorage
    localStorage.setItem("precoTotal", precoTotal);
    localStorage.setItem("diasAluguel", dias);

    // Redirecionar para a página de resumo do aluguel (final.html)
    window.location.href = "final.html";
}

// Função para redirecionar e salvar tema e preço no localStorage para temas predefinidos
function redirecionarParaResumo(tema, preco) {
    // Salva o tema e o preço no localStorage
    localStorage.setItem("temaEscolhido", tema);
    localStorage.setItem("precoTotal", preco);

    // Redireciona para a página final2.html
    window.location.href = "final2.html";
}

// Função para finalizar o pedido (ambas as páginas)
function finalizarPedido() {
    alert("Seu pedido será preparado para retirada na loja!");
}

// Lógica para a página final.html (tema personalizado)
document.addEventListener("DOMContentLoaded", function () {
    const precoTotal = localStorage.getItem("precoTotal");
    const diasAluguel = localStorage.getItem("diasAluguel");

    // Exibe os dados na página final.html
    if (precoTotal && diasAluguel) {
        document.getElementById("precoTotal").innerText = `R$ ${parseFloat(precoTotal).toFixed(2)}`;
        document.getElementById("diasAluguel").innerText = diasAluguel;
    } else {
        // Exibe uma mensagem de erro se os dados não forem encontrados
        document.getElementById("precoTotal").innerText = "0";
        document.getElementById("diasAluguel").innerText = "Erro: dias não selecionados.";
    }
});








