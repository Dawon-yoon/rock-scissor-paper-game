import React from 'react'

const Box = ({ title, item, result }) => {
  return (
      <div className={`box ${result}`}>
          <h3 className='box-name'>{title}</h3>
          <img className='box-img' src={item?item.img:`./img/question-mark.png`} />
          <p className='box-result'>{result}</p>
    </div>
  )
}

export default Box