const FirstNameInput = document.getElementById("firstname")
const lastnameInput = document.getElementById("lastname")
const emailInput = document.getElementById("emailaddress")
const saveBtn = document.getElementById("save")
const tablebody = document.getElementById ("tableBody")

const getElementValue = (element) => {
    return element.value 
}

saveBtn.addEventListener("click",(event) => {
    event.preventDefault()

    const firstNameValue = getElementValue(FirstNameInput)
    const lastnameValue = getElementValue(lastnameInput)
    const emailValue = getElementValue(emailInput)


    const tableRow = document.createElement("tr")
    
    const firstNameTd = document.createElement("td")
    firstNameTd.innerHTML = firstNameValue
    tableRow.appendChild(firstNameTd)
     

    const lastNameTd = document.createElement("td")
    lastNameTd.innerHTML = lastnameValue
    tableRow.appendChild(lastNameTd)


    const emailTd = document.createElement("td")
    emailTd.innerHTML = emailValue
    tableRow.appendChild(emailTd)

    tablebody.appendChild (tableRow)








})