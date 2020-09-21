import "../css/style.css";
import busqueda from "./busqueda";

import render from "./render";
// if (module.hot) {
//   module.hot.accept("./text.js", function () {
//     text();
//   });
// }

const id = prompt("inserta un numero");

busqueda(id)
  .then((data) => {
    render(data);
  })
  .catch(() => {
    console.log("no se encontro");
  });
