import React from 'react'
import './PerguntasJavascript.css'
const Pergunta1Javascript = ({perguntasJavascript}) => {
     return (
     <div className='container-perguntas'>
            <p className='pergunta-tal'>Pergunta {perguntasJavascript + 1} de 3</p>
            <h2>Com qual instrução declaramos uma constante em JavaScript?</h2>
            <span className='opcoes'>const</span>
            <span className='opcoes'>let</span>
            <span className='opcoes'>var</span>
            <span className='opcoes'>define</span>
        </div>
  )
}

export default Pergunta1Javascript