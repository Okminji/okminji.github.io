function createId() {
    return Math.floor(Math.random() * 100000);
}

let todos = document.querySelector(`.todo-list`);
let add = document.querySelector(`#btn-add`);
let input = document.querySelector(`.input`);
// document.body.insertBefore(add, ul)
// document.body.insertBefore(input, add)
add.addEventListener(`click`, function () {
    let addin = {
        id: createId(),
        isStatus: false,
    };
    addin.innerText = input.value;
    if (addin.innerHTML == `` || addin.innerHTML == " ") {
        alert(`Noi dung khong de trong`);
        return;
    }
    input.value = ``;
});


function renderUI(arr) {
    if (arr.length == 0) {
        list.innerHTML = `<p class= "todos-empty">Khong co cong viec nao trong danh sach</p>`;
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        todo_list.innerHTML += `
        <div class="todo-item ${t.isStatus ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input type="checkbox" ${t.isStatus ? "checked" : ""}>
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick="update(${t.id})>
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${
                      t.id
                    })">
                        <img src="./img/remove.svg" alt="icon">
                    </button>
                </div>
            </div>`;
    }
}

renderUI(todos);

function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1);
        }
    }
    renderUI(todos);
}

function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) { 
        if (todos[i].id == id) {
            todos[i].isStatus = !todos[i].isStatus;
        }
    }
    renderUI(todos);
}

function updateTodo(btn, id) {
  let todo_item_title = btn.parentElement.parentElement.querySelector(
    ".todo-item-title"
  );
  let para = todo_item_title.querySelector("p");
  let title = para.innerText;
  todo_item_title.insertAdjacentHTML(
    "beforeEnd",
    `<input type="text" value="${title}">`
  );
    para.parentElement.removeChild(para);
    document.addEventListener(`keydown`, function enter(log) {
        let x = log.key
        if (x == `Enter`) { 
            let alttitle = todo_item_title.querySelector(`input`).innerHTML
            let newpara = document.createElement(`p`);
            newpara.innerHTML = alttitle;
            todo_item_title.appendChild(newpara)
        }                                                                                                                                                           
    })
}
