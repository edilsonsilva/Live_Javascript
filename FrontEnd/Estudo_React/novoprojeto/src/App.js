import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cabecalho from "./Cabecalho";
import Links from "./Links";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
function App() {
  const [titulo, dados] = useState([
    {
      id: 1,
      nome: "Paula",
      email: "paula@terra.com.br",
      idade: "23",
    },
    {
      id: 2,
      nome: "Fernanda",
      email: "fernanda@terra.com.br",
      idade: "43",
    },
    {
      id: 3,
      nome: "Marcelo",
      email: "marcelo@terra.com.br",
      idade: "31",
    },
    {
      id: 4,
      nome: "Mauro",
      email: "mauro@terra.com.br",
      idade: "61",
    },
  ]);

  return (
    <div className="App">
      <Cabecalho />
      <h1>{titulo.cabecalho}</h1>

      <Links />

      <p>
        <table>
          {titulo.map((info) => (
            <tr>
              <td>{info.id} </td>
              <td>{info.nome}</td>
              <td>{info.email} </td>
              <td>{info.idade}</td>
            </tr>
          ))}
        </table>
      </p>

      <p>{titulo.conteudo}</p>
      <Conteudo />

      <Rodape />
    </div>
  );
}

export default App;
