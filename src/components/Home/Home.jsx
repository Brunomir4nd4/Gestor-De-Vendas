import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import { CriarVenda } from '../../Servicos/ServicosVenda';
import {useForm} from 'react-hook-form';

export default function Home() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const _aoClicarNoBotaoVender = (venda) => {
        const nome = venda.nomeDoCliente;
        const litragem = parseFloat(venda.litragem);
        const valor = parseFloat(venda.valor);

        CriarVenda(nome, litragem, valor);
    }

    return (
        <>
        <NavBar />
        <main id="home">
            <form onSubmit={handleSubmit(_aoClicarNoBotaoVender)}>
                <label>Cliente</label>
                <div className="input-group flex-nowrap">
                    <input 
                        type="text" 
                        className="form-control" 
                        {...register("nomeDoCliente", { 
                            required: "Nome do cliente é obrigatório.", 
                            pattern: {
                                value: /^[a-zA-ZÀ-ú0-9\s\-\/&()]*$/,
                                message: "Nome do cliente inválido."
                            }
                        })} 
                        placeholder="Nome..."  />

                    {errors.nomeDoCliente && <span class="mensagem-de-validacao">{errors.nomeDoCliente.message}</span>}
                </div>

                <label>Litragem</label>
                <div className="input-group flex-nowrap">
                    <input 
                        type="number" 
                        step="any" 
                        className="form-control" 
                        {...register("litragem", { 
                            required: "Listragem é obrigatório.", 
                            min: { 
                                value: 0, 
                                message: "Listragem deve ser um número positivo." 
                            } 
                        })} 
                        placeholder="Litragem..."  />

                    {errors.litragem && <span class="mensagem-de-validacao">{errors.litragem.message}</span>}
                </div>

                <label>Valor Cobrado</label>
                <div className="input-group flex-nowrap">
                    <input 
                        type="number" 
                        step="any" 
                        className="form-control" 
                        {...register("valor", { 
                            required: "Valor cobrado é obrigatório.", 
                            min: { 
                                value: 0, 
                                message: "Valor cobrado deve ser um número positivo." 
                            } 
                        })} 
                        placeholder="Valor..." />

                    {errors.valor && <span class="mensagem-de-validacao">{errors.valor.message}</span>}
                </div>

                <button type="submit" id="btn-Vender" className="btn btn-primary">Vender</button>
            </form>
        </main>
        <Footer />
        </>
    )
}