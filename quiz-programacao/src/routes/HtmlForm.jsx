import React, { useState } from 'react'
import Pergunta1Html from '../components/perguntasHTML/Pergunta1Html'
import Pergunta2Html from '../components/perguntasHTML/Pergunta2Html'
import Pergunta3Html from '../components/perguntasHTML/Pergunta3Html'
import './HtmlForm.css'

const HtmlForm = () => {
  let [perguntaHtml, setPerguntaHtml] = useState(0)
  function selecionapergunta(){
    if(perguntaHtml === 0 ){
      setPerguntaHtml(1)
    }
    else if(perguntaHtml === 1){
      setPerguntaHtml(2)
    }
  }
  return (
    <div className='container-principal'>
      <div className='container-principal-perguntas'>
        <h1 className='titulo'>Quiz de Programação</h1>
        {perguntaHtml === 0 && <Pergunta1Html perguntaHtml={perguntaHtml}/>}
        {perguntaHtml === 1 && <Pergunta2Html perguntaHtml={perguntaHtml}/>}
        {perguntaHtml === 2 && <Pergunta3Html perguntaHtml={perguntaHtml}/>}
        <div className='container-botao'><button className='botao-pergunta ' onClick={selecionapergunta}>Enviar</button></div>
      </div>
    </div>
  )
}

export default HtmlForm