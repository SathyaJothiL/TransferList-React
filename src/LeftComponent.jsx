import React from 'react'
import { useEffect } from 'react'

const LeftComponent = ({leftState,rightState,inputList,handleEvent,setCheckedState}) => {
    useEffect(()=>{
        setCheckedState([])
      },[leftState,rightState])
      return(
        <>
          <div className='w-2/5 h-[300px] border-black border-[1px] flex flex-col items-start' >
            {
              leftState.map((value)=>{
                return(
                  <div key={value+1} className='m-3'>       
                     <input  id={value}
                      type='checkbox' className='m-4' onChange={(e)=>handleEvent(e,value)}></input>
                      <label htmlFor={value}>{inputList[value]}</label>
                  </div> 
                  
                )
              })
            }
          </div>
        </>
      )
}

export default LeftComponent
