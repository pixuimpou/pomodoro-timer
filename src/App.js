import './App.css';
import Watch from './components/watch'
import logo from './images/tomato.svg'

function App() {

  return (
    <>
      <header>
        <img src={logo}/>
        <h1>Pomodoro-Timer</h1>
      </header>
      <Watch></Watch>
    </>
  );
}

export default App;
