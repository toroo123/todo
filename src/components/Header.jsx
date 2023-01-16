import React, { useState } from 'react'
import History from './screen/HIstory'
import Section from './Section'

const Header = ({data, checkIcon, deleteList}) => {  
  const [state, setState] = useState(true)
  return (
    <>
      <div className='header'>
          <div className='header-button' >
              <button 
              onClick={() => {setState(true)}}
              className='header-text border-r-2 border-r-white'>ToDo</button>
              <button  
              onClick={() =>{setState(false)}}
              className='header-text'>History</button>
          </div>
      </div>
      {state ? <Section data = {data} checkIcon = {checkIcon} deleteList = {deleteList} /> : <History data={data}/> }
    </>
  )
}

export default Header
