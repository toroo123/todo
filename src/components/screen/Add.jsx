import React, {useState} from 'react'

function Add({addList}){
  const [title, setTitle] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  return (
    
    <>
      <div className='header'>
        <div className='header-button'>
          <div className='header-text'>ADD TODO</div>
        </div>
        <div className='background'>
          <div className='font text-[16px] flex-col'>
            <input
                className='input' 
                type="text" 
                name="title" 
                placeholder='TODO TITLE'
                title={title}
                onChange={(e)=>{ setTitle(e.target.value)}}
            />
            <input 
                className='input' 
                type="date" 
                name="date" 
                date = {selectedDate}
                onChange={(e)=>{ setSelectedDate(e.target.value)}}
            />
          </div>
          <div className='pt-5'>
            <button className='add-button'
            onClick={() => addList(title, selectedDate)}>ADD TODO</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Add
