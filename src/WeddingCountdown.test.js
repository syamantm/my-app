import React from 'react';
import ReactDOM from 'react-dom';
import WeddingCountdown from './WeddingCountdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeddingCountdown />, div);
});
