
import Pergunta1Css from '../components/perguntasCss/Pergunta1Css'
import { useState } from 'react'
import Pergunta2Css from '../components/perguntasCss/Pergunta2Css'
import Pergunta3Css from '../components/perguntasCss/Pergunta3Css'
const CssForm = () => {
  let [perguntaCss, setPerguntaCss] = useState(0)
  function selecionapergunta(){
    if(perguntaCss === 0 ){
      setPerguntaCss(1)
    }
    else if(perguntaCss === 1){
      setPerguntaCss(2)
    }
  }
  return (
    <div className='container-principal'>
      <div className='container-principal-perguntas'>
        <h1 className='titulo'>Quiz de Programação</h1>
        {perguntaCss === 0 && <Pergunta1Css perguntaCss={perguntaCss}/> }
        {perguntaCss === 1 && <Pergunta2Css perguntaCss={perguntaCss}/>}
        {perguntaCss === 2 && <Pergunta3Css perguntaCss={perguntaCss}/>}
        <div className='container-botao'><button className='botao-pergunta' onClick={selecionapergunta}>Enviar</button></div>
      </div>
    </div>
  )
}

export default CssForm