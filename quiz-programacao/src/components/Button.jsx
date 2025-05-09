import React from 'react'
import './Button.css'
const Button = ({classe, children}) => {
  return (
    <button className={classe}>{children}</button>
  )
}

export default Button