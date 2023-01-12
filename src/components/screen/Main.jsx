import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import {IoMdArrowBack} from 'react-icons/io'
import Header from "../Header"
import Add from './Add'
  
const Main = () => {
  const [state , setState] = useState('')
  const [data, setData] = useState([])
  const [count , setCount] = useState(1)
  
  const addList = (text,date) => {
    alert('TODO -д нэмэгдлээ') 
    const newItem = {
      id: data.length + 1,
      title: text,
      currentDate: date,
      complete: false
    }
    setCount(count + 1)
    setData([...data,newItem])
  }

  const checkIcon = (id) =>{
    setData(
      data.map(d=>{
        if(d.id === id) {
          return {
            ...d,
            complete: !d.complete
          }
        }
        return d
      })
    )
  }

  const deleteList = (text) =>{
    const Todo = data.filter((list) => {
        return list !== text 
    })
    setData(Todo)
  }
  
  return (
    <div className='container'>
        <div>
          <h1 className='p-5 text-white text-[40px]'>ToDo App</h1>
            <div>
              {state ? <Header data={data} checkIcon={checkIcon} deleteList={deleteList}/> : <Add addList={addList}/>}
            </div>
            <div className='icons'>
              {state ? <button 
                onClick={() => {setState(!state)}}><AiFillPlusCircle className='icon'/>
              </button>: <button
                onClick={() => {setState(!state)}}><IoMdArrowBack className='icon'/>
              </button>}
              
            </div>
        </div>
    </div>
  )
}

export default Main
