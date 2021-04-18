import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Main from './components/Main/Main'
import {UsersStats} from './components/Stats/Stats'

// import logo from './logo.svg';
// import './App.css';


export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
        </ul>

        <hr />

<Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/stats">
            <UsersStats />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// function Header() {
//   return (
//     <div>
//       <h2>
//         Header
//       </h2>
//     </div>
//   );
// }

function Charts() {
  return (
    <div>
      <h2>Charts</h2>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

// export default App;
