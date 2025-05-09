import React from 'react'
import './Pergunta1Html.css'
const Pergunta1Html = ({perguntaHtml}) => {
    return (
        <div className='container-perguntas'>
            <p className='pergunta-tal'>Pergunta {perguntaHtml + 1} de 3</p>
            <h2>Qual tag cria um parágrafo?</h2>
            <span className='opcoes'>{'<p>'}</span>
            <span className='opcoes'>{'<h1>'}</span>
            <span className='opcoes'>{'<text>'}</span>
            <span className='opcoes'>{'<ul>'}</span>
        </div>
    )
}

export default Pergunta1Html

