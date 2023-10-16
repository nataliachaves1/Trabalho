import React from "react";
import "./Footer.css"; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      
      © {new Date().getFullYear()} Sistema de Anotações. Todos os direitos reservados.
    </footer>
  );
};

export default Footer;
