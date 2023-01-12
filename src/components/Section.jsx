import React from 'react'
import {GrCheckbox} from 'react-icons/gr'
import {MdDeleteForever} from 'react-icons/md'
import {GrCheckboxSelected} from 'react-icons/gr'

const Section = ({data, checkIcon, deleteList}) => {
    return (
    <div className='background'>
      <ul className='list-text'>
        {data.map((state) => (
          <li className='list-text-li'>
            <div className='list-li'>
                <div className=' self-center'>
                  <div className='flex items-center'>
                    <p className='text-[18px] pr-3'>{state.title}</p>
                    <p className='text-[16px] pl-3'>{state.currentDate}</p>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <button onClick={()=> {deleteList(state)}} className=' self-center px-4'>
                    <MdDeleteForever className='w-7 h-7'/>
                  </button>
                  <button onClick={()=> checkIcon(state.id)}>
                    {
                      state.complete?
                      <GrCheckboxSelected className='checkIcon'/>:
                      <GrCheckbox className='checkIcon'/>    
                    }
                  </button>
                </div>
            </div>
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default Section
