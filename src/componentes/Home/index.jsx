import "./style.css";


import Card from "../card";

const Home = ({burgers}) => {
    
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
