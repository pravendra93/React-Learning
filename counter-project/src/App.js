import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import List from "./components/List"
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter />
       <List />
      </header>
    </div>
  );
}

export default App;
