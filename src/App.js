import React, { Component } from 'react';
import './scss/App.css';
import GlobalHeader from '../src/static/GlobalHeader'
import GlobalFooter from '../src/static/GlobalFooter'
import SitesContainer from '../src/sites/SiteContainer'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <SitesContainer />
        <GlobalFooter />
      </div>
    );
  }
}

export default App;
