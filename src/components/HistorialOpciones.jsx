import React, { Component } from "react";
import "../styles/index.css";

export default class HistorialOpciones extends Component {
  render() {
    let a = 0;
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.opcionAnterior} </h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>
          {this.props.historialOpciones.map((opcion, index) =>
            index !== 0 ? <li key={`${opcion}${(a += 1)}`}>{opcion}</li> : ""
          )}
        </ul>
      </div>
    );
  }
}
