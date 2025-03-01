import { useLocalStore } from "./hooks/useLocalStore";
import TodoCard from "./TodoCard";
import TodoInput from "./TodoInput";

function Todo() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useLocalStore("todos");
  // const [localProduct, setLocalProduct] = useLocalStore("products");

  function handleAdd(text) {
    const payload = {
      id: Date.now(),
      text,
    };

    const data = [payload, ...todos];

    console.log(data);

    // setTodos(data);
    setTodos(data);
  }

  function handleRemove(todoId) {
    console.log(todoId);

    const newTodos = [...todos];

    const filterTodos = newTodos.filter((item) => item.id !== todoId);

    // setTodos(filterTodos);
    setTodos(filterTodos);
  }

  return (
    <>
      <div></div>
      <h1>Todo App</h1>

      <TodoInput onAddText={handleAdd} />

      <div className="list">
        {localData.map((item) => (
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
