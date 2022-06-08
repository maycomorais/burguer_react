import "./style.css"
import logo from "../../assets/icons/Burger-Prince-logo.png"

const Header = () => {
    return(
        <div className="header-container">
            <div>
                <img src={logo} />
                <h2>BURGUER PRINCE</h2>
            </div>
            <img/>
        </div>
    );
};

export default Header