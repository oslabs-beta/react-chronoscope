import './contentScript.scss';

// Create a connection with background script.

let port = chrome.runtime.connect({ name: 'portConnection' });


// window.addEventListener('message', (message) => {
//       const fiberRoot = window.message;
//       port.postMessage(
//         {
//           name: 'fiberRoot',
//           message: fiberRoot,
//           target: 'devTools',
//         },
//       );
//     }
//   );