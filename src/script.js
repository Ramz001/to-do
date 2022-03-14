const darkBtn = document.querySelector("[data-moon]");
const lightBtn = document.querySelector("[data-sun]");
const body = document.body;
const input = document.querySelector("#input");
const inputItems = document.querySelector(".input-items");
let itemsNumber = document.querySelector("#items-number")

itemsNumber.textContent = 0 

// Event listeners
lightBtn.addEventListener("click", themeToggle);
darkBtn.addEventListener("click", themeToggle);

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
  elementContainer.parentElement.parentElement.classList.toggle("completed")
  checkbox.classList.toggle("bg-gradient-to-br")
  tick.classList.toggle("hidden")
  txt.classList.toggle("checked")
  
  if(elementContainer.parentElement.parentElement.classList.contains("completed")){
    itemsNumber.textContent--
  }else{
    itemsNumber.textContent++
  }
}
//local storage
