import React from 'react'
import {GrCheckboxSelected} from 'react-icons/gr'
const Done = () => {
  return (
        <div className='background'>
          <ul className='list-text'>
            <li className='list-text-li'>
                <div className='list-li'>
                    <div className=' self-center'>
                        <p className='text-[18px]' >TODO TITLE</p>
                        <p className='text-[12px]'>TODO SUB TITLE </p>
                    </div>
                    <div className='flex justify-between'>
                        <div className=' self-center'><GrCheckboxSelected className='w-7 h-7'/></div>
                    </div>
                </div>
            </li>            
          </ul>
        </div>
  )
}

export default Done
