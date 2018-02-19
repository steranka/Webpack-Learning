import React from 'react';
import { render } from 'react-dom';

//console.log('in app.js');
import './app.scss';

class App extends React.Component {
    render() {
        return <p>Hello React! Ain't that great</p>;
    }
}

render(<App/>, document.getElementById('root'));

