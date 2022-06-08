
import './App.css';
import Header from "./componentes/Header";
import Home from './componentes/Home';
import Footer from './componentes/footer';
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Toaster position="bottom-center" />
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
