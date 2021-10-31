import React, { useState } from "react";
import "./Calculator.css";
import Topics from "../topics_data";
import { Form, Button } from "react-bootstrap";
import "../thermodynamics.css";
function Calculator({ match }) {
  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  // KTG calculator
  function CalculatorKTG() {
    const [result, setResult] = useState(null);
    const [gasCon, setGasCon] = useState();
    const [moles, setMoles] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [pressure, setPressure] = useState(null);
    const [volume, setVolume] = useState(null);
    const [molarMass, setMolarMass] = useState(null);
    const [freedom, setFreedom] = useState(null);
    const [choice, setChoice] = useState("ke");

    function handleChange(e) {
      setResult(null);
      setMoles(null);
      setTemperature(null);
      setMolarMass(null);
      setPressure(null);
      setVolume(null);
      setFreedom(null);
      setGasCon(null);
      setChoice(e.target.value);
      choiceData();
    }

    const choiceData = () => {
      if (choice === "ke")
        return {
          name: "Kinetic Energy",
          mainunit: "Joules",
          quantities: [
            "Number of Moles",
            "Temprature",
            "Universal Gas Constant",
          ],
          subunits: ["mol", "K", "J.K¯¹⋅mol¯¹"],
          setters: [setMoles, setTemperature, setGasCon],
          getters: [moles, temperature, gasCon],
        };
      else if (choice === "rms")
        return {
          name: "RMS Velocity",
          mainunit: "Joules",
          quantities: ["Molar Mass", "Temperature", "Universal Gas Constant"],
          subunits: ["g⋅mol¯¹", "K", "J.K¯¹⋅mol¯¹"],
          setters: [setMolarMass, setTemperature, setGasCon],
          getters: [molarMass, temperature, gasCon],
        };
      else if (choice === "av")
        return {
          name: "Average Velocity",
          mainunit: "m/s",
          quantities: ["Molar Mass", "Temperature", "Universal Gas Constant"],
          subunits: ["g⋅mol¯¹", "K", "J.K¯¹⋅mol¯¹"],
          setters: [setMolarMass, setTemperature, setGasCon],
          getters: [molarMass, temperature, gasCon],
        };
      else if (choice === "mp")
        return {
          name: "Most Probable Velocity",
          mainunit: "m/s",
          quantities: ["Molar Mass", "Temperature", "Universal Gas Constant"],
          subunits: ["g⋅mol¯¹", "K", "J.K¯¹⋅mol¯¹"],
          setters: [setMolarMass, setTemperature, setGasCon],
          getters: [molarMass, temperature, gasCon],
        };
      else if (choice === "p")
        return {
          name: "Pressure",
          mainunit: "Pa",
          quantities: ["Number of Moles", "Temperature", "Volume"],
          subunits: ["mol", "K", "m³"],
          setters: [setMoles, setTemperature, setVolume],
          getters: [moles, temperature, volume],
        };
      else if (choice === "v")
        return {
          name: "Volume",
          mainunit: "m³",
          quantities: ["Number of Moles", "Temperature", "Pressure"],
          subunits: ["mol", "K", "Pa"],
          setters: [setMoles, setTemperature, setPressure],
          getters: [moles, temperature, pressure],
        };
      else if (choice === "t")
        return {
          name: "Temperature",
          mainunit: "K",
          quantities: ["Number of Moles", "Pressure", "Volume"],
          subunits: ["mol", "Pa", "m³"],
          setters: [setMoles, setPressure, setVolume],
          getters: [moles, pressure, volume],
        };
      else if (choice === "u")
        return {
          name: "Internal Energy",
          mainunit: "Joules",
          quantities: ["freedom", "Temperature", "No of Moles"],
          subunits: ["NaN", "K", "mol"],
          setters: [setFreedom, setTemperature, setMoles],
          getters: [freedom, temperature, moles],
        };
    };

    const calcResult = () => {
      let res;
      // setGasCon(8.3145);
      if (choice === "ke") res = 1.5*gasCon * moles * temperature;
      else if (choice === "rms") res = (parseFloat(3* gasCon * temperature) / molarMass)**0.5;
      else if (choice === "av") res = (parseFloat(8*gasCon* temperature) /parseFloat( Math.PI* molarMass))**0.5;
      else if (choice === "mp") res = (parseFloat(2*gasCon * temperature) / molarMass)**0.5;
      else if (choice === "p") res = 8.3145 * moles * temperature / volume;
      else if (choice === "v") res = 8.3145 * moles * temperature / pressure;
      else if (choice === "t") res = parseFloat(pressure*volume)/parseFloat(moles*8.3145);
      else if (choice === "u") res = freedom*moles*8.3145*temperature/2;
      setResult(res);
    };
    function reset() {
      setResult(null);
    }
    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" onChange={(e) => handleChange(e)}>
              <option value="ke">
                KE : Total translational kinetic energy of gas
              </option>
              <option value="rms">Vᵣₘₛ : RMS speed</option>
              <option value="av">Vₐᵥ : Average velocity</option>
              <option value="mp">Vₘₚ : Most probable velocity</option>
              <option value="p">P : Pressure of gas</option>
              <option value="v">V : Volume of gas</option>
              <option value="t">T : Temperature of gas</option>
              <option value="u">U : Internal energy</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[0]}
              value={choiceData().getters[0]===null?'':choiceData().getters[0]}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[1]}
              value={choiceData().getters[1]===null?'':choiceData().getters[1]}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[2]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[2](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[2]}
              value={choiceData().getters[2]===null?'':choiceData().getters[2]}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={calcResult}>
          Calculate
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="dark" type="reset" onClick={() => reset()}>
          Reset
        </Button>
      </>
    );
  }

  function calC(key) {
    let currentCall;
    switch (key) {
      case "Kinetic Theory of Gases":
        currentCall = CalculatorKTG();
        break;
      default:
        break;
    }
    return currentCall;
  }
  return (
    <div className="Calculator__main">
      <div className="Calculator__header">
        <h1>{details.topic}</h1>
      </div>
      <div className="Calculator__image">
        <img src={details.image} rounded="true" alt={details.topic} />
      </div>
      <div className="Calculator__details">
        <p>{details.details}</p>
      </div>
      <div className="Calculator__formula-text">
        <h3>Working Formula:</h3>
      </div>
      <div className="Calculator__formula">
        <h3>{details.formula}</h3>
      </div>
      <div className="Calculator__calc">
        <h3>{details.topic} Calculator</h3>
        <hr />
        {calC(details.topic)}
      </div>
      <div className="Calculator__process">
        <h3> Process</h3>
        <p>{details.process}</p>
      </div>
      <div className="Calculator__siunit">
        <h3> S.I. Unit : {details.siunit}</h3>
        <p></p>
      </div>
      <div className="Calculator__dimension">
        <h3> Dimension : {details.dimension}</h3>
        <p></p>
      </div>
    </div>
  );
}
export default Calculator;
