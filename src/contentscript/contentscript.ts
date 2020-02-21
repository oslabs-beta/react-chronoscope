import './contentScript.scss';

// Create a connection with backgroundScript.
// const port = chrome.runtime.connect({ name: 'portConnection' });

//let port = chrome.runtime.connect({ name: 'portConnection' });

// let i = 0;

// setInterval(() => {
//   console.log(i, (<any>window).treeGraph);
//   i++;
// }, 1000);

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

// console.log('hhhhhfsfwvfwe')
// console.log('================')
// // listening for messages from npm package
// window.addEventListener('message', msg => {
//   console.log('message data from contentscript: ', msg.data);
//   console.log('message: ', msg);
//   chrome.runtime.sendMessage(msg.data);
// });
// // setTimeout(() => console.log((<any>window).treeGraph), 5000);

// // listening for messages from the UI
// chrome.runtime.onMessage.addListener(request => { // seems to never fire
//   // send the message to npm package
//   chrome.runtime.sendMessage(request);
//   window.postMessage(request, null);
// });

// Send the message through the port to backgroundScript
// window.addEventListener('message', (e) => {
//       console.log('Event:', e);
//       const fiberRoot = (<any>window).message;
//       console.log('Message:', fiberRoot);

//       port.postMessage(
//         {
//           name: 'fiberRoot',
//           message: fiberRoot,
//           target: 'devTools',
//         },
//       );
//     }
//   );


// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(window);
//   console.log((<any>window));
//   console.log(window === (<any>window));
//   console.log((<any>window).treeGraph);
// });

// function injectScript(file, node) {
//   const body = document.getElementsByTagName(node)[0];
//   console.log(document.getElementsByTagName(node));
//   const script = document.createElement('script');
//   script.setAttribute('type', 'text/javascript');
//   script.setAttribute('src', file);
//   body.appendChild(script);
// }
// injectScript(chrome.extension.getURL('/inject.js'), 'body');

// listen for message from npm package
window.addEventListener('message', msg => {
  // filter the incoming msg.data
  if (msg.data.action === 'npmToContent') {
    console.log('TreeGraph from npm: ', msg.data);
    // send the message to the chrome - backgroundScript
    //chrome.runtime.sendMessage({action: 'ContentToBackground', payload: msg.data});
    chrome.runtime.sendMessage({action: 'ContentToBackground', payload: JSON.stringify(msg.data)});
  }
});
