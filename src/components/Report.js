
const Report = (props) => {
    
    return (
        <div>
            <table className="result">
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Total Savings</td>
                        <td>Interest (Year)</td>
                        <td>Total Interest</td>
                        <td>Invested Capital</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        (props.data).map(obj=>(
                            <tr>
                                <td>{obj["year"]}</td>
                                <td>{obj["Total Saving"].toFixed(2)}</td>
                                <td>{obj["Interest"].toFixed(2)}</td>
                                <td>{obj["Total Interest"].toFixed(2)}</td>
                                <td>{obj["Invested Capital"].toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Report;