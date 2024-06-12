import React, { useState }from 'react';

const Semaforo = () => {

  const [selected, setSelected] = useState("rojas")
  const [addColor, setAddColor] = useState(false);

  const changeColor = (color) => {
    setSelected(color)
  }


  const toggleColor = () => {
    if (addColor) {
      if (selected === "rojas") {
        setSelected("amarillas");
      } else if (selected === "amarillas") {
        setSelected("verdes");
      } else if (selected === "verdes") {
        setSelected("azules");
      } else if (selected === "azules") {
        setSelected("rojas");
      }
    } else {
      if (selected === "rojas") {
        setSelected("amarillas");
      } else if (selected === "amarillas") {
        setSelected("verdes");
      } else if (selected === "verdes") {
        setSelected("rojas");
      }
    }
  };

  const addBlueColor = () => {
    setAddColor(!addColor);
  };

  return (
    <div className="cuerpo">
      <div className="Semaforo">
        <div className={`luces roja ${selected == "rojas" ? "encendido" : ""}`}
         onClick={() => changeColor("rojas") }>
         </div>
        <div className={`luces amarilla ${selected == "amarillas" ? "encendido" : ""}`}
         onClick={() => changeColor("amarillas") }>
        </div>
        <div className={`luces verde ${selected == "verdes" ? "encendido" : ""}`}
        onClick={() => changeColor("verdes") }>
        </div>
        {addColor && (
      <div className={`luces azul ${selected == "azules"? "encendido" : ""}`}
       onClick={() => changeColor("azules") }>
      </div>
       )}
      </div>
      <button className="button" onClick={toggleColor}>Alternar</button>
      <button className="button2" onClick={addBlueColor}> azul </button>
    </div> 
  );
};

const aplicacion = () => {
  return (
    <div className="orden">
      <Semaforo />
      <Semaforo />
      <Semaforo />
    </div>
  );
};

export default aplicacion;