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


chrome.runtime.onMessage.addListener(msg => {
  console.log('From ContentScript: ', msg);
  console.log('Parsed Data: ', JSON.parse(msg.payload));
});

console.log('after onConnect');