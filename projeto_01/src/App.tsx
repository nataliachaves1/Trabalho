import React from 'react';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Servicos from './Componentes/Servicos';
import Equipe from './Componentes/Equipe';
function App() {
  return (
    <div className="App">
      <Header/>
      <Servicos/>
      <Equipe/>
      <Footer/>
    </div>
  );
}
export default App;
