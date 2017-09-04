import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeddingCountdown from './WeddingCountdown';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WeddingCountdown />, document.getElementById('root'));
registerServiceWorker();
