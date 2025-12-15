import vallejoModelColorPaints from "../VMC";
import vallejOGameColor from "../VGC";
import { useState } from "react";
import { getAllPaints, createPaint } from "../api";

function Paints() {

    const [paints, setPaints] = useState([]);
    async function createPaintHelper(color){
      const result = await createPaint(color);
      if(result){
        console.log(result);
      } 
    };

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
                <button onClick={(e) => {
                        e.preventDefault();
                        createPaintHelper({...color});
                    }}>Save Paint</button>
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