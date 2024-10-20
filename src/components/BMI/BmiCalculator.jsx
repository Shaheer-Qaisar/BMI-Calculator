// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import icon from "../../img/icon.png"

// function BmiCalculator() {

//     const [weight, setWeight] = useState(60);
//     const [height, setHeight] = useState(175);
//     const [bmi, setBmi] = useState(null);
//     const [condition, setCondition] = useState('');
//     const [suggestion, setSuggestion] = useState('');
//     const [cm, setCm] = useState(true);
//     const [foot, setFoot] = useState();
//     const [inch, setInch] = useState();
//     const [kg, setkg] = useState(true);
//     const [pound, setPounds] = useState(false);
//     const [unit, setUnit] = useState("kg");
//     const [hUnit, sethUnit] = useState("cm");

//     function addValue(setter, value) {
//         setter(prev => prev + value);
//     }

//     function subValue(setter, value) {
//         setter(prev => prev - value);
//     }

//     const calculateBmi = () => {

//         if (pound) {
//             setPounds(weight * 0.45)
//             if (cm) {

//                 if (isNaN(pound) || isNaN(height) || height <= 0 || weight <= 0 || pound <= 0) {
//                     setBmi("Invalid Input")
//                     setCondition("")
//                     setSuggestion("")
//                     return
//                 } else {
//                     sethUnit("cm")
//                     let heightInMeters = height / 100
//                     let bmi = pound / (heightInMeters * heightInMeters)
//                     setBmi(bmi.toFixed(2));
//                     if (bmi < 18) {
//                         setCondition('UnderWeight')
//                         setSuggestion('You should consider gaining some weight.')
//                     } else if (bmi > 18 && bmi < 25) {
//                         setCondition('Normal')
//                         setSuggestion('Keep up the good work!')
//                     } else if (bmi > 25 && bmi < 30) {
//                         setCondition('Overweight')
//                         setSuggestion('Consider a balanced diet and exercise.')
//                     } else {
//                         setCondition('Obesity')
//                         setSuggestion('Consult a healthcare provider for advice.')
//                     }
//                 }


//             } else if (foot) {

//                 if (isNaN(pound) || isNaN(height) || height <= 0 || weight <= 0 || pound <= 0) {
//                     setBmi("Invalid Input");
//                     setCondition("");
//                     setSuggestion("");
//                     return
//                 } else {
//                     sethUnit("foot")
//                     let heightInFoot;
//                     heightInFoot = height / 3.281;

//                     let bmi = pound / (heightInFoot * heightInFoot)
//                     setBmi(bmi.toFixed(2));

//                     if (bmi < 18) {
//                         setCondition('UnderWeight')
//                         setSuggestion('You should consider gaining some weight.')
//                     } else if (bmi > 18 && bmi < 25) {
//                         setCondition('Normal')
//                         setSuggestion('Keep up the good work!')
//                     } else if (bmi > 25 && bmi < 30) {
//                         setCondition('Overweight')
//                         setSuggestion('Consider a balanced diet and exercise.')
//                     } else {
//                         setCondition('Obesity')
//                         setSuggestion('Consult a healthcare provider for advice.')
//                     }
//                 }

//             } else if (inch) {

//                 if (isNaN(pound) || isNaN(height) || height <= 0 || weight <= 0 || pound <= 0) {
//                     setBmi("Invalid Input");
//                     setCondition("");
//                     setSuggestion("");
//                     return
//                 } else {
//                     sethUnit("Inch")

//                     let heightInInch = height / 39.37;

//                     let bmi = pound / (heightInInch * heightInInch)
//                     setBmi(bmi.toFixed(2));

//                     if (bmi < 18) {
//                         setCondition('UnderWeight')
//                         setSuggestion('You should consider gaining some weight.')
//                     } else if (bmi > 18 && bmi < 25) {
//                         setCondition('Normal')
//                         setSuggestion('Keep up the good work!')
//                     } else if (bmi > 25 && bmi < 30) {
//                         setCondition('Overweight')
//                         setSuggestion('Consider a balanced diet and exercise.')
//                     } else {
//                         setCondition('Obesity')
//                         setSuggestion('Consult a healthcare provider for advice.')
//                     }
//                 }
//             }

//         } else if (kg) {
//             if (cm) {

//                 if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
//                     setBmi("Invalid Input");
//                     setCondition("");
//                     setSuggestion("");
//                     return
//                 } else {
//                     sethUnit("cm")
//                     let heightInMeters = height / 100
//                     let bmi = weight / (heightInMeters * heightInMeters)
//                     setBmi(bmi.toFixed(2));
//                     if (bmi < 18) {
//                         setCondition('UnderWeight')
//                         setSuggestion('You should consider gaining some weight.')
//                     } else if (bmi > 18 && bmi < 25) {
//                         setCondition('Normal')
//                         setSuggestion('Keep up the good work!')
//                     } else if (bmi > 25 && bmi < 30) {
//                         setCondition('Overweight')
//                         setSuggestion('Consider a balanced diet and exercise.')
//                     } else {
//                         setCondition('Obesity')
//                         setSuggestion('Consult a healthcare provider for advice.')
//                     }
//                 }


//             } else if (foot) {

//                 if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
//                     setBmi("Invalid Input");
//                     setCondition("");
//                     setSuggestion("");
//                     return
//                 } else {
//                     sethUnit("foot")
//                     let heightInFoot;
//                     heightInFoot = height / 3.281;

//                     let bmi = weight / (heightInFoot * heightInFoot)
//                     setBmi(bmi.toFixed(2));

//                     if (bmi < 18) {
//                         setCondition('UnderWeight')
//                         setSuggestion('You should consider gaining some weight.')
//                     } else if (bmi > 18 && bmi < 25) {
//                         setCondition('Normal')
//                         setSuggestion('Keep up the good work!')
//                     } else if (bmi > 25 && bmi < 30) {
//                         setCondition('Overweight')
//                         setSuggestion('Consider a balanced diet and exercise.')
//                     } else {
//                         setCondition('Obesity')
//                         setSuggestion('Consult a healthcare provider for advice.')
//                     }
//                 }

//             } else if (inch) {

//                 if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
//                     setBmi("Invalid Input");
//                     setCondition("");
//                     setSuggestion("");
//                     return
//                 } else {
//                     sethUnit("Inch")

//                     let heightInInch = height / 39.37;

//                     let bmi = weight / (heightInInch * heightInInch)
//                     setBmi(bmi.toFixed(2));

//                     if (bmi < 18) {
//                         setCondition('UnderWeight')
//                         setSuggestion('You should consider gaining some weight.')
//                     } else if (bmi > 18 && bmi < 25) {
//                         setCondition('Normal')
//                         setSuggestion('Keep up the good work!')
//                     } else if (bmi > 25 && bmi < 30) {
//                         setCondition('Overweight')
//                         setSuggestion('Consider a balanced diet and exercise.')
//                     } else {
//                         setCondition('Obesity')
//                         setSuggestion('Consult a healthcare provider for advice.')
//                     }
//                 }
//             }

//         }
//     }


//     return (
//         <>

//             <div style={{ backgroundColor: "rgba(18, 0, 27, 1)", margin: "0px", padding: "0px", height: "58rem" }}>
//                 <div
//                     style={{ margin: "0px", padding: "0" }}>
//                     <div className="text-center   custom-borderRadius " >
//                         <h1 className="text-white pt-2 pb-2">BMI Calculator</h1>
//                     </div>
//                     <div className='d-flex justify-content-center mb-3'>
//                         <img src={icon} alt='Icon' height={"200px"} width={"200px"} />
//                     </div>

//                     <div className="row d-flex justify-content-evenly m-0">
//                         <div className=" mb-3 d-flex flex-column justify-content-center  align-items-center  rounded-2 "
//                             style={{ backgroundColor: "rgba(26, 31, 56, 1)", width: "150px", textAlign: "center", alignItems: "center", }}
//                         >
//                             <div className="d-flex">
//                                 <div id="weightDiv">
//                                     <h3 className="text-white mb-2 fs-5">WEIGHT {unit}</h3>
//                                 </div>

//                                 {/* <div className="dropdown p-0">
//                                     <button className="btn  dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "transparent", color: "white", marginTop: "-5px", border: "none" }}>
//                                     </button>
//                                     <ul className="dropdown-menu dropdown-menu-dark">
//                                         <li>
//                                             <button
//                                                 className="dropdown-item btn " id="kgBtn" style={{ border: "none", backgroundColor: "transparent", color: "white" }} onClick={() =>  {setkg(true) ; setPounds(false) }}>kg
//                                             </button>
//                                         </li>
//                                         <li>
//                                             <button
//                                                 className="dropdown-item btn" id="poundBtn" style={{ border: "none", backgroundColor: "transparent", color: "white" }} onClick={() =>  {setPounds(true) ; setkg(false) }}>pound
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 </div> */}

//                                 <div className="dropdown p-0">
//                                     <button className="btn  dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "transparent", color: "white", marginTop: "-5px", border: "none" }}>
//                                     </button>
//                                     <ul className="dropdown-menu dropdown-menu-dark">
//                                         <li><button className="dropdown-item btn " id="cmBtn" style={{ border: "none", backgroundColor: "transparent", color: "white" }} onClick={() => {setkg(true);setPounds(false);setUnit("kg")}}>kg</button></li>
//                                         <li><button className="dropdown-item btn" id="inchBtn" style={{ border: "none", backgroundColor: "transparent", color: "white" }} onClick={() => {setPounds(true);setkg(false);setUnit("pounds")}}>pounds</button></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="d-flex flex-column">
//                                 <input
//                                     type="number"
//                                     id="weightInp"
//                                     className="form-control fs-2   align-self-center text-white m-3 custom-input border"
//                                     value={weight}
//                                     style={{ backgroundColor: "transparent", width: "80px", border: "none", textAlign: "center", marginLeft: "-10px" }}
//                                     onChange={(e) => setWeight(e.target.value)}
//                                 />
//                                 <div className="d-flex justify-content-space-evenly me-3">
//                                     <button
//                                         className="custom-btn ms-4 btn border-0 text-light"
//                                         onClick={() => subValue(setWeight, 1)}
//                                     >
//                                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM7.01613 17.4194C7.01613 17.4194 6.29032 17.0927 6.29032 16.6935V13.3065C6.29032 12.9073 6.61694 12.5806 7.01613 12.5806H22.9839C23.3831 12.5806 23.7097 12.9073 23.7097 13.3065V16.6935C23.7097 17.0927 23.3831 17.4194 22.9839 17.4194C22.9839 17.4194 7.41532 17.4194 7.01613 17.4194Z" fill="#E5E5E5" />
//                                         </svg>
//                                     </button>

//                                     <button className="custom-btn btn border-0 text-light"
//                                         onClick={() => addValue(setWeight, 1)}
//                                     >
//                                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM23.7097 16.6935C23.7097 17.0927 23.3831 17.4194 22.9839 17.4194H17.4194V22.9839C17.4194 23.3831 17.0927 23.7097 16.6935 23.7097H13.3065C12.9073 23.7097 12.5806 23.3831 12.5806 22.9839V17.4194H7.01613C6.61694 17.4194 6.29032 17.0927 6.29032 16.6935V13.3065C6.29032 12.9073 6.61694 12.5806 7.01613 12.5806H12.5806V7.01613C12.5806 6.61694 12.9073 6.29032 13.3065 6.29032H16.6935C17.0927 6.29032 17.4194 6.61694 17.4194 7.01613V12.5806H22.9839C23.3831 12.5806 23.7097 12.9073 23.7097 13.3065V16.6935Z" fill="#E5E5E5" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-md-5 mb-3 d-flex flex-column justify-content-center  align-items-center p-3  rounded-2 "
//                             style={{ backgroundColor: "rgba(26, 31, 56, 1)", width: "150px", textAlign: "center", alignItems: "center", }}
//                         >
//                             <div className="d-flex">
//                                 <div className="heightDiv">
//                                     <h3 className="text-white mb-2 fs-5">HEIGHT {hUnit}</h3>
//                                 </div>

//                                 <div className="dropdown p-0">
//                                     <button className="btn  dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "transparent", color: "white", marginTop: "-5px", border: "none" }}>
//                                     </button>
//                                     <ul className="dropdown-menu dropdown-menu-dark">
//                                         <li><button className="dropdown-item btn " id="cmBtn" style={{ border: "none", backgroundColor: "transparent", color: "white" }} onClick={() => { setCm(true); setFoot(false); setInch(false) }}>cm</button></li>
//                                         <li><button className="dropdown-item btn" id="inchBtn" style={{ border: "none", backgroundColor: "transparent", color: "white" }} onClick={() => { setInch(true); setCm(false); setFoot(false) }}>inch</button></li>
//                                         <li><button className="dropdown-item btn" id="footBtn" style={{ border: "none", backgroundColor: "transparent", color: "white" }} onClick={() => { setFoot(true); setCm(false); setInch(false) }}>foot</button></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="d-flex flex-column">
//                                 <input
//                                     type="number"
//                                     id="heightInp"
//                                     className="form-control fs-2   align-self-center text-white m-3 custom-input border"
//                                     value={height}
//                                     style={{ backgroundColor: "transparent", width: "80px", border: "none", textAlign: "center", marginLeft: "-10px" }}
//                                     onChange={(e) => setHeight(e.target.value)}
//                                 />
//                                 <div className="d-flex justify-content-space-evenly me-3">
//                                     <button
//                                         className="custom-btn ms-4 btn border-0 text-light"
//                                         onClick={() => subValue(setHeight, 1)}
//                                     >
//                                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM7.01613 17.4194C7.01613 17.4194 6.29032 17.0927 6.29032 16.6935V13.3065C6.29032 12.9073 6.61694 12.5806 7.01613 12.5806H22.9839C23.3831 12.5806 23.7097 12.9073 23.7097 13.3065V16.6935C23.7097 17.0927 23.3831 17.4194 22.9839 17.4194C22.9839 17.4194 7.41532 17.4194 7.01613 17.4194Z" fill="#E5E5E5" />
//                                         </svg>
//                                     </button>

//                                     <button className="custom-btn btn border-0 text-light"
//                                         onClick={() => addValue(setHeight, 1)}
//                                     >
//                                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM23.7097 16.6935C23.7097 17.0927 23.3831 17.4194 22.9839 17.4194H17.4194V22.9839C17.4194 23.3831 17.0927 23.7097 16.6935 23.7097H13.3065C12.9073 23.7097 12.5806 23.3831 12.5806 22.9839V17.4194H7.01613C6.61694 17.4194 6.29032 17.0927 6.29032 16.6935V13.3065C6.29032 12.9073 6.61694 12.5806 7.01613 12.5806H12.5806V7.01613C12.5806 6.61694 12.9073 6.29032 13.3065 6.29032H16.6935C17.0927 6.29032 17.4194 6.61694 17.4194 7.01613V12.5806H22.9839C23.3831 12.5806 23.7097 12.9073 23.7097 13.3065V16.6935Z" fill="#E5E5E5" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {condition && suggestion && bmi && (
//                         <div className="text-center rounded-2 mt-0 custom-borderRadius p-2 mb-4 mx-4" style={{ backgroundColor: "rgba(26, 31, 56, 1)" }} >

//                             <h3 id="condition"
//                                 className={`text-center ${condition == "Normal" ? "text-success" : condition == "Obesity" ? "text-danger" : "text-warning"}`} >{condition}</h3>
//                             <h1 id="resultValue" className="text-white text-center">{bmi}</h1>
//                             <p id="suggestion" className="text-white text-center" style={{ fontSize: "20px" }}>{suggestion}</p>
//                         </div>
//                     )
//                     }

//                     <div className='d-grid gap-2 col-12  ' style={{ marginTop: "30px" }}>


//                         <button className="custom-btn btn  bg-danger p-3 text-light m-3 "
//                             style={{ fontSize: "20px", borderRadius: "30px" }}
//                             onClick={calculateBmi}>CALCULATE</button>
//                     </div>

//                 </div>

//             </div>
//             <div className='text-center align-items-end text-light' style={{ backgroundColor: "rgba(18, 0, 27, 1)", marginTop: "-4rem" }}>
//                 <p>Copyright © 2024. Designed By Shaheer</p>
//             </div>
//         </>
//     )
// }

// export default BmiCalculator
import React, { useState } from 'react';
import icon from "../../img/icon.png";

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
            <div style={{ backgroundColor: "rgba(18, 0, 27, 1)", margin: "0px", padding: "0px", height: "100vh" }}>
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
