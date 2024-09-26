import DataAtual from './DataAtual'
import { VENDA } from '../Modelos/Venda';

export function CriarVenda(nome, listragem, valor) {
    const CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS = 'historicoDeVendas';
    let vendas = [];

    VENDA.nomeDoCliente = nome;
    VENDA.litragem = listragem;
    VENDA.valor = valor * listragem;
    VENDA.data = DataAtual();
    
    if (localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS)) {
        vendas = JSON.parse(localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS));
        VENDA.id = vendas[vendas.length-1].id + 1;

        vendas.unshift(VENDA);

        localStorage.setItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS, JSON.stringify(vendas));
    }
    else {
        vendas.push(VENDA);

        localStorage.setItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS, JSON.stringify(vendas));
    }
}
