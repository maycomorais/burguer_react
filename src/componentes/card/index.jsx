import "./style.css";
import {toast} from "react-hot-toast"

const Card = ({burgers}) => {
    return (
        <div className="card-container">
            <div>
                <img src={burgers.foto}/>
            </div>
            <h3>Ingredientes: {burgers.ingredientes}</h3>
            <p>R$ {burgers.preco}</p>
            <p>Categoria: {burgers.categoria}</p>
            <button onClick={() => toast.error("Sessão em desenvolvimento")}>Adicionar</button>
        </div>
    );
};

export default Card