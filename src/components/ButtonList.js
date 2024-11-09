import React from 'react'
import Button from "./Button.js"

const ButtonList = () => {

  const ButtonList = ["All", "Live", "Cricket", "News", "Music","Mixes", "Deep House", "Bass", "Electro-Pop"]

  return (
    <div className='flex'>
      {ButtonList.map((nameOfButton) => <Button key={nameOfButton} name={nameOfButton} />)}
    </div>
  )
}

export default ButtonList
