import React, { Component } from 'react';
import "./style/style.scss";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import NavTop from './components/nav-top';
import NavBottom from './components/nav-bottom';
import FhirExplorer from './components/fhir-explorer';
import Case from './components/case/index';
import Investigation from './components/investigation/index';
import Morgue from './components/morgue/index';

export default class App extends Component {
  state = {
    isExplorerVisible: true
  }

  handleSwitchChange = () => {
    this.setState({
      isExplorerVisible: !this.state.isExplorerVisible
    });
  }

  render() {
    const { isExplorerVisible } = this.state;
    return (
      <Router>
        {/* Make navs dynamic with all pages... */}
        <NavTop
          isExplorerVisible={isExplorerVisible}
          handleSwitchChange={() => this.handleSwitchChange()}/>
        <NavBottom/>
        <div className="workspace">
          <div className={`left ${isExplorerVisible ? 'explorer-visible' : ''}`}>
            <Switch>
              {/* use redux or context to avoid prop dripping as seen below... */}
              <Route
                path="/case"
                render={() => <Case explore={isExplorerVisible}/>}
              />

              <Route path="/investigation" component={Investigation}/>
              <Route path="/morgue" component={Morgue}/>
              <Redirect to="/case"/>
            </Switch>
          </div>
          <FhirExplorer visible={isExplorerVisible}/>
        </div>
      </Router>
    );
  }
}
