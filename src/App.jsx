import React from 'react';
// Import here the components that you wanna test
// import Button from './components/Button';
import Thunderballoon from './components/Thunderballoon';

import './App.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Vandebron styleguide - Dev playground</h1>
    </header>

    {/* Insert your components below this line */}
    <Thunderballoon side="top" arrow="right" corner="right" classValue="__yellow __medium">
      <div className="content">
        Hans heeft nu<br />
        naast bio-energie <br />
        ook geïnvesteerd in <br />
        zonne-energie.<br />
      </div>
    </Thunderballoon>
  </div>
);

export default App;
