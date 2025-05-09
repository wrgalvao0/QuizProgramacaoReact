import React from 'react'
import './PerguntasJavascript.css'
const Pergunta2Javascript = ({perguntasJavascript}) => {
  return (
     <div className='container-perguntas'>
            <p className='pergunta-tal'>Pergunta {perguntasJavascript + 1} de 3</p>
            <h2>Qual dos tipos de dado a seguir não existe em JavaScript?</h2>
            <span className='opcoes'>string</span>
            <span className='opcoes'>number</span>
            <span className='opcoes'>boolean</span>
            <span className='opcoes'>float</span>
        </div>
  )
}

export default Pergunta2Javascript
