// const connectedPort = {};

// Check to see if connection is from content script
// chrome.runtime.onConnect.addListener((port) => {
//   if (port.name !== 'portConnection') {
//     return;
//   }
// });

console.log('background script running');

// chrome.runtime.onConnect.addListener(request => {
//   console.log('BackgroundScript Request', request);
//   // console.log('BackgroundScript Sender', sender);
// });

let treeGraph; 

chrome.runtime.onMessage.addListener(msg => {
  console.log('From ContentScript: ', msg);
  console.log('Parsed Data: ', JSON.parse(msg.payload));
  treeGraph = JSON.parse(msg.payload);
});

chrome.runtime.onConnect.addListener(port => {
  // newPort = port;
  // we are getting this in the React app
  port.postMessage({
    // action: 'initialConnectSnapshots',
    payload: treeGraph, 
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

console.log('after onConnect');
