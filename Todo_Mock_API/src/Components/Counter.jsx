

import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addActionObj, reduceActionObj } from '../Redux/action';
const Counter = () => {
    const count=useSelector(state=>state.counter);
    const dispatch=useDispatch()
    const handleAdd=()=>{
        dispatch (addActionObj(1))
    }
    const handleReduce=()=>{
        dispatch(reduceActionObj(-1))
    }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleReduce}>REDUCE</button>
    </div>
  )
}

export default Counter