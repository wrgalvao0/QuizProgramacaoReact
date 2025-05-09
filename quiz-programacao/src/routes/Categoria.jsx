import React from 'react'
import Button from '../components/Button'
import './Categoria.css'
const Categoria = ({selecionaCategoria}) => {
  return (
    <div id='container-principal-categoria'>
        <h1>Quiz de Programação</h1>
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo</p>
        <div id='container-botoes'>
          <Button classe='botao' valor='HTML' acao={() => selecionaCategoria('HTML')} />
          <Button classe='botao' valor='CSS' acao={() => selecionaCategoria('CSS')} />
          <Button classe='botao' valor='JAVASCRIPT' acao={()=> selecionaCategoria('JAVASCRIPT')}/>
        </div>
        <img src="/category.svg" alt="" />
    </div>
  )
}

export default Categoria