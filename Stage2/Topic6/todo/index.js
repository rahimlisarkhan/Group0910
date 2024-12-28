const url = "https://jsonplaceholder.typicode.com/todos";
let globalData = [];

const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoInput");
const todoBtn = document.querySelector("#todoBtn");

// Api's
async function getTodos() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    globalData = data;

    renderList();

    console.log("data", data);
  } catch (err) {
    console.log("err", err);
  }
}

// Actions
function renderList() {
  todoList.innerHTML = globalData
    .map(
      (item, index) => `
       <li
          class="list-group-item d-flex justify-content-between align-items-center"
          style="text-decoration:${item.completed ? "line-through" : "none"};"
        >
          ${index + 1}. ${item.title}

          <div class="btn-groups">

          <button class="btn btn-success btn-sm"
          onclick="toggleTodo(${index})"
          
          >Completed </button>

              <button class="btn btn-danger btn-sm"
          onclick="removeTodo(${index})"
          
          >Remove </button>
          </div>

        </li>
    `
    )
    .join("");
}

function addTodo() {
  const payload = {
    completed: false,
    title: todoInput.value,
  };

  console.log(payload);

  globalData.unshift(payload);

  renderList();
}

function toggleTodo(todoIndex) {
  globalData[todoIndex].completed = globalData[todoIndex].completed
    ? false
    : true;

  renderList();

  console.log("todoIndex", todoIndex);
}

function removeTodo(todoIndex) {
  globalData = globalData.filter((item, index) => index !== todoIndex);

  renderList();
  console.log("todoIndex", todoIndex);
}

// Events
todoInput.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addTodo();
  }
});

todoBtn.addEventListener("click", function () {
  addTodo();
});

getTodos();
