import React, { useState } from "react";
import "./Form.css";

const Form = () => {
    const [Fn,setFn]=useState("");
    const [Ln,setLn]=useState("");
    const [age,setAge]=useState();
    const [month,setMonth]=useState();
    const [batches,setBatches]=useState();
    const [fees,setFees]=useState();





    const ChangeFN=(event)=>{
        setFn(event.target.value)

    }
    const ChangeLN=(event)=>{
        setLn(event.target.value)

    }
    const ChangeAge=(event)=>{
        setAge(event.target.value)

    }
    const ChangeMonth=(event)=>{
        setMonth(event.target.value)
    }

    const ChangeBatches=(event)=>{
        setBatches(event.target.value)
    }

    const ChangeFees=(event)=>{
        setFees(event.target.value)
    }

    const data={
        first_name:Fn,
        last_name:Ln,
        Age:age,
        Month:month,
        Batches:batches,
        Fees:fees

    };

    const btnChange=()=>{
      console.log(data);
    }

    // console.log(data);








  return (
    <div>
      <div className="Form-bg">
        <div className="form-content">
          <h3 class="form__title">Enroll Form </h3>
          <div className="form__wrapper">
            <div className="form__group">
              <label>First Name</label>
              <input type="text" id="firstName" name="First Name" onChange={ChangeFN} value={Fn} required />
            </div>
            <div className="form__group">
              <label>Last Name</label>
              <input type="text" id="lastName" name="Last Name" onChange={ChangeLN} value={Ln} required />
            </div>
            <div className="form__group">
              <label>Age</label>
              <input type="text" id="Age" name="Age" className="age-col" onChange={ChangeAge} value={age} required />
            </div>

            <div className="form__group">
              <label>Month</label>
              <select name="Table Type" id="tableType" className="mon-col" onChange={ChangeMonth} required>
                <option selected disabled>
                  Choose
                </option>
                <option value="january">Jan</option>
                <option value="Febuary">Feb</option>
                <option value="march">Mar</option>
                <option value="april">Apr</option>
                <option value="may">May</option>
                <option value="june">Jun</option>
                <option value="july">July</option>
                <option value="august">Aug</option>
                <option value="september">Sept</option>
                <option value="october">Oct</option>
                <option value="november">Nov</option>
                <option value="december">Dec</option>
              </select>
            </div>
            <div className="form__group">
              <label>Batches</label>
              <select name="Batches" id="Batches"  className="bat-col" onChange={ChangeBatches} required>
                <option selected disabled>
                  Choose
                </option>
                <option value="6-7AM">6-7 (AM)</option>
                <option value="7-8">7-8(AM)</option>
                <option value="8-9">8-9(AM)</option>
                <option value="5-6">5-6(PM)</option>
              </select>
            </div>
            <div className="form__group">
              <label>Fees</label>
              <select name="Fees" id="Fees" className="fee-col" onChange={ChangeFees} required>
                <option selected disabled>
                  Choose
                </option>
                <option value="500">500</option>
              </select>
            </div>
            <button className="pay-btn" onClick={btnChange}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
