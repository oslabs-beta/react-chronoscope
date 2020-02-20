//import './contentScript.scss';

// Create a connection with backgroundScript.

//let port = chrome.runtime.connect({ name: 'portConnection' });

// let i = 0;

// setInterval(() => {
//   console.log(i, (<any>window).treeGraph);
//   i++;
// }, 1000);


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

window.addEventListener('message', msg => {
  console.log('TreeGraph from npm', msg.data);
  //chrome.runtime.sendMessage({action: 'ContentToBackground', payload: msg.data});
  chrome.runtime.sendMessage({action: 'ContentToBackground', payload: JSON.stringify(msg.data)});
});
