import React, { useState } from 'react'
import icon from "../../img/icon.png"
import { Link } from 'react-router-dom'

function BmiCalculator() {
    const [weight, setWeight] = useState(60);
    const [height, setHeight] = useState(175);
    const [bmi, setBmi] = useState(null);
    const [condition, setCondition] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [cm, setCm] = useState(true);
    const [foot, setFoot] = useState(false);
    const [inch, setInch] = useState(false);
    const [kg, setKg] = useState(true);
    const [unit, setUnit] = useState("kg");
    const [hUnit, setHUnit] = useState("cm");

    function addValue(setter, value) {
        setter(prev => prev + value);
    }

    function subValue(setter, value) {
        setter(prev => prev - value);
    }

    const calculateBmi = () => {
        let weightInKg = kg ? weight : weight * 0.453592;
        let heightInMeters;

        if (cm) {
            heightInMeters = height / 100;
        } else if (foot) {
            heightInMeters = height / 3.281;
        } else if (inch) {
            heightInMeters = height / 39.37;
        }

        if (isNaN(weightInKg) || isNaN(heightInMeters) || weightInKg <= 0 || heightInMeters <= 0) {
            setBmi("Invalid Input");
            setCondition("");
            setSuggestion("");
        } else {
            let bmiValue = weightInKg / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));

            if (bmiValue < 18) {
                setCondition('Underweight');
                setSuggestion('You should consider gaining some weight.');
            } else if (bmiValue >= 18 && bmiValue < 25) {
                setCondition('Normal');
                setSuggestion('Keep up the good work!');
            } else if (bmiValue >= 25 && bmiValue < 30) {
                setCondition('Overweight');
                setSuggestion('Consider a balanced diet and exercise.');
            } else {
                setCondition('Obesity');
                setSuggestion('Consult a healthcare provider for advice.');
            }
        }
    };

    return (
        <>
            <div style={{ backgroundColor: "rgba(18, 0, 27, 1)", margin: "0px", padding: "20px", height: "100vh" }}>
            <nav>
        <Link to="/" style={{textDecoration:"none",color:"white",backgroundColor:"orangered",padding:"10px 20px",border:"2px solid black",borderRadius:"8px",margin:"10px"}}>Back</Link>
        </nav>
                <div style={{ margin: "0px", padding: "0" }}>
                    <div className="text-center custom-borderRadius">
                        <h1 className="text-white pt-5 pb-2">BMI Calculator</h1>
                    </div>
                    <div className='d-flex justify-content-center mb-3'>
                        <img src={icon} alt='Icon' height={"200px"} width={"200px"} />
                    </div>

                    <div className="row d-flex justify-content-evenly m-0">
                        {/* Weight Section */}
                        <div className="mb-3 d-flex flex-column justify-content-center align-items-center rounded-2"
                            style={{ backgroundColor: "rgba(26, 31, 56, 1)", width: "150px", textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <h3 className="text-white mb-2 fs-5">WEIGHT ({unit})</h3>
                                </div>
                                <div className="dropdown p-0">
                                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        style={{ backgroundColor: "transparent", color: "white", marginTop: "-5px", border: "none" }}>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><button className="dropdown-item btn" onClick={() => { setKg(true); setUnit("kg"); }}>kg</button></li>
                                        <li><button className="dropdown-item btn" onClick={() => { setKg(false); setUnit("pounds"); }}>pounds</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <input
                                    type="number"
                                    className="form-control fs-2 align-self-center text-white m-3 custom-input border"
                                    value={weight}
                                    style={{ backgroundColor: "transparent", width: "80px", border: "none", textAlign: "center" }}
                                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                                />
                                <div className="d-flex justify-content-space-evenly me-3">
                                    <button className="custom-btn ms-4 btn border-0 text-light" onClick={() => subValue(setWeight, 1)}>
                                        {/* Minus Button SVG */}
                                    </button>
                                    <button className="custom-btn btn border-0 text-light" onClick={() => addValue(setWeight, 1)}>
                                        {/* Plus Button SVG */}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Height Section */}
                        <div className="col-md-5 mb-3 d-flex flex-column justify-content-center align-items-center p-3 rounded-2"
                            style={{ backgroundColor: "rgba(26, 31, 56, 1)", width: "150px", textAlign: "center" }}>
                            <div className="d-flex">
                                <div>
                                    <h3 className="text-white mb-2 fs-5">HEIGHT ({hUnit})</h3>
                                </div>
                                <div className="dropdown p-0">
                                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        style={{ backgroundColor: "transparent", color: "white", marginTop: "-5px", border: "none" }}>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><button className="dropdown-item btn" onClick={() => { setCm(true); setFoot(false); setInch(false); setHUnit("cm"); }}>cm</button></li>
                                        <li><button className="dropdown-item btn" onClick={() => { setCm(false); setFoot(false); setInch(true); setHUnit("inch"); }}>inch</button></li>
                                        <li><button className="dropdown-item btn" onClick={() => { setCm(false); setFoot(true); setInch(false); setHUnit("foot"); }}>foot</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <input
                                    type="number"
                                    className="form-control fs-2 align-self-center text-white m-3 custom-input border"
                                    value={height}
                                    style={{ backgroundColor: "transparent", width: "80px", border: "none", textAlign: "center" }}
                                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                                />
                                <div className="d-flex justify-content-space-evenly me-3">
                                    <button className="custom-btn ms-4 btn border-0 text-light" onClick={() => subValue(setHeight, 1)}>
                                        {/* Minus Button SVG */}
                                    </button>
                                    <button className="custom-btn btn border-0 text-light" onClick={() => addValue(setHeight, 1)}>
                                        {/* Plus Button SVG */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BMI Result Section */}
                    {condition && suggestion && bmi && (
                        <div className="text-center rounded-2 mt-0 custom-borderRadius p-2 mb-4 mx-4" style={{ backgroundColor: "rgba(26, 31, 56, 1)" }}>
                            <h3 className={`text-center ${condition === "Normal" ? "text-success" : condition === "Obesity" ? "text-danger" : "text-warning"}`}>
                                {condition}
                            </h3>
                            <h4 className="text-light">{suggestion}</h4>
                            <h5 className="text-white">Your BMI: {bmi}</h5>
                        </div>
                    )}

               

                    <div className='d-grid gap-2 col-12  ' style={{ marginTop: "30px" }}>


                         <button className="custom-btn btn  bg-danger p-3 text-light m-3 "
                            style={{ fontSize: "20px", borderRadius: "30px" }}
                            onClick={calculateBmi}>CALCULATE</button>
                    </div>

                </div>

            </div>
            <div className='text-center align-items-end text-light' style={{ backgroundColor: "rgba(18, 0, 27, 1)", marginTop: "-4rem" }}>
                <p>Copyright © 2024. Designed By Shaheer</p>
            </div>
                
        
        </>
    );
}

export default BmiCalculator;
