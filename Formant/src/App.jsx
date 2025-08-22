import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const vallejoModelColorPaints = [
  ["70.803", "Brown Rose"],
  ["70.804", "Beige Red"],
  ["70.805", "German Orange"],
  ["70.806", "Russian Green"],
  ["70.807", "Oxford Blue"],
  ["70.808", "Blue Green"],
  ["70.809", "Royal Blue"],
  ["70.810", "German Field Grey WWII"],
  ["70.811", "Light Orange"],
  ["70.812", "Violet Red"],
  ["70.813", "Blue Grey Pale"],
  ["70.814", "Burnt Cadmium Red"],
  ["70.815", "Basic Skin Tone"],
  ["70.816", "Luftwaffe Uniform WWII"],
  ["70.817", "Scarlet"],
  ["70.818", "Red Leather"],
  ["70.819", "Iraqi Sand"],
  ["70.820", "Offwhite"],
  ["70.821", "German Cam. Beige WWII"],
  ["70.822", "German Cam. Black Brown"],
  ["70.823", "Luftwaffe Cam. Green"],
  ["70.824", "German Cam. Orange Ochre"],
  ["70.825", "German Cam. Pale Brown"],
  ["70.826", "German Cam. Medium Brown"],
  ["70.827", "Lime Green"],
  ["70.828", "Woodgrain"],
  ["70.829", "Amaranth Red"],
  ["70.830", "German Fieldgrey WWII"],
  ["70.831", "German Cam. Dark Green"],
  ["70.832", "German Cam. Olive Green"],
  ["70.833", "German Cam. Bright Green"],
  ["70.834", "German Cam. Yellow Olive"],
  ["70.835", "Salmon Rose"],
  ["70.836", "London Grey"],
  ["70.837", "Pale Sand"],
  ["70.838", "Bronze Green"],
  ["70.839", "Ultramarine"],
  ["70.840", "Light Turquoise"],
  ["70.841", "Andrea Blue"],
  ["70.842", "Glossy Black"],
  ["70.843", "Cork Brown"],
  ["70.844", "Deep Orange"],
  ["70.845", "Sunny Skin Tone"],
  ["70.846", "Mahogany Brown"],
  ["70.847", "Dark Sand"],
  ["70.848", "Dark Vermillion"],
  ["70.849", "Dark Green Blue"],
  ["70.850", "Medium Olive"],
  ["70.851", "Bright Orange"],
  ["70.852", "German Grey"],
  ["70.853", "Dark Blue Grey"],
  ["70.854", "Dark Flesh"],
  ["70.855", "Pastel Yellow"],
  ["70.856", "Ochre Brown"],
  ["70.857", "Golden Olive"],
  ["70.858", "Ice Yellow"],
  ["70.859", "Black Red"],
  ["70.860", "Medium Fleshtone"],
  ["70.861", "Glossy White"],
  ["70.862", "Black Grey"],
  ["70.863", "Gunmetal Grey"],
  ["70.864", "Natural Steel"],
  ["70.865", "Oily Steel"],
  ["70.866", "Grey Green"],
  ["70.867", "Dark Blue"],
  ["70.868", "Dark Sea Green"],
  ["70.869", "Basalt Grey"],
  ["70.870", "Medium Sea Grey"],
  ["70.871", "Leather Brown"],
  ["70.872", "Chocolate Brown"],
  ["70.873", "US Field Drab"],
  ["70.874", "Tan Earth"],
  ["70.875", "Beige Brown"],
  ["70.876", "Brown Sand"],
  ["70.877", "Gold Brown"],
  ["70.878", "Old Gold"],
  ["70.879", "Green Brown"],
  ["70.880", "Khaki Grey"],
  ["70.881", "Yellow Green"],
  ["70.882", "Middle Blue"],
  ["70.883", "Silver Grey"],
  ["70.884", "Stone Grey"],
  ["70.885", "Pastel Blue"],
  ["70.886", "Green Grey"],
  ["70.887", "Brown Violet"],
  ["70.888", "Olive Grey"],
  ["70.889", "USA Olive Drab"],
  ["70.890", "Reflective Green"],
  ["70.891", "Intermediate Green"],
  ["70.892", "Yellow Olive"],
  ["70.893", "US Dark Green"],
  ["70.894", "Camouflage Olive Green"],
  ["70.895", "Gunship Green"],
  ["70.896", "German Cam. Extra Dark Green"],
  ["70.897", "Bronze"],
  ["70.898", "Dark Sea Blue"],
  ["70.899", "Dark Prussian Blue"],
  ["70.900", "French Mirage Blue"],
  ["70.901", "Pastel Green"],
  ["70.902", "Azure"],
  ["70.903", "Intermediate Blue"],
  ["70.904", "Blue"],
  ["70.905", "Blue Grey"],
  ["70.906", "Pale Blue"],
  ["70.907", "Light Blue"],
  ["70.908", "Carmine Red"],
  ["70.909", "Vermillion"],
  ["70.910", "Orange Red"],
  ["70.911", "Light Orange"],
  ["70.912", "Tan Yellow"],
  ["70.913", "Yellow Ochre"],
  ["70.914", "Green Ochre"],
  ["70.915", "Deep Yellow"],
  ["70.916", "Sand Yellow"],
  ["70.917", "Beige"],
  ["70.918", "Ivory"],
  ["70.919", "Cold White"],
  ["70.950", "Black"],
  ["70.951", "White"]
];


  return (
    <>
    <div className='card'>
      {
      vallejoModelColorPaints.map((color, index) => {
        return (
          <div className='paint-checkbox-container' key={index}>
          <input name={color} type='checkbox'></input>
          <p>{color[0]}</p>
          <label htmlFor={color}>{color[1]}</label>
          </div>
        )
      })
      }
    </div>
    </>
  )
}

export default App
