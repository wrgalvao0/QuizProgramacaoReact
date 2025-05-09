import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import './Categoria.css'
const Categoria = () => {
  return (
    <div id='container-principal-categoria'>
        <h1>Quiz de Programação</h1>
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo</p>
        <div id='container-botoes'>
          <Link className='botao' to={'/htmlform'}>HTML</Link>
          <Link className='botao' to={'/cssform'}>CSS</Link>
          <Link className='botao' to={'/javascriptform'}>JAVASCRIPT</Link>
        </div>
        <img src="/category.svg" alt="" />
    </div>
  )
}

export default Categoria