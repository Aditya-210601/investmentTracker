import {useState} from "react";


const Calculator = (props) => {

    const [cs,setCS] = useState(0);
    const [ys,setYS] = useState(0);
    const [roi,setROI] = useState(0.0);
    const [time,setTime] = useState(0);

    function currentSavingHandler(e){    
        if(isNaN(e.target.value)){
            window.alert("Enter only numeric value");
            setCS(0);
            document.getElementById("CS").value = "";
        }
        else
            {
                setCS(e.target.value);
            }
    };


    function yearlySavingHandler(e){    
        if(isNaN(e.target.value)){
            window.alert("Enter only numeric value");
            setYS(0);
            document.getElementById("YS").value = "";
        }
        else
            {
                setYS(e.target.value);
            }
    };
    

    function ROIHandler(e){    
        if(isNaN(e.target.value)){
            window.alert("Enter only numeric value");
            setROI(0);
            document.getElementById("ROI").value = "";
        }
        else
            {
                setROI(e.target.value);
            }
    };
    

    function durationHandler(e){    
        if(isNaN(e.target.value)){
            window.alert("Enter only numeric value");
            setTime(0);
            document.getElementById("time").value = "";
        }
        else
            {
                setTime(e.target.value);
            }
    };
    
    function resetHandler(){
        setCS(0);
        setYS(0);
        setROI(0);
        setTime(0);
        props.onSubmit([]);
    };

    function submitHandler(e){
        e.preventDefault();
        let si = 0;
        let total_interest=0;
        let CS=parseInt(cs);
        const list = [];

        for(let i=1;i<=time;i++)
        {
            si = (CS*roi)/100;
            CS = (CS+parseInt(ys)+si);
            total_interest+=si;

            let jsonObject = {
                "key":i,
                "year":i,
                "Total Saving":CS,
                "Interest":si,
                "Total Interest":total_interest,
                "Invested Capital":(CS-si)
            };
            list.push(jsonObject);    
            
        }
        props.onSubmit(list);
    };
    return (
        <form className="form" onSubmit={submitHandler} autoComplete="off">
            <div className="input-group">
                <p>
                    <label>CURRENT SAVING($)</label>
                    <input type="text" onChange={currentSavingHandler} id="CS"/>
                </p>
                <p>
                    <label>YEARLY SAVING($)</label>
                    <input type="text" onChange={yearlySavingHandler} id="YS"/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED INTEREST(% PER YEAR)</label>
                    <input type="text" onChange={ROIHandler} id="ROI"/>
                </p>
                <p>
                    <label>INVESTMENT DURATION(YEARS)</label>
                    <input type="text" onChange={durationHandler} id="Time"/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetHandler}>Reset</button>
                <button type="Submit" className="button">Calculate</button>
            </p>
        </form>
    );
};

export default Calculator;