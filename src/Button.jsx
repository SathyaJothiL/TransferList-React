import React from 'react'

const Button = ({buttonName,onClickFunc,cls}) => {
    return(
        <div className=' flex justify-center items-center'>
          <button className={`${cls} px-4 py-2 border-[1px] border-black w-10` }  onClick={()=>onClickFunc(buttonName)}>{buttonName}</button>
        </div>
      )
}

export default Button
