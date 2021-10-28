const todos = [
  {
    text: "первое дело",
    done: false,
  },
  {
    text: "Второе дело",
    done: false,
  },
  {
    text: "Третье дело",
    done: true,
  },
  {
    text: "Четвертое дело",
    done: false,
  },
  {
    text: "Пятое дело",
    done: true,
  },
];

const render = (todos) => {
  const listContainer = document.querySelector("#list");

  todos.forEach((todo) => {
    const item = document.createElement("div");
    item.classList.add("todo-list__item");
    item.textContent = todo.text;
    listContainer.append(item);
  });
};

const addTodo = (text) => {
  todos.push({
    text,
    done: false,
  });
  document.querySelector("#list").textContent = "";
  render(todos);
};

const remove = (id) => {
  document.querySelector("#list").textContent = "";
  render(todos);
};

render(todos);
