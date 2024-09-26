export function ValidarVenda(venda) {
    let ehValida = true;

}

function ValidarNome(nome) {
    const regex = /[!@#$%^\*_+{}:\"<>?[\];',.\\]/;
    if (!regex.test(nome))
        throw "Nome" 
}