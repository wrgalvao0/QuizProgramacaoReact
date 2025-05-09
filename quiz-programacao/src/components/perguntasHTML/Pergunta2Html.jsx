import React from 'react'
import './Pergunta1Html.css'
const Pergunta2Html = ({ perguntaHtml }) => {
    return (
        <div className='container-perguntas'>
            <span className='pergunta-tal'>Pergunta {perguntaHtml + 1} de 3</span>
            <h2>A tag semantica indicada para rodapés é: </h2>
            <span className='opcoes'>div</span>
            <span className='opcoes'>main</span>
            <span className='opcoes'>section</span>
            <span className='opcoes'>footer</span>
        </div>
    )
}

export default Pergunta2Html