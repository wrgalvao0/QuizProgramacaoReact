import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
     <div id='container-principal'>
      <h1>Quiz de Programação</h1>
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para começar</p>
      <Link to={'/categoria'} className='botao'>Categoria</Link>
      <img src="./welldone.svg" alt="imagem-home" />
    </div>
  )
}

export default Home