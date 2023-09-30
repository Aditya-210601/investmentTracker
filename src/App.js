import logo from './assets/investment-calculator-logo.png';
import './App.css';
import Calculator from './components/Calculator';
import Report from './components/Report';
import {useState} from "react";

function App() {

  const [data, setData] = useState([]);
  function dataUpdater(list){
    setData(list);
    console.log(data);
  };
  return (
    <div>
        <header className='header'>
          <img src={logo} />
          <h1>Investment Calculator</h1>
        </header>
        <Calculator onSubmit={dataUpdater}/>
        <Report />
    </div>
  );
}

export default App;
