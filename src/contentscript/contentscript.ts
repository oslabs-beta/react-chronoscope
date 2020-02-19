import './contentScript.scss';

// Create a connection with backgroundScript.
// const port = chrome.runtime.connect({ name: 'portConnection' });


// // Send the message through the port to backgroundScript
// window.addEventListener('message', () => {
//       const fiberRoot = (<any>window).message;
//       port.postMessage(
//         {
//           name: 'fiberRoot',
//           message: fiberRoot,
//           target: 'devTools',
//         },
//       );
//     }
//   );

console.log('hhhhhfsfwvfwe')
console.log('================')
// listening for messages from npm package
window.addEventListener('message', msg => {
  console.log('message data from contentscript: ', msg.data);
  console.log('message: ', msg);
  chrome.runtime.sendMessage(msg.data);
});
// setTimeout(() => console.log((<any>window).treeGraph), 5000);

// listening for messages from the UI
chrome.runtime.onMessage.addListener(request => { // seems to never fire
  // send the message to npm package
  chrome.runtime.sendMessage(request);
  window.postMessage(request, null);
});

