import React, { Component } from "react";
import "../styles/index.css";

export default class OpcionesHistoria extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="opciones">
        <div className="opcion">
          <button className="botones" onClick={() => {handleClick(Number(this.props.id) + 1, "a")}}>A</button>
          <h2 className="">{this.props.opcionA}</h2>
        </div>

        <div className="opcion">
          <button className="botones" onClick={() => {handleClick(Number(this.props.id) + 1, "b")}}>B</button>
          <h2 className="">{this.props.opcionB}</h2>
        </div>
      </div>
    );
  }
}
