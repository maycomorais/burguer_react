import "./style.css";
import {toast} from "react-hot-toast"
import ModalDeleteItem from "../Modals/ModalDeleteItem";
import ModalEditItem from "../Modals/ModalEditItem";
import { useState } from "react";

const Card = ({burgers, getBurgers}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleShowDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal)
    };

    const handleShowEditModal = () => {
        setShowEditModal(!showEditModal);
    };
    return (
        <>
            <div className="card-container">
                <div>
                    <img src={burgers.foto}/>
                </div>
                <h2> {burgers.nome}</h2>
                <h3>Ingredientes: {burgers.ingredientes}</h3>
                <p>R$ {burgers.preco}</p>
                <p>Categoria: {burgers.categoria}</p>
                <div className="icons">
                    <button onClick={() => toast.error("Sessão em desenvolvimento")}>Adicionar</button>
                    <i onClick={handleShowEditModal} className="fa-solid fa-pen-to-square"></i>
                    <i onClick={handleShowDeleteModal} className="fa-solid fa-trash"></i>
                </div>
            </div>
            {showDeleteModal && <ModalDeleteItem closeModal={handleShowDeleteModal} burgers={burgers} getBurgers={getBurgers} />}
            {showEditModal && <ModalEditItem closeModal={handleShowEditModal} burgers={burgers} getBurgers={getBurgers} />}
        </>
    );
};

export default Card