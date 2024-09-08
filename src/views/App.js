import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponents';

function App() {
  // JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React.js with Mean Hoang</p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
