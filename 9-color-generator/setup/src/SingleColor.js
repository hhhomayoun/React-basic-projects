import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)
  const rgbColor = rgb.join(',')
  const hexColor = rgbToHex(...rgb)
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
      return () => {
        clearTimeout(timeOut)
      }
    }, 3000)
  }, [alert])
  console.log(rgbColor)
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgbColor})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexColor)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      {alert && <p className='alert'>coppied to clipboard</p>}
    </article>
  )
}

export default SingleColor
