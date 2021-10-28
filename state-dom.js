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

// Получаем узел кнопки добавления
const addBtn = document.querySelector("#add-btn");

//Объвляем функцию прорисовки новых тудушек
const render = (todos) => {
  const listContainer = document.querySelector("#list"); //Получаем узел главного блока в котором будут храниться тудушки

  // Проходимся помассиву тудушек переданных в эту функцию
  todos.forEach((todo, index) => {
    const item = document.createElement("div"); // Создаем новый узел для новой тудушки
    const removeBtn = document.createElement("button"); // Создаем новый узел для кнопки удаления тудушки
    const checkBox = document.createElement("input"); // Создаем новый узел input

    checkBox.type = "checkbox"; // Делаем наш инпут типом checkbox

    removeBtn.textContent = "X"; // Даем нашей кнопки удаления тудушки текст "X" типа крестик для удаления
    removeBtn.addEventListener("click", () => remove(index)); // Вешаем обработчик события клика на кнопку удаления. Вызываем функцию удаления тудушки и передаем индекс данной ьудушки

    item.classList.add("todo-list__item"); // Даем класс для новой тудушки
    item.textContent = todo.text; // Даем текст из объекта массива нашей новой тудушке

    if (todos[index].done) {
      // Если в тудушке поле done равно true
      item.classList.add("completed"); // Даем ему класс completed
      checkBox.checked = true; // и чекбокс делаем с галочкой
    } else {
      // иначе
      item.classList.remove("completed"); // Удаляем класс completed
      checkBox.checked = false; // И убираем галочку с чекбокса
    }

    item.append(checkBox); // Добавляем наш новый чекбокс к тудушке
    item.append(removeBtn); // и добавляем кнопку удаления к нашей тудушке

    checkBox.onchange = () => checkTodo(index); // Вешаем обработик события нашему чекбоксу и вызываем функцию проверки тудушки на выполнение и передаем индекс данной тудушки

    listContainer.append(item); // Добавляем наш новый туду в главный контейнер
  });
};

// Функция добавления тудушки
const addTodo = (text) => {
  // Пушик в наш массив новый объект с текстом который принимаем в качестве парраметра
  todos.push({
    text,
    done: false,
  });

  document.querySelector("#list").textContent = ""; // Очишаем экран от старой версии
  render(todos); // рендерим заного
};

// Функция удаления тудушки
const remove = (id) => {
  todos.splice(id, 1); // Удаляем тудушку из массива по айдишнику который приняли в качестве параметра

  document.querySelector("#list").textContent = ""; // Очишаем экран от старой версии
  render(todos); // рендерим заного
};

// Функция проверки тудушки на выполнение
const checkTodo = (id) => {
  todos[id].done = !todos[id].done; // Меняем значение ключа done на противоположное

  document.querySelector("#list").textContent = ""; // Очишаем экран от старой версии
  render(todos); // рендерим заного
};

addBtn.addEventListener("click", (e) => {
  // Вешаем событие клика на кнопку добавления тудушки
  e.preventDefault(); // Отменяем стандартное поведение события
  const text = document.querySelector("#text").value; // Получаем текст из нашего инпута
  if (text === "" || text === " ") {
    // Небольшая валидация
    return; // Выходим из функции
  }

  addTodo(text); // Вызываем функцию добавления тудушки и передаем наш текст из инпута
  document.querySelector("#text").value = ""; // Очишаем наш инпут
});

render(todos); // Вызываем рендер
