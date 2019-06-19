import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'

import Routes from './routes';
import config from './service'

import './styles/index.css';

firebase.initializeApp(config) 

ReactDOM.render(<Routes/>, document.getElementById('root'));
