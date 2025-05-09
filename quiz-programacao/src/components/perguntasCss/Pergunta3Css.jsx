import React from 'react'
import './Perguntas.css'
const Pergunta3Css = ({perguntaCss}) => {
  return (
     <div className='container-perguntas'>
            <p className='pergunta-tal'>Pergunta {perguntaCss + 1} de 3</p>
            <h2>A posição que deixa um elemento fixo é a:</h2>
            <span className='opcoes'>static</span>
            <span className='opcoes'>absolute</span>
            <span className='opcoes'>fixed</span>
            <span className='opcoes'>relative</span>
    </div>
  )
}
export default Pergunta3Css