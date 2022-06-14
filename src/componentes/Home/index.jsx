import "./style.css";
import Card from "../card";
import { useState } from "react";

const Home = ({burgers, getBurgers}) => {

    const [filterInput, setfilterInput] = useState("");

    
    return (
        
        <div className="home-container">
            <h1>Cardápio</h1>
            <input
            value={filterInput}
            onChange={(event) => {setfilterInput(event.target.value)}}
            placeholder="Buscar Item" />
            <div>
                {filterInput !== "" 
                ? burgers.filter(element => element.nome.toLowerCase().includes(filterInput.toLocaleLowerCase())).map((element) => {
                    return <Card
                    getBurgers={getBurgers}
                    key={element._id}
                    burgers={element} />;
                })
                :
                burgers.map((element) => {
                    return <Card
                    getBurgers={getBurgers}
                    key={element._id}
                    burgers={element} />;
                })
                }
            </div>
        </div>
    )
};

export default Home;
