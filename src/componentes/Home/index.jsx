import "./style.css";
import burger from "../../mock/burger";
import { useState } from "react";
import Card from "../card";

const Home = () => {
    const [burgers, setBurger] = useState(burger)


    return (
        <div>
            <h1>Lanches</h1>
            <div>
                {burgers.map((element, index) => {
                    return <Card key={index} burgers={element} />;
                })}
            </div>
        </div>
    )
};

export default Home;
