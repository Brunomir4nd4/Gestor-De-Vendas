export function formatarData(data) {
    // Divide a string da data em dia, mês e ano
    const partes = data.split('/');
    
    // Ajusta o ano para o formato YYYY
    const ano = '20' + partes[2];
    
    // Monta a data no formato 'yyyy-mm-dd'
    const dataFormatada = `${ano}-${partes[1].padStart(2, '0')}-${partes[0].padStart(2, '0')}`;
    
    return dataFormatada;
}