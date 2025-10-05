import { useState } from "react";
import "./bmi.css";
function BMICalculator() {
    const [weight, setweight] = useState("");
    const [height, setheight] = useState("");
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        const h = height / 100;
        const bmivalue = weight / (h * h);
        setBmi(bmivalue);
    };

    return (
        <div className="bmi-calculator">
            <div className="bmi-form">


                <h2 >BMI Calculator</h2>
                <div className="inputs">
                    <input type="number"
                        placeholder="Weight (kg)"
                        value={weight}
                        onChange={(e) => setweight(e.target.value)}
                    />
                    <input type="number"
                        placeholder="height (cm)"
                        value={height}
                        onChange={(e) => setheight(e.target.value)}

                    />
                    <button onClick={calculateBMI}
                        className="calculate-button">Calculate BMI</button>
                </div>
                {bmi && <p>Your BMI is: {bmi.toFixed(2)}</p>}
            </div>
        </div>
    )

}
export default BMICalculator
