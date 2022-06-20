// import logo from './logo.svg';
// import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import Counter from './components/Counter';
// import List from "./components/List"
import UsersList from './components/UsersList';
import User from "./components/User";
import Home from "./components/Home";

function App() {
  // const [userId, setUserId] = useState(1);
  // const setUser = (userId) => {
  //   setUserId(userId)
  // }
  return (
    <div className="App">
      <header className="App-header">
       {/* <Counter /> */}
       {/* <UsersList setUser={setUser} />
       <User userId={userId}/> */}
           <Router>

      <div>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/home" element={<Home/>} ></Route>
          <Route path="/about">
          </Route>
          <Route path="/users" element={<UsersList/>} >
          </Route>
           <Route path="/users/:userId" element={<User/>} >
          </Route>
        </Routes>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
