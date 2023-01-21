
let elem = Array.from(document.querySelectorAll('a'))


elem.map(item => item.classList.add('black'))

class User {
    constructor(id, name){
        this.id = id
        this.name = name
    }
}
let a;
const getName = () =>{
  if(window.innerWidth < 800) a = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words').innerHTML 
  else if(window.innerWidth > 800) a =document.querySelector('span[dir="ltr"]').innerHTML
console.log(a)
return a
}
const profileName = getName()
function handleResponse(message) {
    console.log(`Message from the background script: ${message.response}`);
  }
  function notifyBackgroundPage(e) {    
    const sending = chrome.runtime.sendMessage({
      greeting: profileName,
    });
    sending.then(handleResponse);
  }
  window.addEventListener("load", notifyBackgroundPage);


chrome.storage.local.get(["key"]).then((result) => {
        console.log("Value currently is " + result.key);
      });


      function getReponseFromPopup(e) {
        console.log('pop')
        chrome.runtime.onMessage.addListener((incomeResponse)=>{
            if (incomeResponse.action === 'initiateFunction') {
              notifyBackgroundPage()
            }
          });
        }
  