import { jsPDF } from "jspdf";
import { formatarData } from "./Formatadores.js";

export default function GerarFaturaDoCliente(historicoDoCliente, periodoDeCobrancaInicial, periodoDeCobrancaFinal) {
    const doc = new jsPDF();
    const NOME_DO_CLIENTE = historicoDoCliente[0].nomeDoCliente;
    const VALOR_TOTAL_DA_FATURA = ObterValorDasVendasDoPeriodoSolicitado(historicoDoCliente, periodoDeCobrancaInicial, periodoDeCobrancaFinal);

    let y = 20; // Posição inicial do y
    const lineHeight = 10; // Altura da linha

    // Definir largura das colunas e posição inicial
    const col1 = 40;
    const col2 = 90;
    const col3 = 140;

    // Adicionar cabeçalhos da tabela
    doc.text('Fatura do Cliente', 85, y);
    y += 20;

    doc.text("Coletas", 40, y);
    doc.text('Total a pagar: R$ ' + VALOR_TOTAL_DA_FATURA, 120, y);
    y += 10;

    doc.text("----------------------------------------------------------------------------------------", 30, y)
    y += 10;

    // Adicionar cabeçalhos da tabela
    doc.text('Litragem', col1, y);
    doc.text('Valor', col2, y);
    doc.text('Data', col3, y);
    y += lineHeight;
    	
    DefinirListagemDasVendasDoPeriodoSolicitado(doc, y, historicoDoCliente, periodoDeCobrancaInicial, periodoDeCobrancaFinal);

    doc.save(`Fatura-De-${NOME_DO_CLIENTE}.pdf`);
}

const ObterValorDasVendasDoPeriodoSolicitado = function(historicoDoCliente, periodoDeCobrancaInicial, periodoDeCobrancaFinal) {
    let totalFatura = 0.0;

    historicoDoCliente.map((venda) => {
        const data = formatarData(venda.data);
        const dentroDoPeriodo = periodoDeCobrancaFinal ?  data >= periodoDeCobrancaInicial && data <= periodoDeCobrancaFinal
                                                        : data >= periodoDeCobrancaInicial;
        if (dentroDoPeriodo) 
            totalFatura += venda.valor;
    });

    return totalFatura.toFixed(2);
}

const DefinirListagemDasVendasDoPeriodoSolicitado = function(doc, y,  historicoDoCliente, periodoDeCobrancaInicial, periodoDeCobrancaFinal) {
    const col1 = 40;
    const col2 = 90;
    const col3 = 140;

    historicoDoCliente.forEach((venda) => {
        const data = formatarData(venda.data);
        const dentroDoPeriodo = periodoDeCobrancaFinal ?  data >= periodoDeCobrancaInicial && data <= periodoDeCobrancaFinal
                                                        : data >= periodoDeCobrancaInicial;
        if (dentroDoPeriodo) {
            doc.text(venda.litragem.toString(), col1, y);
            doc.text("R$ " + venda.valor.toFixed(2).toString(), col2, y);
            doc.text(venda.data.toString(), col3, y);
            y += 10;
        }
    });
}