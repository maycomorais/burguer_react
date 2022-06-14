import "./style.css"
import logo from "../../assets/icons/Burger-Prince-logo.png"
import ModalNewItem from '../Modals/ModalNewItem'
import { useState } from "react";

const Header = ({getBurgers}) => {
    const [showModalCreate, setShowModalCreate] = useState(false);

    const handleShowModalCreate = () => {
        setShowModalCreate(!showModalCreate);
    };

    return(
        <>
        <div className="header-container">
            <div>
                <img src={logo} />
                <h2>BURGUER PRINCE</h2>
            </div>
            <div className="header-container2">
            <div>
               <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div>
                <i onClick={handleShowModalCreate} class="fa-solid fa-square-plus"></i>
            </div>
            </div>
        </div>
        {showModalCreate && <ModalNewItem getBurgers={getBurgers} closeModal={handleShowModalCreate} />}
        </>
    );
};

export default Header