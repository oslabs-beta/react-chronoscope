<p>

# React ChronoScope 

A package for traversing React Fiber Tree and extracting information.

# Installing

Install the package in the React application.
```
npm i react-chronoscope
```
Import the npm library into root container file of React Application and invoke the library with the root container.
```
import chronoscope from 'react-chronoscope';
const container = document.querySelector('#root');
render(
    <App />,
    container,
    () => chronoscope(container)
);
```

# Authors
[Jason Huang](https://github.com/jhmoon999)</br>
[Jimmy Mei](https://github.com/Jimmei27)</br>
[Matt Peters](https://github.com/mgpeters)</br>
[Sergiy Alariki](https://github.com/Serrzhik)</br>
[Vinh Chau](https://github.com/Vchau511)


</p>
