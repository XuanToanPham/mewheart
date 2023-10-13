import React from 'react'
import "./Button.css"
import {motion} from "framer-motion"

const Button = ({onClick}) => {
  return (
    <div><motion.button onClick={onClick} whileTap={{width:"250px"}} className = "button-63">Tui ở đây nè bấm vào</motion.button></div>
  )
}

export default Button