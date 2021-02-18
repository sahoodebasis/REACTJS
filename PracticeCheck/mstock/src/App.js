import logo from './logo.svg';
import './App.css';
import MenuComponent from '../src/Components/menucomponent';
import CompaniesListComponent from './Components/companieslistcomponent';
import LoginComponent from './Components/logincomponent';
import {WatchList} from './Components/watchlistcomponent'
import {Route,Switch} from 'react-router-dom';
import PerformanceComponentForm from './Components/performanceComponentform';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/companies" render={(props) => (
    <CompaniesListComponent {...props} isLoggedIn={true} />
  )}/>
   <Route exact path="/companiesanon" render={(props) => (
    <CompaniesListComponent {...props} isLoggedIn={false} />
  )}/>
  {/* <Route exact path="/companies" component={CompaniesListComponent}/> */}
      <Route exact path="/users" component={LoginComponent}/>
      <Route exact path="/" component={LoginComponent}/>
      <Route exact path="/watchList" component={WatchList}/>
      <Route exact path="/stocks/compare-performance" component={PerformanceComponentForm}/>
      </Switch>
    </div>
  );
}

export default App;
