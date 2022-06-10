import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Header2 from './components/Header2';
function App() {
  return (
    // fragment
    <>
      <div className="App">
      {/* <Header something="Pravendra" className="headerdiff" id="23"></Header> */}
      <Header2 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>

  );
}

export default App;
