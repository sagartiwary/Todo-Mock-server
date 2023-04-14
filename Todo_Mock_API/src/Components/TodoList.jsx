import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getError, getLoading, getSuccess } from "../Redux/Action";


const TodoList = () => {
   const {data,loading}=useSelector((state)=>{
    return {
      data:state.todos,
      loading:state.isLoading
    }
   },shallowEqual)
  //  console.log(data)
  const dispatch = useDispatch();
 
  let getTodos = async () => {
    try {
      dispatch(getLoading());
      let res = await axios.get(" http://localhost:3000/todos");
      // console.log(res.data);
      dispatch(getSuccess(res?.data));
    } catch (error) {
      dispatch(getError());
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h2>Add Todos</h2>
      <TodoInput />
      {data?.map((ele) => {
        return (
          <div key={ele.id}>
            {ele.title} - {ele.status ? "completed" : "pending"}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
