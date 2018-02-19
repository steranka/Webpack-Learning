import React from 'react';
import { render } from 'react-dom';

//console.log('in app.js');
import './app.scss';

class App extends React.Component {
    render() {
        return <p>Hello React!</p>;
    }
}

render(<App/>, document.getElementById('root'));

