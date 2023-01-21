


function handleMessage(request, sender, sendResponse) {
    console.log(`A content script sent a message: ${request.greeting}`);
    chrome.storage.local.set({"name": request.greeting})
    chrome.storage.local.set({ "key": request.greeting }).then(() => {
      console.log("Value is set to " + "value");
    });
    sendResponse({ response: "Response from background script" });
    postRequest((request.greeting).trim())
  }
chrome.runtime.onMessage.addListener(handleMessage);

const postRequest = async (name) => {
  const rawResponse = await fetch('http://localhost:5050/api/chrome', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({a: name})
  });
  
  const content = await rawResponse.json();

  console.log(content);
};
postRequest()