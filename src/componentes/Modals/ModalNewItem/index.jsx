import "./style.css";
import { useState } from "react";
import {toast} from "react-hot-toast"
import api from "../../../api";

const ModalNewItem = ({closeModal, getBurgers}) => {
    const [nome, setNome] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [foto, setFoto] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("lanche");

    const handleCreateItem = async () => {
        const newBurger = {
            nome,
            ingredientes,
            foto,
            preco,
            categoria,
        }
        console.log(newBurger)
        // const response = await fetch("http://localhost:3008/burguers/criar", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "aplication/json"
        //     },
        //     mode: "cors",
        //     body: JSON.stringify(newBurger)
        // });
        // console.log(response)

        const response = await api.post("/burguers/criar", newBurger)

        console.log(response)

        if(response.status !== 201){
            toast.error('Item não adicionado')
        }

        setNome("");
        setIngredientes("");
        setFoto("");
        setPreco("");
        setCategoria("");
        closeModal();
        getBurgers();
        toast.success('Item adicionado com sucesso');
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
                <button onClick={handleCreateItem}><i className="fa-solid fa-square-plus"></i>Adicionar</button>
            </div>
        </div>
    )
}

export default ModalNewItem