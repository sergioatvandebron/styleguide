import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Button from './components/Button';
import Paragraph from './components/Paragraph';
import Heading from './components/Heading';
import Label from './components/Label';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export default {
  Button,
  Paragraph,
  Heading,
  Label
}
