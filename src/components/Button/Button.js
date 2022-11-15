import React from 'react'
import "./Button.css"
import {motion} from "framer-motion"

const Button = ({onClick}) => {
  return (
    <div><motion.button onClick={onClick} whileTap={{width:"140px"}} className = "button-63">Nhấp chuột vào </motion.button></div>
  )
}

export default Button