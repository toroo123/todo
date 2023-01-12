import React, { useState } from 'react'
import Done from './screen/Done'
import Section from './Section'

const Header = ({data, checkIcon, deleteList}) => {  
  const [state, setState] = useState(false)
  const [doneData, setDoneData] = useState([])
  const [doneCount , setDoneCount] = useState(1)

  const addDone = (doneText,doneDate) => {
    alert('DONE -д нэмэгдлээ') 
    const newDone = {
      id: doneData.length + 1,
      title: doneText,
      currentDate: doneDate
    }
    setDoneCount(doneCount + 1)
    setDoneData([...doneData,newDone])
  }
  return (
    <>
      <div className='header'>
          <div className='header-button' >
              <button 
              onClick={() => {setState(true)}}
              className='header-text border-r-2 border-r-white'>TODO</button>
              <button  
              onClick={() =>{setState(false)}}
              className='header-text'>DONE</button>
          </div>
      </div>
      {state ? <Section data = {data} checkIcon = {checkIcon} deleteList = {deleteList} /> : <Done doneData={doneData}/> }
    </>
  )
}

export default Header
