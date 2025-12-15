import mongoose from 'mongoose';

//FORMAT FOR SINGLE PAINT
/*
    <input className='paint-swatch-input' name={color} type='checkbox'></input>
    <p className='paint-swatch-name'>{color[0]}</p>
    <label className='paint-swatch-label' htmlFor={color}>{color[1]}</label>
    <div className='paint-swatch' style={{"backgroundColor" : `${color[2]}`}}></div>

*/

const paintSchema = new mongoose.Schema({
    label: String,
    name: String,
    hexCode: String
});

const collectionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.objectId,
        ref: 'User',
        required: true
    },
    paints: [paintSchema]
})


const Paint = mongoose.model('Paints', paintSchema);
const Collection = mongoose.mode('Collection', collectionSchema);

export default {
    Paint,
    Collection
};



