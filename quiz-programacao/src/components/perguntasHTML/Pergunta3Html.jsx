import React from 'react'
import './Pergunta1Html.css'
const Pergunta3Html = ({perguntaHtml}) => {
    return (
        <div className='container-perguntas'>
            <span className='pergunta-tal'>Pergunta {perguntaHtml +  1} de 3</span>
            <h2>Qual atributo adiciona um link para a tag a? </h2>
            <span className='opcoes'>alt</span>
            <span className='opcoes'>href</span>
            <span className='opcoes'>src</span>
            <span className='opcoes'>link</span>
        </div>
    )
}

export default Pergunta3Html