import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloWorld from './HelloWorld';
import PropsValidation from './PropsValidation';
import Events from './Events';
import Translate from './Translate';



//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

ReactDOM.render(
    //<HelloWorld txt="Olá Mundo do ReactJS"/>,
    //<PropsValidation  name="Carlos" />,
    //<Events />,
    <Translate/>,
    document.getElementById('root')
)