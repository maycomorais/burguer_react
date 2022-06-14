import "./style.css";
import logo from "../../assets/icons/Burger-Prince-logo.png"


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="info">
        <p>Criado com ❤️ por Maycon Morais</p>
      </div>
      <div className="logoName">
        <p>BURGER PRINCE</p>
        <img src={logo} />
      </div>
      <div className="social">
        <a href="https://wa.me/5522992874147" target="_blank"><i className="fa-brands fa-whatsapp-square"></i></a>
        <a href="https://www.linkedin.com/in/maycon-morais-99121a23/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/maycomorais?tab=repositories" target="_blank"><i className="fa-brands fa-github-square"></i></a>
      </div>
    </div>
  );
};

export default Footer;