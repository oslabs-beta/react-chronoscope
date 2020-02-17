const connectedPort = {};

// Check to see if connection is from content script
chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== 'portConnection') {
    return;
  }
});