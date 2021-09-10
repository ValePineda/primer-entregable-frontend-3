import React, { Component } from "react";
import data from "./data.json";
import OpcionesHistoria from "./OpcionesHistoria";
import "../styles/index.css";
import swal from "sweetalert";
import HistorialOpciones from "./HistorialOpciones";

const historias = data;

export default class Historia extends Component {
  dataHistorias = historias;

  constructor(props) {
    super(props);

    this.state = {
      historia: "",
      opcionA: "",
      opcionB: "",
      id: "",
      opcionAnterior: "",
      historialOpciones: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      historia: this.dataHistorias[0].historia,
      opcionA: this.dataHistorias[0].opciones.a,
      opcionB: this.dataHistorias[0].opciones.b,
      id: this.dataHistorias[0].id,
    });
  }

  handleClick(counter, option) {
    if (counter === 6) {
      swal("Fin de la aventura!");
    } else {
      this.newArray = this.dataHistorias.filter((historia) => {
        return `${counter}${option}` === historia.id;
      });
      this.setState({
        historia: this.newArray[0].historia,
        opcionA: this.newArray[0].opciones.a,
        opcionB: this.newArray[0].opciones.b,
        id: this.newArray[0].id.split("")[0],
        opcionAnterior: this.newArray[0].id.split("")[1].toUpperCase(),
        historialOpciones: [
          ...this.state.historialOpciones,
          this.state.opcionAnterior,
        ],
      });
    }
  }

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{this.state.historia}</h1>

        <OpcionesHistoria
          handleClick={this.handleClick}
          opcionA={this.state.opcionA}
          opcionB={this.state.opcionB}
          id={this.state.id}
        />

        <HistorialOpciones
          opcionAnterior={this.state.opcionAnterior}
          historialOpciones={this.state.historialOpciones}
        />
      </div>
    );
  }
}
