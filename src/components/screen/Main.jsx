import React, { useEffect ,useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import {IoMdArrowBack} from 'react-icons/io'
import Header from "../Header";
import Add from './Add';
  
const Main = () => {
  const [state , setState] = useState('true')
  const [data, setData] = useState(() => {
    const list = JSON.parse(localStorage.getItem('localTasks'))
    return list;
  })
  const [count , setCount] = useState(0)
  
  const addList = (text,date) => {
    alert('TODO -д нэмэгдлээ') 
    const newItem = {
      id: data.length + 1,
      title: text,
      currentDate: date,
      deleted:false,
      complete: false 
    }
    setState("")
    setCount(count + 1)
    setData([...data,newItem])
    localStorage.setItem('localTasks', JSON.stringify([...data, newItem]))
  }
  useEffect(()=>{
    if(localStorage.getItem('localTasks')){
      const list = JSON.parse(localStorage.getItem('localTasks'))
      setData(list)
  }
  },[])

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
    setCount(count-1)
    setData(
      data.map(m=>{
        if(m === text) {
          return {
            ...m,
            deleted: !m.deleted
          }
        }
        return m
      })
    )
    
  }


  useEffect(()=>{
    localStorage.setItem('localTasks', JSON.stringify(data))
  },[data])

  return (
    <div className='container'>
        <div>
          <h1 className='p-5 text-white text-[40px]'>ToDo App</h1>
            <div>
              {state ? <Header data={data} checkIcon={checkIcon} deleteList={deleteList} /> : <Add addList={addList}/>}
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
