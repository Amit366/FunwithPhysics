import React, {useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import { Helmet } from "react-helmet";

function Magneticfield_calculator({ match }) {
  // const formularef=useRef(null)
  const magneticfield_data = [
    {
      topic: "Infinite Sheet",
      details:
        "Consider an infinite vertical sheet carrying current out of the page. The sheet has a uniform current per unit length J₀. The magnetic field (B) produced due to current sheet due to a charge density(J₀) can be calculated using Ampere's Law. So the magnetic field produced is μ₀J₀/2.",
      formula: "B= μ₀*J₀/2",
      siunit: "Tesla",
      dimension: "MT⁻²I⁻¹ ",
      process:
        "To find the magnetic field(B) for a infinite sheet  we need to know the current density (J₀) and then applying Ampere's Law we can determine the magnetic field. ",
    },
    {
      topic: "Solid Cylinder",
      details:
        ["Consider a solid cylinder of radius(R) carrying current (i) along its length. The cylinder has a uniform current density. The magnetic field (B) due to the solid cylinder can be calculated for three cases:",<br/>,
        "1) If r < R, the magnetic field is given by the formula B=μ₀ir/2πR²",
        <br/>,
        "2) If r = R, the magnetic field is given by the formula B=μ₀i/2πR",
        <br/>,
        "3) If r > R, the magnetic field is given by the formula B=μ₀i/2πr",
        <br/>,<br/>,
        "where 'r' is the distance from the axis of the solid cylinder."
      ],
      formula: ["Inside the Cylinder(r < R)- B=μ₀ir/2πR²",<br/>,"At Surface (r = R)- B=µ₀i/2πR",<br/>,"Outside the Cylinder(r > R)- B=µ₀i/2πr"],
      siunit: "Tesla",
      dimension: "MT⁻²I⁻¹ ",
      process:
        "To find the magnetic field(B) for a solid cylinder we need to know its radius, the current flowing along its length and a distance from the axis. ",
    }
  ];

  const page = magneticfield_data.filter(
    (data) => data.topic === match.params.topic
  );
  const details = page[0];
  // formularef.current.innerHTML= details.formula
  //magnetic field for infinite sheet
  const Infinite_sheet = () => {
    const [currentdensity, setCurrentDensity] = useState(null);
    const [result, setResult] = useState(null);
    const μ = 4 * 3.14 * Math.pow(10, -7);
    const reset = () => {
      setResult(null);
      setCurrentDensity(null);
    };
    const calcResult = () => {
      let res;
      res = (μ * currentdensity) / 2;
      setResult(res);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label> Current Density (J₀)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setCurrentDensity(e.target.value);
              }}
              placeholder="Enter the current density "
              value={currentdensity === null ? "" : currentdensity}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Constant (μ₀)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"4π*10⁻⁷ Henry/m"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} T`}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={calcResult}>
          Calculate
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="dark" onClick={() => reset()} type="reset">
          Reset
        </Button>
      </>
    );
  };
  //solid cylinder
  const SolidCylinder = () => {
    const [choice, setChoice] = useState("InCylinder");
    const [current, setCurrent] = useState(null);
    const [radius, setradius] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);
    const μ = 4 * 3.14 * Math.pow(10, -7);
    const reset = () => {
      setResult(null);
      setCurrent(null);
      setradius(null);
      setDistance(null);
    };
    const handleChange=(e)=>{
      setChoice(e.target.value)
      reset()
    }
    const calcResult1 = () => {
      let res;
      if (choice === "InCylinder")
      {
      res = (μ * current* distance) / (2* Math.PI * Math.pow(radius,2));
      }
      else{
      res = (μ * current) / (2* Math.PI *distance);
      }
      setResult(res);
    };

    return (
      <>
        <Form>
        <Form.Group className="mb-4" controlId="choice">
          <Form.Label>Select the type of calculation</Form.Label>
          <Form.Control as="select" onChange={(e)=>{handleChange(e)}}>
            <option value="InCylinder">Magnetic Field inside or at the surface the Solid Cylinder</option>
            <option value="OutsideCylinder">Magnetic Field outside the Solid Cylinder</option>
          </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
          <Form.Text className="text">
          {choice==="InCylinder"? (<strong>
             To find the Magnetic Field inside or at the surface the Solid Cylinder, Enter the following values
           </strong>):(<strong>
             To find the Magnetic Field outside the Solid Cylinder, Enter the following values
           </strong>)}
            
            <br />
          </Form.Text>
        </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Current(I)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setCurrent(e.target.value);
              }}
              placeholder="Enter the current(A)"
              value={current === null ? "" : current}
            />
          </Form.Group>
          {choice === "InCylinder" && (<Form.Group className="mb-4">
            <Form.Label>Radius(R)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setradius(e.target.value);
              }}
              placeholder="Enter the radius(m)"
              value={radius === null ? "" : radius}
            />
          </Form.Group>)}
          <Form.Group className="mb-4">
            <Form.Label>Distance(r)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setDistance(e.target.value);
              }}
              placeholder="Enter the distance from the axis(m)"
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Constant (μ₀)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"4π*10⁻⁷ Henry/m"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} T`}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={calcResult1}>
          Calculate
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="dark" onClick={() => reset()} type="reset">
          Reset
        </Button>
      </>
    );
  };
  const calC = (key) => {
    let currentCall;
    switch (key) {
      case "Infinite Sheet":
        currentCall = Infinite_sheet();
        break;
      case "Solid Cylinder":
        currentCall = SolidCylinder();
        break;
      default:
        break;
    }
    return currentCall;
  };
  return (
    <>
      <div className="Calculator__main">
        <Helmet>
          <title>{details.topic}</title>
          <meta
            name="description"
            content={details.details}
            data-react-helmet="true"
          />
          <meta
            name="keywords"
            content="Electromagnetism, calculator, physics, Tech n science, technscience, tech and science"
          />
        </Helmet>
        <div className="Calculator__header">
          <h1>{details.topic}</h1>
        </div>
        <div className="Calculator__details">
          <p>{details.details}</p>
        </div>
        <div className="Calculator__formula">
          <h3>Working Formula:</h3>
          <h3>{details.formula}</h3>
          <h3>S.I. Unit : {details.siunit}</h3>
          <h3>Dimension : {details.dimension}</h3>
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
      </div>
    </>
  );
}

export default Magneticfield_calculator;
