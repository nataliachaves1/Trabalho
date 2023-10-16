import React, { useEffect, useState } from 'react'

interface Membro {
    id: number;
    nome: string;
    biografia: string;
    url_imagem: string;
    alt_imagem: string;
}

function Equipe() {
    const [equipe, SetEquipe] = useState<Membro[]>([]);
    useEffect(() => {
        fetch("http://localhost:4000/equipe/")
            .then((response) => response.json())
            .then((data) => {
                SetEquipe(data);

            });
    }, []);
    return (
        <section>
            <h2>Equipe</h2>
            {equipe.map((membro) => {
                return (
                    <div>
                        <h3>{membro.nome}</h3>
                        <img
                            width={200}
                            height={200}
                            src={membro.url_imagem}
                            alt={membro.alt_imagem}
                            title={membro.alt_imagem}
                        />
                        <p>{membro.biografia}</p>
                    </div>
                )
            })}
        </section>
    )
 }
    export default Equipe;