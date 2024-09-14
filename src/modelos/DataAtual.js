
const DATA_ATUAL = new Date();
const data = `${(DATA_ATUAL.getDate()).toString().padStart(2, '0')}/${(DATA_ATUAL.getMonth() + 1).toString().padStart(2, '0')}/${DATA_ATUAL.getFullYear() - 2000}`;

export function DataAtual() {
  return data;
}
