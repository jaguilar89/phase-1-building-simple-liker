// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    const target = event.target
    if (target.textContent === EMPTY_HEART) {
      mimicServerCall()
      .then(() => {
        target.textContent = FULL_HEART;
        target.className = 'activated-heart'
      })
      .catch((error) => {
        const modal = document.querySelector('#modal');
        const modalMessage = document.querySelector('#modal p#modal-message');
        modal.className = null
        modalMessage.textContent = `${error}`

        setTimeout(() => {
          modal.className = 'hidden'
        }, 3000)

      })
    }
    
    if (target.textContent === FULL_HEART) {
      target.className = null
      target.textContent = EMPTY_HEART;
    }
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
