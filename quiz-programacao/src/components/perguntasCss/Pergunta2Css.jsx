import React from 'react'
import './Perguntas.css'
const Pergunta2Css = ({perguntaCss}) => {
    return (
     <div className='container-perguntas'>
            <p className='pergunta-tal'>Pergunta {perguntaCss + 1} de 3</p>
            <h2>Para aumentar a fonte de um elemento utilizamos: </h2>
            <span className='opcoes'>Font</span>
            <span className='opcoes'>text-transform</span>
            <span className='opcoes'>font-size</span>
            <span className='opcoes'>hover</span>
    </div>
  )
}

export default Pergunta2Css