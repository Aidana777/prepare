const inputMessage = document.querySelector("#inputMessage")
const messagebtn = document.querySelector(".message-btn")
const messageP = document.querySelector(".message")
messagebtn.onclick = () => {
    messageP.textContent = inputMessage.value
    inputMessage.value = innerHTML
}
const listtext = document.querySelector(".list-text")
const myList = ["mouse", "abc", "keyboard", "screen", "touchpad"];
let tempArr = [];
for (let i = 0; i < myList.length; i++) {

    if (myList[i].length % 2 === 0) {
     tempArr.push(myList[i])
    }

}
console.log(tempArr)
listtext.textContent=tempArr
const listMenu = document.querySelector(".list")
const listMenuli = document.querySelector("li")
console.log(listMenuli)
listMenu.append(listMenuli)
listMenuli.textContent = myList[0]
const first = document.createElement("li")
const second = document.createElement("li")
const treeth = document.createElement("li")
const fourt = document.createElement("li")
listMenu.append(first, second, treeth, fourt)
first.textContent = myList[1]
second.textContent = myList[2]
treeth.textContent = myList[3]
fourt.textContent = myList[4]

const nameInput = document.querySelector("#nameInput")
const nameBtn = document.querySelector("#nameBtn")


nameInput.oninput = () => {
    if (nameInput.value.length >= 7) {
        nameBtn.disabled = false

    }
}
