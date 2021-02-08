import React, { Component } from 'react';
import "./style/style.scss";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import configureStore from './store';
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import CasePicker from './containers/case_picker_container';
import Case from './containers/case_container';
import CsvIngest from './components/csv_ingest/csv-ingest'

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
const initialState = {}
const store = configureStore(initialState);

export default class App extends Component {
  state = {
    isExplorerVisible: false,
    exploreFieldId: 'decedent'
  }

  handleSwitchChange = () => {
    this.setState({
      isExplorerVisible: !this.state.isExplorerVisible
    });
  }

  handleFieldClick = (id) => {
    this.setState({
      exploreFieldId: id
    })
  }

  render() {
    const { isExplorerVisible, exploreFieldId } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              path="/app/c/:caseId"
              render={(props) => (
                <Case {...props}
                  handleFieldClick={this.handleFieldClick}
                  handleSwitchChange={this.handleSwitchChange}
                  isExplorerVisible={this.state.isExplorerVisible}
                  explore={this.state.exploreFieldId}
                  />
              )}
            />
            <Route
              path="/app/csv"
              exact
              render={(props) => (
                <CsvIngest {...props}/>
              )}
            />
            <Redirect exact from="/app" to="/app/cases" />
            <Redirect exact from="/" to="/app/cases" />
            <Route path="*">
                <h1>404 Page Undefined - 
                  <a href="/"> Return Home</a>
                </h1>
            </Route>
          </Switch>
          <Route
              path={["/app/cases","/app/c/:caseId"]}
              render={(props) => <CasePicker {...props}/>}
            />
        </Router>
      </Provider>
    );
  }
}
