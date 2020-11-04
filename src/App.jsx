import React, { Component } from 'react';
import "./style/style.scss";
import {
  Route,
  Switch,
  Redirect,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import configureStore from './store';
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import CasePicker from './containers/case_picker_container';
import Case from './containers/case_container';
import ReactDOM from 'react';

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
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/csv-mapper">CSV Mapper</Link>
                </li>
                <li>
                  <Link to="/app/cases">Dashboard</Link>
                </li>
              </ul>
            </nav>
            <hr />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/csv-mapper">
                <CsvMapper />
              </Route>
              <Route path={[
                "/app/cases",
                "/app/c/:caseId"
                ]}
                children={(props) => <CasePicker {...props}/>}
              />
            </Switch>
          </div>
          <Route
            path="/app/c/:caseId"
            component={Case}
          />
        </Router>
      </Provider>
    );
  }
}
function Home() {
  const home= (
    <div className='landing-text'>
      <h2>Placeholder for landing page text</h2>
    </div>
  );
  return home;
}

function CsvMapper() {
  return (
    <div className='landing-text'>
      <h2>Placeholder for redirect to csv mapping tool</h2>
    </div>
  );
}

