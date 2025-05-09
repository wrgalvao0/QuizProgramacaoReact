import React from 'react'
import './PerguntasJavascript.css'
const Pergunta3Javascript = ({perguntasJavascript}) => {
     return (
     <div className='container-perguntas'>
            <p className='pergunta-tal'>Pergunta {perguntasJavascript + 1} de 3</p>
            <h2>Qual dos métodos a seguir seleciona um elemento?</h2>
            <span className='opcoes'>querySelector</span>
            <span className='opcoes'>parseInt</span>
            <span className='opcoes'>sort</span>
            <span className='opcoes'>reduce</span>
        </div>
  )
}

export default Pergunta3Javascript