import React from 'react';
import { jsPDF } from "jspdf";

const dados = [
    { nome: 'João', idade: 30, email: 'joao@email.com' },
    { nome: 'Maria', idade: 25, email: 'maria@email.com' },
    // Adicione mais dados conforme necessário
];

const criarArquivoPDF = () => {
    const doc = new jsPDF();

    let y = 10;  // Posição inicial do y
    const lineHeight = 10;  // Altura da linha

    // Adicionar cabeçalho
    doc.text('Nome', 10, y);
    doc.text('Idade', 50, y);
    doc.text('Email', 90, y);
    y += lineHeight;

    // Adicionar dados
    dados.forEach((linha) => {
        doc.text(linha.nome, 10, y);
        doc.text(linha.idade.toString(), 50, y);
        doc.text(linha.email, 90, y);
        y += lineHeight;
    });

    doc.save('dados.pdf');
};

const BotaoDownload = () => (
    <button onClick={criarArquivoPDF}>
        Baixar PDF
    </button>
);

export default BotaoDownload;
