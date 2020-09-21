import React, { useState } from "react";
import data from "./data.json";
import Loader from "./Loader";
import sis from "../img/sis.png";
import "../sass/style.scss";

function App() {
  const [loaderList, setLoaderList] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <div className="sass"></div>
      <div>
        <img src={sis}></img>
      </div>
      <ul>
        {loaderList.map((item) => {
          <Loader data={item} key={item.id} />;
        })}
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendidoooo</button>
    </div>
  );
}

export default App;
