const cancelButton = document.getElementById("cancel");
const acceptButton = document.getElementById("accept");

const cancelPopup = document.getElementById("cancel-popup");
const acceptPopup = document.getElementById("accept-popup");


let currentPopup;

function clearTimer() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = undefined;
}

acceptButton.addEventListener('click', () => {
  acceptPopup.classList.add("slide-in")
  currentPopup = acceptPopup
  setTimeout(removePopup, 8000, currentPopup)
})

cancelButton.addEventListener('click', () => {
  cancelPopup.classList.add("slide-in")
  currentPopup = cancelPopup
  setTimeout(removePopup, 8000, currentPopup)
})

function removePopup(popup) {
  if (currentPopup && currentPopup === popup) {
    popup.classList.remove("slide-in");   
    currentPopup = undefined;
  }
  clearTimeout()
}

document.querySelector('body').addEventListener('click', (event) => {
  if(!event.target.classList.contains('popup') && 
        !event.target.classList.contains('popup-button')) {
    removePopup(currentPopup)
  }
})