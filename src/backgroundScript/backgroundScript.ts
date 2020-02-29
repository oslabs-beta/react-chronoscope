//Checking to make sure background script is being run
console.log('Background Script Running');

//Typescript interface for Indexable Types. Message from ContentScript.
interface MessageFromContent {
  action: string;
  payload: string;
}

//Create Variable to store tree structure data from content script; 
let treeGraph;

// listen for message from contentScript
chrome.runtime.onMessage.addListener((msg: MessageFromContent) => {
  console.log('Parsed Data from ContentScript: ', JSON.parse(msg.payload));
  treeGraph = JSON.parse(msg.payload);
});

// listen for connection from the chrome dev tool;
chrome.runtime.onConnect.addListener(port => {
  //Once connected. Background Script will send message to Chrome Dev Tool.
  port.postMessage({
    // action: 'BackgroundToChromeDevTool',
    payload: treeGraph, 
  })
});

