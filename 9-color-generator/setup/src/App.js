import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      console.log(colors)
      setList(colors)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <>
      <section className='container'>
        <h1>enter a color</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='color'
            value={color}
            placeholder='#f15025'
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
          <button type='submit'>get colors</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((item, index) => {
          return <SingleColor key={index} {...item} index={index} />
        })}
      </section>
    </>
  )
}

export default App
