

import React, { useState } from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { getError, getLoading, postSuccess } from '../Redux/Action';

const TodoInput = () => {
    const [title,setTitle]=useState("")
    const dispatch=useDispatch()

    let postData=()=>{
      const newList={
        title,
        status:false
      }
        dispatch(getLoading())
       axios.post("http://localhost:3000/todos",newList)
       .then((res)=>{
        console.log(res.data)
        dispatch(postSuccess(res.data))
       })
       .catch((error)=>{
        dispatch(getError())
       })
    
     
    }


  const handleClick=()=>{
   postData()
   setTitle("")

  }

  return (
    <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Add Todos'/>
        <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default TodoInput