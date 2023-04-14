
import {legacy_createStore} from 'redux'
import reducer from './reducer';
const initialState={
    counter:10,
    todos:[],
    isLoading:false,
    isError:false
}
const store=legacy_createStore(reducer,initialState)
export {store};


