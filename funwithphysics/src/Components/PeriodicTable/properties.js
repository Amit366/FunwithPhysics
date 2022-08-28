import React from "react";
import { useParams } from "react-router";
import { elements } from "./data";
import "./periodicTable.css";

function Properties() {
  let { index } = useParams();
  let element = elements[index];

  return (
    <div style={{ margin: "auto" }}>
      <div
        id="item-box"
        className={` ${element.category}
          
          `}
      >
        <div className="number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="element-name">{element.name}</div>
      </div>
      <div className="item-name">
        <h1>{element.name}</h1>
        <div className={`category ${element.category}`}>
          <h6>{element.category}</h6>
        </div>
      </div>
      <div className="summary">{element.summary}</div>
      <div>
        <table>
          <tbody>
            {element.appearance && (
              <tr>
                <th>Appearance</th>
                <td>{element.appearance}</td>
              </tr>
            )}
            {element.atomic_mass && (
              <tr>
                <th>Atomic Mass</th>
                <td>{element.atomic_mass}</td>
              </tr>
            )}
            {element.density && (
              <tr>
                <th>Density</th>
                <td>{element.density}</td>
              </tr>
            )}
            {element.boil && (
              <tr>
                <th>Boil</th>
                <td>{element.boil} K</td>
              </tr>
            )}
            {element.melt && (
              <tr>
                <th>Melt</th>
                <td>{element.melt} K</td>
              </tr>
            )}
            {element.molar_heat && (
              <tr>
                <th>Molar Heat</th>
                <td>{element.molar_heat}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Properties;
