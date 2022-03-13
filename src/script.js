const darkBtn = document.querySelector("[data-moon]")
const lightBtn = document.querySelector("[data-sun]")
const body = document.body
const formTxt = document.querySelector("[data-text]")
const input = document.querySelector('#input')

// <!--input item-->
// <div data-todo class="h-10 flex items-center px-2 justify-between">
// <div class="flex gap-4 text-light-darkGrayishBlue
//  hover:text-light-veryDarkGrayishBlue cursor-pointer">
//   <div id="completed" class="checkbox">
//     <img
//       src="/images/icon-check.svg"
//       alt="logo"
//       class="w-3 h-2 mx-1"
//     />
//   </div>
//   <p class="">clean home</p>
// </div>
// <img
//   src="/images/icon-cross.svg"
//   alt="img"
//   class="flex items-end"
// />
// </div>
// <!--/ input item-->

// Event listeners
lightBtn.addEventListener("click",themeToggle)
darkBtn.addEventListener("click",themeToggle)

input.addEventListener("keyup",addItem)

function addItem(event){
    if(event.keyCode === 13){
        const value = input.value
        formTxt.innerHTML = `
            <div data-todo class="h-10 flex items-center px-2 justify-between">
            <div class="flex gap-4 text-light-darkGrayishBlue
            hover:text-light-veryDarkGrayishBlue cursor-pointer">
            <div id="completed" class="checkbox">
                <img
                src="/images/icon-check.svg"
                alt="logo"
                class="w-3 h-2 mx-1"
                />
            </div>
            <p class="">clean home</p>
            </div>
            <img
            src="/images/icon-cross.svg"
            alt="img"
            class="flex items-end"
            />
            </div>`
    }
}



//functions
function themeToggle(){
    lightBtn.classList.toggle("hidden")
    body.classList.toggle("dark")
    darkBtn.classList.toggle("hidden")
}

//local storage