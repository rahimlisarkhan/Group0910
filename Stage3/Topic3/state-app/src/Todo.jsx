import TodoCard from "./TodoCard";
import TodoInput from "./TodoInput";
import { useReducer } from "react";

const initialArg = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos] };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialArg);

  function handleAdd(text) {
    const payload = {
      id: Date.now(),
      text,
    };

    dispatch({ type: "ADD_TODO", payload });
  }

  function handleRemove(todoId) {
    dispatch({ type: "REMOVE_TODO", payload: todoId });
  }

  return (
    <>
      <div></div>
      <h1>Todo App</h1>

      <TodoInput onAddText={handleAdd} />

      <div className="list">
        {state.todos.map((item) => (
          <TodoCard
            key={"todo-" + item.id}
            title={item.text}
            onDelete={() => handleRemove(item.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Todo;
