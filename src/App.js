import logo from './assets/investment-calculator-logo.png';
import './App.css';
import Calculator from './components/Calculator';
import Report from './components/Report';
import {useState} from "react";
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

function App() {
  const targetRef1 = useRef();
  const targetRef2 = useRef();

  const [data, setData] = useState([]);
  function dataUpdater(list){
    setData(list);
  };
  return (
    <div ref={targetRef1}>
        <header className='header'>
          <img src={logo} />
          <h1>Investment Calculator</h1>
        </header>
        <Calculator onSubmit={dataUpdater} va="Hi"/>
        <center>
          <button className='button' onClick={()=>generatePDF(targetRef1,{filename:"Complete Report.pdf"})}>Download Page</button>
          <button className='button' onClick={()=>generatePDF(targetRef2,{filename:"Report.pdf"})}>Download Report</button>
        </center>
        <div ref={targetRef2}>
          <Report data={data} />
        </div>
    </div>
  );
}

export default App;
