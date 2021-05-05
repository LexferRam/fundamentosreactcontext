import "./App.css";
import Profile from "./components/Profile";
import UserList from "./components/UserList";
import Login from "./components/Login";
import Home from "./components/Home";
//CONTEXT
import UserState from "./context/User/UserState";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <UserState>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div> */}
          <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Router>
          {/* <Login /> */}
        </div>
      </div>
    </UserState>
  );
}

export default App;
