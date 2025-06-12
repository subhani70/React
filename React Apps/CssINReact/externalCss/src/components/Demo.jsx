import React from 'react'
import './demo.css'
import style from './demo.module.css'
const Demo = () => {
  return (
    <>
    <h1 id="demo">I'm from Demo</h1>

    <h1 id={style.demo}>I'm from ModuleCSS in Demo</h1></>
  )
}

export default Demo