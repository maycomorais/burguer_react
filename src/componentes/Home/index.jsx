import "./style.css";

import { useEffect, useState } from "react";
import Card from "../card";

const Home = () => {
    const [burgers, setBurger] = useState([])

    const getBurgers = async () => {
        const response = await fetch("http://localhost:3008/burguers/todos");
        const burgerList = await response.json()

        setBurger(burgerList)
    };

    useEffect(() => {
        getBurgers();
    }, []);
    return (
        <div className="home-container">
            <h1>Lanches</h1>
            <div>
                {burgers.map((element) => {
                    return <Card key={element._id} burgers={element} />;
                })}
            </div>
        </div>
    )
};

export default Home;
