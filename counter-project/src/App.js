import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
// import List from "./components/List"
import UsersList from './components/UsersList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter />
       <UsersList />
      </header>
    </div>
  );
}

export default App;
