import React, { Component } from 'react';
import './scss/App.css';
import './scss/font-awesome.css';
import GlobalHeader from '../src/static/GlobalHeader'
import GlobalFooter from '../src/static/GlobalFooter'
import SiteContainer from '../src/sites/SiteContainer'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <SiteContainer />
        <GlobalFooter />
      </div>
    );
  }
}

export default App;
