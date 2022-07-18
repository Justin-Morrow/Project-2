import { io} from 'socket.io-client'
const messageContainer = document.getElementById('message-container')
const joinRoomButton = document.getElementById("room-button")
const messageInput = document.getElementById("message-input")
const roomInput = document.getElementById("room-input")
const form = document.getElementById("form")

const socket = io('http://localhost:3000')
socket.on('connect', () => {
    // displayMessage(`You connected to server with id: ${socket.id}`)
    displayMessage(`You connected to server... Please type in the room name to start sending your message`)

})

socket.on("received-message", message =>{
    displayMessage(message)
})

form.addEventListener("submit", e => {
    e.preventDefault()
    const message = messageInput.value
    const room = roomInput.value

    if (message === "") return
    displayMessage(message)
    socket.emit("send-message", message, room)

    messageInput.value = ""
})

joinRoomButton.addEventListener("click", () => {
    const room = roomInput.value
    socket.emit("join-room", room)
})

function displayMessage(message) {
    const div = document.createElement("div")
    div.textContent = message
    document.getElementById("message-container").append(div)
}
