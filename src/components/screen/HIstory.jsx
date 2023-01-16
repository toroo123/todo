import React  from 'react'
import {GrCheckboxSelected} from 'react-icons/gr'
import {GrCheckbox} from 'react-icons/gr'


const History = ({data}) => {
  return (
        <div className='background'>
          <ul className='list-text'>
            {data.map((state, id) =>
            <li  className='list-text-li' key={id}>
              <div className='list-li'>
                  <div className=' self-center'>
                  <div className='flex items-center'>
                      <p className='text-[18px] pr-3'>{state.title}</p>
                      <p className='text-[16px] pl-3'>{state.currentDate}</p>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                      <div className=' self-center'>
                        {  
                          state.complete? 
                          < GrCheckboxSelected className='w-7 h-7'/> :
                          <GrCheckbox className='checkIcon'/>   
                        } 
                      </div>
                  </div>
              </div>
            </li> 
              
            )
            }           
          </ul>
        </div>
  )
}

export default History
