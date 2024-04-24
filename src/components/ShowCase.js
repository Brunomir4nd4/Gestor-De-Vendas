import '../css/showCase.css'
import React, { useState } from "react";

export default function ShowCase(props) {
    let CLIENTES = {
        id: 0,
        nome: "",
        totalLitros: 0.0,
        valorTotal: 0.0,
    }
    let CHAVE_CLIENTES = 'clientes';
    
    const novoCliente = () =>{
        const nome = document.querySelector('#nome-do-cliente').value;
        const quantidadeLitros = document.querySelector('#quantidade-de-litros').value;
        const valorCobrado = document.querySelector('#valor-cobrado').value;
        let clientes = [];
        CLIENTES.nome = nome;
        CLIENTES.totalLitros = quantidadeLitros;
        CLIENTES.valorTotal = valorCobrado;
        clientes.push(CLIENTES);

        if (localStorage.getItem(CHAVE_CLIENTES)) {
            clientes = JSON.parse(localStorage.getItem(CHAVE_CLIENTES));
            clientes.push(CLIENTES);
            localStorage.setItem(CHAVE_CLIENTES, JSON.stringify(clientes));
        } else {
            localStorage.setItem(CHAVE_CLIENTES, JSON.stringify(clientes));
        }
    }

    return (
        <main id="main-pagina-painel">
            <div id="container-do-formulario">
                <label>Nome do cliente</label>
                <input type="text" id='nome-do-cliente' placeholder="Digite aqui..."/>

                <label>Quantidade de litros</label>
                <input type="number" id='quantidade-de-litros' placeholder="Digite aqui..."/>

                <label>Valor cobrado</label>
                <input type="number" id='valor-cobrado' placeholder="Digite aqui..."/>

                <button onClick={novoCliente}>Enviar</button>
            </div>
        </main>
    )
}