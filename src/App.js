import logo from './assets/investment-calculator-logo.png';
import './App.css';
import Calculator from './components/Calculator';
import Report from './components/Report';


function App() {
  return (
    <div>
        <header className='header'>
          <img src={logo} />
          <h1>Investment Calculator</h1>
        </header>
        <Calculator />
        <Report />
    </div>
  );
}

export default App;
