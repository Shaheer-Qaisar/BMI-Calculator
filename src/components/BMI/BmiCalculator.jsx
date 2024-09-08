import React from 'react'
import { useState } from 'react'
import icon from "../../img/icon.png"

function BmiCalculator() {

    const [weight, setWeight] = useState(60);
    const [height, setHeight] = useState(175);
    const [bmi, setBmi] = useState(null);
    const [condition, setCondition] = useState('');
    const [suggestion, setSuggestion] = useState('');
    // const [foot, setFoot] = useState(false);

    function addValue(setter, value) {
        setter(prev => prev + value);
    }

    function subValue(setter, value) {
        setter(prev => prev - value);
    }

    
    // if(foot){
    //     console.log("this is foot")
    //    }else if(inch){
    //     console.log("no")
    //    }


    const calculateBmi = () => {

        if (isNaN(weight) || isNaN(height) || height <= 0) {
            setBmi("Invalid Input");
            setCondition("");
            setSuggestion("");
            return
        }

        let heightInMeters = height / 100

        let bmi = weight / (heightInMeters * heightInMeters)
        setBmi(bmi.toFixed(2));
        if (bmi < 18) {
            setCondition('UnderWeight')
            setSuggestion('You should consider gaining some weight.')
        } else if (bmi > 18 && bmi < 25) {
            setCondition('Normal')
            setSuggestion('Keep up the good work!')
        } else if (bmi > 25 && bmi < 30) {
            setCondition('Overweight')
            setSuggestion('Consider a balanced diet and exercise.')
        } else {
            setCondition('Obesity')
            setSuggestion('Consult a healthcare provider for advice.')
        }
    }
    return (
        <>

            <div className="d-flex justify-content-center align-items-center ">
                <div 
                    style={{ backgroundColor: "rgba(0, 0, 0, 1)", width: "100%" }}>
                    <div className="text-center   custom-borderRadius mt-5 mb-3" >
                        <h1 className="text-white">BMI Calculator</h1>
                    </div>
                    <div className='d-flex justify-content-center mb-5'>
                        <img src={icon} alt='Icon' height={"200px"} width={"200px"}/>
                    </div>
                    {/* <button onClick={(e)=>setFoot(true)}>foot</button> */}

                    <div className="row d-flex justify-content-evenly mb-4"                >
                        <div className="col-md-5 mb-3 d-flex flex-column justify-content-center border align-items-center p-3 ms-4 rounded-2 border-white"
                            style={{ width: "150px", textAlign: "center", alignItems: "center" }}
                        >
                            <h3 className="text-white mb-2 fs-5">WEIGHT (kg)</h3>
                            <div className="d-flex flex-column justify-content-center">
                                <input
                                    type="number" 
                                    id="weightInp"
                                    className=" form-control fs-4    align-self-center text-white  m-3 custom-input border"
                                    value={weight}
                                    style={{ backgroundColor: "transparent", width: "80px", border: "none", textAlign: "left", marginLeft: "-10px" }}
                                    onChange={(e) => setWeight(e.target.value)}

                                />
                                <div className="d-flex align-self-center justify-content-space-evenly">
                                    <button
                                        className="custom-btn btn border-0 text-light"
                                        onClick={() => subValue(setWeight, 1)}
                                    >
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM7.01613 17.4194C7.01613 17.4194 6.29032 17.0927 6.29032 16.6935V13.3065C6.29032 12.9073 6.61694 12.5806 7.01613 12.5806H22.9839C23.3831 12.5806 23.7097 12.9073 23.7097 13.3065V16.6935C23.7097 17.0927 23.3831 17.4194 22.9839 17.4194C22.9839 17.4194 7.41532 17.4194 7.01613 17.4194Z" fill="#E5E5E5" />
                                        </svg>
                                    </button>
                                    <button
                                        className="custom-btn btn  border-0 text-light"
                                        onClick={() => addValue(setWeight, 1)}
                                    >
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM23.7097 16.6935C23.7097 17.0927 23.3831 17.4194 22.9839 17.4194H17.4194V22.9839C17.4194 23.3831 17.0927 23.7097 16.6935 23.7097H13.3065C12.9073 23.7097 12.5806 23.3831 12.5806 22.9839V17.4194H7.01613C6.61694 17.4194 6.29032 17.0927 6.29032 16.6935V13.3065C6.29032 12.9073 6.61694 12.5806 7.01613 12.5806H12.5806V7.01613C12.5806 6.61694 12.9073 6.29032 13.3065 6.29032H16.6935C17.0927 6.29032 17.4194 6.61694 17.4194 7.01613V12.5806H22.9839C23.3831 12.5806 23.7097 12.9073 23.7097 13.3065V16.6935Z" fill="#E5E5E5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 mb-3 d-flex flex-column justify-content-center border align-items-center p-3  rounded-2 border-white"
                            style={{ width: "150px", textAlign: "center", alignItems: "center", marginRight: "18px" }}
                        >
                            <h3 className="text-white mb-2 fs-5">HEIGHT (cm)</h3>
                            <div className="d-flex flex-column">
                                <input
                                    type="number"
                                    id="heightInp"
                                    className="form-control fs-4  scroll-no  align-self-center text-white m-3 custom-input border" 
                                    value={height}
                                    style={{ backgroundColor: "transparent", width: "80px", border: "none", textAlign: "left", marginLeft: "-10px" }}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                                <div className="d-flex justify-content-space-evenly me-3">
                                    <button
                                        className="custom-btn ms-4 btn border-0 text-light"
                                        onClick={() => subValue(setHeight, 1)}
                                    >
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM7.01613 17.4194C7.01613 17.4194 6.29032 17.0927 6.29032 16.6935V13.3065C6.29032 12.9073 6.61694 12.5806 7.01613 12.5806H22.9839C23.3831 12.5806 23.7097 12.9073 23.7097 13.3065V16.6935C23.7097 17.0927 23.3831 17.4194 22.9839 17.4194C22.9839 17.4194 7.41532 17.4194 7.01613 17.4194Z" fill="#E5E5E5" />
                                        </svg>
                                    </button>

                                    <button className="custom-btn btn border-0 text-light"
                                        onClick={() => addValue(setHeight, 1)}
                                    >
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM23.7097 16.6935C23.7097 17.0927 23.3831 17.4194 22.9839 17.4194H17.4194V22.9839C17.4194 23.3831 17.0927 23.7097 16.6935 23.7097H13.3065C12.9073 23.7097 12.5806 23.3831 12.5806 22.9839V17.4194H7.01613C6.61694 17.4194 6.29032 17.0927 6.29032 16.6935V13.3065C6.29032 12.9073 6.61694 12.5806 7.01613 12.5806H12.5806V7.01613C12.5806 6.61694 12.9073 6.29032 13.3065 6.29032H16.6935C17.0927 6.29032 17.4194 6.61694 17.4194 7.01613V12.5806H22.9839C23.3831 12.5806 23.7097 12.9073 23.7097 13.3065V16.6935Z" fill="#E5E5E5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {condition && suggestion && bmi && (
                        <div className="text-left  border rounded-2 mt-0 custom-borderRadius p-2 mb-4 mx-4" >

                            <h3 id="condition" 
                                className={`text-center ${condition === "Normal" ? "text-teal-700": condition=="Obesity" ? "text-danger" : "text-light"}`} >{condition}</h3>


                            <h1 id="resultValue" className="text-white text-center">{bmi}</h1>
                            <p id="suggestion" className="text-white text-center">{suggestion}</p>
                        </div>
                    )
                    }

                    <div className='d-grid gap-2 col-12  ' style={{marginTop:"30px"}}>


                    <button className="custom-btn btn  bg-danger p-3 text-light m-3 "
                        style={{  fontSize: "20px", borderRadius:"30px" }}
                        onClick={calculateBmi}>CALCULATE</button>
                        </div>
                   <div className='text-center text-light' >
                   <p>Copyright © 2024. Designed By Shaheer</p>
                   </div>
                </div>

            </div>
        </>
    )
}

export default BmiCalculator
