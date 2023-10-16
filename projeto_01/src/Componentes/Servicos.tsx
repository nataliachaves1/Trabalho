import React, { useEffect, useState } from 'react'
interface Servico{
    id:number;
    nome:string;
    preco:number;
}
function Servicos(){
    const[servicos, setServicos] = useState<Servico[]>([]);
    useEffect (() =>{
        fetch("http://localhost:4000/servicos/")
        .then((response) => response.json())
        .then((data) => {
            setServicos(data);
        });
    },[]);
    return(
        <section>
        <h3>Lista  de servicos oferecidos: </h3>
        <ul>
            {servicos.map((servico) => {
                return(
                    <li key ={servico.id}>
                        {""}
                        {servico.nome} valor:{servico.preco}
                    </li>
                );
            })}
        </ul>
       </section> 
    );
 }

export default Servicos;