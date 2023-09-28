
const Calculator = () => {
    return (
        <form className="form">
            <div className="input-group">
                <p>
                    <label>CURRENT SAVING($)</label><br/>
                    <input type="text" />
                </p>
                <p>
                    <label>YEARLY SAVING($)</label>
                    <input type="text" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED INTEREST(% PER YEAR)</label>
                    <input type="text" />
                </p>
                <p>
                    <label>INVESTMENT DURATION(YEARS)</label>
                    <input type="text" />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt">Reset</button>
                <button type="Submit" className="button">Calculate</button>
            </p>
        </form>
    );
};

export default Calculator;