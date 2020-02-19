// const connectedPort = {};

// // Check to see if connection is from content script
// chrome.runtime.onConnect.addListener((port) => {
//   if (port.name !== 'portConnection') {
//     return;
//   }
// });
console.log('background script is running');
let newPort;
let tabsObj = {};

function createTabsObj(title) {
  return {
    title,
  }
}

chrome.runtime.onConnect.addListener(port => {
  newPort = port;
  
  // we are getting this in the React app
  port.postMessage({
    // action: 'initialConnectSnapshots',
    payload: { tabsObj }, 
  });

  // receive snapshot from devtools and send it to contentScript -
  port.onMessage.addListener(msg => {
    const { tabId } = msg;

    chrome.tabs.sendMessage(tabId, msg);
    console.log('message from background script', msg);

    // port.postMessage({
    //   // action: 'initialConnectSnapshots',
    //   payload: msg, 
    // });
  });
});


// background.js receives message from contentScript.js
chrome.runtime.onMessage.addListener((request, sender) => {
  console.log('Another log from backgroundScript', request, sender);

  // IGNORE THE AUTOMATIC MESSAGE SENT BY CHROME WHEN CONTENT SCRIPT IS FIRST LOADED
  if (request.type === 'SIGN_CONNECT') return;
  const tabTitle = sender.tab.title;
  const tabId = sender.tab.id;

  createTabsObj(tabTitle);
  

  newPort.postMessage({
    // action: 'initialConnectSnapshots',
    payload: tabsObj,
  });
});
