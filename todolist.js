const firstnameinput = document.getElementById("firstname")
const savebtn = document.getElementById("save")
const listitems = document.getElementById("toDolist")

const getElementValue = (element) => {
    return element.value
}

savebtn.addEventListener("click",(Event) => {
    Event.preventDefault()


const FirstNameValue = getElementValue(FirstnameInput)

const list = document.createElement("ol")

const firstNameli = document.createElement("li")
firstNameli . innerHTML = FirstNameValue
list . appendChild (firstNameli)

})
