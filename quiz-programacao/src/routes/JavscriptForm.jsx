import React from 'react'
import { useState } from 'react'
import Pergunta1Javascript from '../components/perguntasJavascript/Pergunta1Javascript'
import Pergunta2Javascript from '../components/perguntasJavascript/Pergunta2Javascript'
import Pergunta3Javascript from '../components/perguntasJavascript/Pergunta3Javascript'
const JavscriptForm = () => {
  let [perguntaJavascript, setPerguntaJavascript] = useState(0)
  function selecionapergunta(){
    if(perguntaJavascript === 0 ){
      setPerguntaJavascript(1)
    }
    else if(perguntaJavascript === 1){
      setPerguntaJavascript(2)
    }
  }
  return (
    <div className='container-principal'>
      <div className='container-principal-perguntas'>
        <h1 className='titulo'>Quiz de Programação</h1>
        {perguntaJavascript === 0 && <Pergunta1Javascript perguntasJavascript={perguntaJavascript}/> }
        {perguntaJavascript === 1 && <Pergunta2Javascript perguntasJavascript={perguntaJavascript}/>}
        {perguntaJavascript === 2 && <Pergunta3Javascript perguntasJavascript={perguntaJavascript}/>}
        <div className='container-botao'><button className='botao-pergunta' onClick={selecionapergunta}>Enviar</button></div>
      </div>
    </div>
  )
}

export default JavscriptForm