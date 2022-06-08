import "./style.css";

const Card = ({burgers}) => {
    return (
        <div className="card-container">
            <div>
                <p>R$ {burgers.preco}</p>
                <img src={burgers.foto}/>
            </div>
            <h3>Ingredientes: {burgers.ingredientes}</h3>
            <p>Categoria: {burgers.categoria}</p>
            <button>Adicionar</button>
        </div>
    );
};

export default Card