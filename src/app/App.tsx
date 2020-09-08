import React from 'react';
import './App.css';

//TODO: replace any
function App(props: any) {
    return (
        <div className="App">
            {props.children}
        </div>
    );
}

export default App;
