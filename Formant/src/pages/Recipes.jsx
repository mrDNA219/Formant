import { useState, useEffect } from "react"
import vallejoModelColorPaints from "../VMC";




function Recipes({}) {

const [paints, setPaints] = useState([]);

async function getAllUsersRecipesHelper()
{
    try {
        // const result = await getAllUsersRecipes();
        // setPaints(result);
    } catch (error) {
       console.error(error); 
    }
}

useEffect(() => {
    getAllUsersRecipesHelper();
    console.log("hitting async backend");
}, [paints]);

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
    </>
    );
}

export default Recipes;