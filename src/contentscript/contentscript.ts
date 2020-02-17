import './contentScript.scss';

// Create a connection with backgroundScript.

let port = chrome.runtime.connect({ name: 'portConnection' });


// Send the message through the port to backgroundScript
window.addEventListener('message', () => {
      const fiberRoot = (<any>window).message;
      port.postMessage(
        {
          name: 'fiberRoot',
          message: fiberRoot,
          target: 'devTools',
        },
      );
    }
  );