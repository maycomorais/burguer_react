import "./style.css"
import ModalNewItem from '../Modals/ModalNewItem'
import { useState } from "react";

const NavBar = (getBurgers) => {
    const [showModalCreate, setShowModalCreate] = useState(false);

    const handleShowModalCreate = () => {
        setShowModalCreate(!showModalCreate);
    };
    return (
        <>
        <div className="center-navbar">
            <div className="navbar">
                <div>
                    <ul>
                        <a href="#" >Home</a>
                        <a href="#" onClick={handleShowModalCreate}>Adicionar Item</a>
                        <a href="https://github.com/maycomorais?tab=repositories" target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/maycon-morais-99121a23/" target="_blank">Linkedin</a>
                        <a href="https://blueedtech.com.br" target="_blank">Blue Edtech</a>
                        <a href="https://bobs.com.br/cardapio/sanduiches" target="_blank">Inspiração</a>
                    </ul>
                </div>
             </div>
             {showModalCreate && <ModalNewItem getBurgers={getBurgers} closeModal={handleShowModalCreate} />}
        </div>
        </>
        
    )
}
export default NavBar