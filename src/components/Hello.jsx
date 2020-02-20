import React, { useState, useEffect } from 'react';

export const Hello = (props) => {
    const [greeting, setGreeting] = useState('Hello World');

    useEffect(() => {
        console.log('UseEffect triggered');
    });

    return (
        <div>
            <h1>{greeting}</h1>,
            <button onClick={() => setGreeting(greeting + 'Hahahaha')}>Change Greeting</button>
        </div>
    )
};