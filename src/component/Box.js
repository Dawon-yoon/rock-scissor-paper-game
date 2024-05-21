const Box = ({player,item,result}) => {
  return (
    <div className={`box ${result}`}>
      <h1>{player}</h1>
      <img src={item?item.img:`${process.env.PUBLIC_URL}/img/question-mark.png`} />
      <p>{result}</p>
    </div>
  )
}

export default Box