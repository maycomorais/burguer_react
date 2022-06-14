import "./style.css"
import { toast } from "react-hot-toast";
import api from "../../../api";

const ModalDeleteItem = ({closeModal, burgers, getBurgers}) => {
    const handleDeleteItem = async () => {
        const response = await api.delete(`/burguers/delete/${burgers._id}`);

        if (response.status !== 200) {
            return toast.error("Erro na exclusão do Item");
        }
      
        closeModal();
        getBurgers();
        return toast.success("Item excluido com sucesso");
    };

     
    return (
        <div className="modal-overlay">
            <div className="modalDelete-container">
                <div className="header">
                    <h2>Deseja excluir o item?</h2>
                    <i class="fa-solid fa-circle-xmark" onClick={closeModal} ></i>
                </div>
                <div className="actions">
                    <button className="nope" onClick={closeModal}>Não</button>
                    <button className="yep" onClick={handleDeleteItem} >Sim</button>
                </div>
            </div>
        </div>
    )
};

export default ModalDeleteItem;