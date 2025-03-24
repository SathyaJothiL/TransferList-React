import React from 'react'
import Button from './Button'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import { useState,useEffect } from 'react'

const TranserList = () => {
    let leftList = [0,1,2,3]
let rightList = [4,5,6,7]
const buttonList = [
    '>>','>','<','<<'
  ]
  const inputList = [
    'Java','HTML','CSS','TS','React','Angular','Vue','Svelte'
  ]
const [leftState,setLeftState] = useState(leftList)
const [rightState,setRightState] = useState(rightList)
const [checkedState,setCheckedState] =useState([])
function handleEvent(e,value){
  let checkedArray = [...checkedState] 
  console.log(value,'value');
  if(checkedArray.includes(value)){
    console.log('yes');
    let newChecked = checkedArray.filter(item=>item!==value)
    setCheckedState(newChecked)
  }else{
    checkedArray.push(value)
    setCheckedState(checkedArray)
  }
}

function changeAllLeft(leftState,rightState){
  let newleftState = [...leftState]
  let newrightState
  
  if(newleftState.length===0){
    console.log("No items in left");
    return
  }

  newrightState = [...rightState]

  setRightState(newrightState.concat(newleftState))
  setLeftState([])
}
function changeAllRight(leftState,rightState){
  let newrightState = [...rightState]
  let newleftState
  
  if(newrightState.length===0){
    console.log("No items in right");
    return
  }

  newleftState = [...leftState]

  setRightState([])
  setLeftState(newleftState.concat(newrightState))
}

function onClickFunc(buttonName){
  if(buttonName==='>>'){
    console.log(checkedState,'buttons');
    changeAllLeft(leftState,rightState)
  }
  if(buttonName==='<<'){
    console.log(checkedState,'buttons');
    changeAllRight(leftState,rightState)
  }
  if(buttonName==='>'){
    console.log(checkedState,'checkers');
    changeLeft(leftState,rightState,checkedState)
  }
  if(buttonName==='<'){
    console.log(checkedState,'checkers');
    changeRight(leftState,rightState,checkedState)
  }
}

function changeLeft(leftState,rightState){
  console.log(checkedState);
  if(leftState.length===0){
    console.log("No rows in left");
    return
  }
  let newLeftState = [...leftState]
  let newRightState = [...rightState]
  let newCheckedState = [...checkedState]
  let filerChecked = newLeftState.filter(item=>newCheckedState.includes(item))
  if(filerChecked.length===0){
    console.log("No rows in left checked");
    return
  }
  let filterUnchecked = newLeftState.filter(item=>!newCheckedState.includes(item))

  setLeftState(filterUnchecked)
  setRightState(newRightState.concat(filerChecked))
}

function changeRight(){
  console.log(checkedState);
  if(rightState.length===0){
    console.log("No rows in right");
    return
  }
  let newLeftState = [...leftState]
  let newRightState = [...rightState]
  let newCheckedState = [...checkedState]
  let filerChecked = newRightState.filter(item=>newCheckedState.includes(item))
  if(filerChecked.length===0){
    console.log("No rows in right checked");
    return
  }
  let filterUnchecked = newRightState.filter(item=>!newCheckedState.includes(item))

  setLeftState(newLeftState.concat(filerChecked))
  setRightState(filterUnchecked)
}

function getButtonClass(index){

  if(index===0){
    if(leftState.length>0){
      return ' bg-gray-500'
    }else{
      return ' bg-gray-300'
    }
  }
  if(index===3){
    if(rightState.length>0){
      return ' bg-gray-500'
    }else{
      return ' bg-gray-300'
    }
  }
  if(index===1){
    console.log(checkedState);
    let leftChecked = checkedState.filter(item=>leftState.includes(item))
    if(leftChecked>0){
      return ' bg-gray-500'
    }else{
      return ' bg-gray-300'
    }
  }
  if(index===2){
    console.log(checkedState);
    let rightChecked = checkedState.filter(item=>rightState.includes(item))
    if(rightChecked>0){
      return ' bg-gray-500'
    }else{
      return ' bg-gray-300'
    }
  }
}

return(

    <>  
    <div>
      <div className='flex flex-row justify-center items-center m-12'>
        <LeftComponent handleEvent={handleEvent} rightState={rightState} leftState={leftState} setCheckedState={setCheckedState} inputList={inputList} />
          <div className='flex flex-col justify-center items-center h-[300px] gap-4 w-1/5 border-black border-t-[1px] border-b-[1px]'>
            {
              buttonList.map((buttonName,index)=><Button id={index+1} key={index+1} buttonName={buttonName} checkedState={checkedState}  onClickFunc={onClickFunc} cls={getButtonClass(index)} />)
            }
          </div>
          <RightComponent handleEvent={handleEvent} rightState={rightState} leftState={leftState} setCheckedState={setCheckedState} inputList={inputList}/>
      </div>
    </div>
    </>
  )
}

export default TranserList
