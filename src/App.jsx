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

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
const initialState = {}
const store = configureStore(initialState);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleFieldClick = this.handleFieldClick.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }
  
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
          <Route
            path={[
              "/app/cases",
              "/app/c/:caseId"
            ]}
            children={(props) => <CasePicker {...props}/>}
          />
          <Route
            path="/app/c/:caseId"
            component={Case}
          />
        </Router>
      </Provider>
    );
  }
}
