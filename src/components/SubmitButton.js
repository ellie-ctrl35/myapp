import React from 'react'

const SubmitButton = ({onClick,height,text,backgroundColor,width}) => {
  return (
    <button type="submit" onClick={onClick} style={{height:height,backgroundColor:backgroundColor,width:width}}>
        {text}
    </button>
  )
}

export default SubmitButton