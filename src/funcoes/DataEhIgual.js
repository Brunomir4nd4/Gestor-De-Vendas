export function DataEhIgual(clientes, index) {
    let size = clientes.length;
    let proximoIndex = index + 1;
    if (proximoIndex < size -1) {
        if (clientes[index].data === clientes[proximoIndex].data) {
            return true;
        } else {
            return false;
        }
    }
    else if (size > 1){
        if (clientes[index].data === clientes[index-1].data) {
            return true;
        } else {
            return false;
        }
    }
    else {
    return false;
    }
}