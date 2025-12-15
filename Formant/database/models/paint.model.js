import mongoose from 'mongoose';
//FORMAT FOR SINGLE PAINT
/*
    <input className='paint-swatch-input' name={color} type='checkbox'></input>
    <p className='paint-swatch-name'>{color[0]}</p>
    <label className='paint-swatch-label' htmlFor={color}>{color[1]}</label>
    <div className='paint-swatch' style={{"backgroundColor" : `${color[2]}`}}></div>

*/

const paintSchema = new mongoose.Schema({
    label: {
        type: String
    },
    name: {
        type: String
    },
    hexCode: {
        String
    }
});


const Paint = mongoose.model('Paints', paintSchema);

export default Paint;





