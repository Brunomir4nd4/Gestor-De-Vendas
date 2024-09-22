export default function DataEhIgual(clientes, index) {
    let size = clientes.length;
    let indexAnterior = index - 1;
    if (index == 0) {
        return true;
    }
    else if (index < size -1) {
        if (clientes[indexAnterior].data === clientes[index].data) {
            return true;
        } else {
            return false;
        }
    }
    else if (index == size -1){
        if (index > 0) {
            if (clientes[index].data === clientes[indexAnterior].data) {
                return true;
            } else {
                return false;
            }

        } else {
            return true;
        }
    }
}