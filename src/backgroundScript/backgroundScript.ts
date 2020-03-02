interface MessageFromContent {
  action: string;
  payload: string;
}

// Create Variable to store tree structure data from content script; 
let treeGraph; 
let currentPort;

// listen for connection from the chrome dev tool;
chrome.runtime.onConnect.addListener(port => {
  //Once connected. Background Script will send message to Chrome Dev Tool.
  currentPort = port;
  // if (!currentPort) {
    port.postMessage({
      // action: 'BackgroundToChromeDevTool',
      payload: treeGraph, 
    })
  // }
});

// listen for message from contentScript
chrome.runtime.onMessage.addListener((msg: MessageFromContent) => {
  console.log('Parsed Data from ContentScript: ', JSON.parse(msg.payload));
  treeGraph = JSON.parse(msg.payload);
  if (currentPort) {
    currentPort.postMessage({
      // action: 'BackgroundToChromeDevTool',
      payload: treeGraph, 
    })
  }
});


