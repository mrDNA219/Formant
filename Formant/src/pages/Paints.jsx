import vallejoModelColorPaints from "../VMC";
import vallejOGameColor from "../VGC";
import { useState } from "react";

function Paints() {

    const [paints, setPaints] = useState([]);

    return (
    <>
    <div className='page'>
      {
      vallejoModelColorPaints.map((color, index) => {
        return (
          <div className='paint-card' key={index}>
                <input className='paint-swatch-input' name={color} type='checkbox'></input>
                <p className='paint-swatch-name'>{color[0]}</p>
                <label className='paint-swatch-label' htmlFor={color}>{color[1]}</label>
                <div className='paint-swatch' style={{"backgroundColor" : `${color[2]}`}}></div>
          </div>
            )
        })
        }
    </div>
    <div>
      {
      vallejOGameColor.map(color => {
        return (
          <div>
                <input className='paint-swatch-input' name={color} type='checkbox'></input>
                <p className='paint-swatch-name'>{color}</p>
          </div>
        )
      })
      };
    </div>
    </>
  );
};

export default Paints;