import React from 'react'
import './Perguntas.css'
const Pergunta1Css = ({perguntaCss}) => {
  return (
     <div className='container-perguntas'>
            <p className='pergunta-tal'>Pergunta {perguntaCss + 1} de 3</p>
            <h2>Qual regra altera a cor de um elemento ?</h2>
            <span className='opcoes'>Color</span>
            <span className='opcoes'>Background-color</span>
            <span className='opcoes'>Font-size</span>
            <span className='opcoes'>transition</span>
        </div>
  )
}

export default Pergunta1Css