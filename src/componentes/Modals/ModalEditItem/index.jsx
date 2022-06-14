import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../../api";

const ModalEditItem = ({closeModal, burgers, getBurgers}) => {
    const [nome, setNome] = useState(burgers.nome);
    const [ingredientes, setIngredientes] = useState(burgers.ingredientes);
    const [foto, setFoto] = useState(burgers.foto);
    const [preco, setPreco] = useState(burgers.preco);
    const [categoria, setCategoria] = useState(burgers.categoria);

    const handleEditItem = async () => {
        const editBurger = {
            nome,
            ingredientes,
            foto,
            preco,
            categoria,
        }

        const response = await api.put(`/burguers/refresh/${burgers._id}`, editBurger)

        if(response.status !== 200){
            return toast.error('Atualização não funfou')
        }

        closeModal();
        getBurgers();
        return toast.success('Item atualizado com sucesso');
    }
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div>
                    <h2>ADICIONAR AO CARDÁPIO</h2>
                    <button onClick={closeModal}><i className="fa-solid fa-circle-xmark"></i></button>
                </div>
                <input
                placeholder="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                name="nome"/>
                <input
                placeholder="ingredientes"
                value={ingredientes}
                onChange={(event) => setIngredientes(event.target.value)}
                name="ingredientes"/>
                <input 
                placeholder="FOTO"
                value={foto}
                onChange={(event) => setFoto(event.target.value)}
                name="foto"/>
                <input
                placeholder="Preço"
                value={preco}
                onChange={(event) => setPreco(event.target.value)}
                name="preco"
                type="number"/>
                <label className="input-categoria"
                name="categoria">Categoria:</label>
                <select name="categoria"
                id="inputCategoria" 
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}>
                    <option value="lanche">Lanche</option>
                    <option value="bebida">Bebida</option>
                    <option value="porção">Porção</option>
                    <option value="sobremesa">Sobremesa</option>
                </select>
                <button onClick={handleEditItem}><i className="fa-solid fa-square-plus"></i>atualizar</button>
            </div>
        </div>
    )
}

export default ModalEditItem