
import './App.css';
import Header from "./componentes/Header";
import Home from './componentes/Home';
import Footer from './componentes/footer';
import NavBar from './componentes/navbar'
import {Toaster} from "react-hot-toast";
import { useEffect, useState } from "react";

const App = () => {
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
    <div>
      <Toaster position="bottom-center" />
        <Header getBurgers={getBurgers}/>
        <NavBar />
        <Home burgers={burgers}/>
        <Footer />
    </div>
  );
}

export default App;
