const darkBtn = document.querySelector("[data-moon]");
const lightBtn = document.querySelector("[data-sun]");
const body = document.body;
const input = document.querySelector("#input");
const inputItems = document.querySelector(".input-items");
const clearCompleted = document.querySelector("[data-clear-completed]")

const allFilter = document.querySelector("[data-all-filter]")
const activeFilter = document.querySelector("[data-active-filter]")
const completedFilter = document.querySelector("[data-completed-filter]")
let itemsNumber = document.querySelector("#items-number")

itemsNumber.textContent = 0 

// Event listeners
lightBtn.addEventListener("click", themeToggle);
darkBtn.addEventListener("click", themeToggle);
allFilter.addEventListener("click",allFilterElements)
input.addEventListener("keyup", addItem);

function addItem(event) {
  let value = input.value;

  if (event.keyCode === 13) {
    const element = document.createElement("div");
    element.innerHTML = `
        <div data-todo class="h-10 flex items-center px-2 justify-between">
          <div class="flex gap-4 text-light-darkGrayishBlue
          hover:text-light-veryDarkGrayishBlue cursor-pointer">
            <div id="completed" class="checkbox">
                <img
                src="/images/icon-check.svg"
                alt="logo"
                id="tick"
                class="w-3 hidden h-2 mx-1"
                />
            </div>
            <p class="">${value}</p>
          </div>
          <img
          src="/images/icon-cross.svg"
          alt="img"
          id="cross"
          class="flex items-end cross-hover"
          />
        </div>`;
    //appeding element 
    inputItems.appendChild(element);

    const checkbox = element.querySelector(".checkbox");
    const cross = element.querySelector("#cross")
    //checked
    checkbox.addEventListener("click",itemChecked)
    // deleteItem
    cross.addEventListener("click",()=>{
      inputItems.removeChild(element)
      itemsNumber.textContent--
    })
    itemsNumber.textContent = inputItems.children.length
    //completedElements
    //eventListener
    clearCompleted.addEventListener('click',clearCompletedElements)
    // filters' event listener  

    clear()
  }
}

//functions

function themeToggle() {
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark");
  darkBtn.classList.toggle("hidden");
}
function clear(){
  input.value = ""
}
function itemChecked(e){
  let elementContainer = e.currentTarget.parentElement
  const tick = elementContainer.querySelector("#tick")
  const txt = elementContainer.querySelector("p")
  const checkbox = elementContainer.querySelector(".checkbox");
  //adding class to find out which element was completed
  let container = elementContainer.parentElement.parentElement
  //sets data attribute to all todos that are completed
  if(!container.dataset.completed){
    container.setAttribute("data-completed",'completed')
  }else{
    container.removeAttribute("data-completed")
  }
  checkbox.classList.toggle("bg-gradient-to-br")
  tick.classList.toggle("hidden")
  txt.classList.toggle("checked")
  
  if(container.dataset.completed === "completed"){
    itemsNumber.textContent--
  }else{
    itemsNumber.textContent++
  }
}
function clearCompletedElements(){
  const completedElements = inputItems.querySelectorAll("[data-completed]")
  completedElements.forEach(element=>{
    inputItems.removeChild(element)
  })
}
function allFilterElements(){
  const allElements = inputItems.querySelectorAll("div")
  allElements.forEach(element => element.classList.toggle("hidden"))
  allFilter.classList.toggle("text-brightBlue")
}
allFilterElements()
//local storage
