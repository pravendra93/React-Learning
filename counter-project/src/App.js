// import logo from './logo.svg';
import { useState } from "react"
import './App.css';
// import Counter from './components/Counter';
// import List from "./components/List"
import UsersList from './components/UsersList';
import User from "./components/User";

function App() {
  const [userId, setUserId] = useState(1);
  const setUser = (userId) => {
    setUserId(userId)
  }
  return (
    <div className="App">
      <header className="App-header">
       {/* <Counter /> */}
       <UsersList setUser={setUser} />
       <User userId={userId}/>
      </header>
    </div>
  );
}

export default App;
