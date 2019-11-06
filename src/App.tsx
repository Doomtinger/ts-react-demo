import * as React from 'react';
import './App.less';
import Index from './router';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Index />
      </div>
    );
  }
}

export default App;