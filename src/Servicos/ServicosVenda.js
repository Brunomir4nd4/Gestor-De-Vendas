import DataAtual from './DataAtual'
import { VENDA } from '../modelos/Venda';
const CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS = 'historicoDeVendas';

export function CriarVenda(nome, listragem, valor) {
    let vendas = [];

    VENDA.nomeDoCliente = nome;
    VENDA.litragem = listragem;
    VENDA.valor = valor * listragem;
    VENDA.data = DataAtual();
    
    if (localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS)) {
        vendas = JSON.parse(localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS));
        VENDA.id = gerarId(vendas);

        vendas.unshift(VENDA);

        localStorage.setItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS, JSON.stringify(vendas));
    }
    else {
        vendas.push(VENDA);

        localStorage.setItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS, JSON.stringify(vendas));
    }
}

export function aoClicarEditar(venda) {
    const vendasDoBanco = localStorage.getItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS);
    
    vendasDoBanco.forEach(vendaDoBanco => {
        if (vendaDoBanco.id === venda.id) {
            vendaDoBanco = venda;
        }
    });

    localStorage.setItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS, JSON.stringify(vendasDoBanco))
}

function gerarId(vendas) {
    // Verifica se existe um ID armazenado no localStorage
    let currentId = localStorage.getItem("currentId");
  
    // Se não houver um ID armazenado, inicialize com 1
    if (!currentId) {
        //Deixar aqui até o tio rodar a primaira vez
        vendas.forEach(venda => {
            venda.id = 0
        });
        localStorage.setItem(CHAVE_DE_ACESSO_DO_HISTORICO_DE_VENDAS, JSON.stringify(vendas))
        currentId = 1;
    } else {
        // Caso contrário, converte o ID armazenado em número e incrementa
        currentId = parseInt(currentId) + 1;
    }
  
    // Armazena o novo ID no localStorage
    localStorage.setItem("currentId", currentId);
  
    // Retorna o novo ID
    return currentId;
  }