import { ADD, ERROR, LOADING, GET_SUCCESS, REDUCE, POST_SUCCESS } from "./actionType";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        counter: state.counter + payload,
      };

    case REDUCE:
      return {
        ...state,
        counter: state.counter + payload,
      };

    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_SUCCESS: {
      return {
        ...state,
        todos: payload,
        isLoading: false,
      };
    }

    case ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case POST_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos,payload],
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
