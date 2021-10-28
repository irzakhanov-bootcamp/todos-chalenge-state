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
    done: false,
  },
  {
    text: "Четвертое дело",
    done: false,
  },
  {
    text: "Пятое дело",
    done: false,
  },
];

const addBtn = document.querySelector("#add-btn");

const render = (todos) => {
  const listContainer = document.querySelector("#list");

  todos.forEach((todo, index) => {
    const item = document.createElement("div");
    const removeBtn = document.createElement("button");
    const checkBox = document.createElement("input");

    checkBox.type = "checkbox";

    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", () => remove(index));

    item.classList.add("todo-list__item");
    item.textContent = todo.text;

    if (todos[index].done) {
      item.classList.add("completed");
      checkBox.checked = true;
    } else {
      item.classList.remove("completed");
      checkBox.checked = false;
    }

    item.append(checkBox);
    item.append(removeBtn);

    checkBox.onchange = () => checkTodo(index);

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
  todos.splice(id, 1);

  document.querySelector("#list").textContent = "";
  render(todos);
};

const checkTodo = (id) => {
  todos[id].done = !todos[id].done;

  document.querySelector("#list").textContent = "";
  render(todos);
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = document.querySelector("#text").value;
  if (text === "" || text === " ") {
    return;
  }
  addTodo(text);
  document.querySelector("#text").value = "";
});

render(todos);
