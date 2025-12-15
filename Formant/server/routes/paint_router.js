import express from 'express';
const paintRouter = express.Router();
import Paint from '../../database/models/paint.model.js';


paintRouter.get('/', async (req, res) => {
    try {
        const paints = await Paint.find({});        
        res.send({success: true, data: paints});
    } catch (error) {
        console.error(error); 
        res.send({success: false, errorMessage: "failure getting all paints from database"});
    }
});

paintRouter.post('/', async (req, res) => {
    let paint = req.body;
    if(!paint){
        res.send("Error::there is no request body");
    }
    const newPaint = new Paint(paint);
    if(!newPaint){
        res.send("Error::couldn't create paint with Paint schema");
    }
    try{
        await newPaint.save();
        res.send({success: true, data: newPaint});
    } catch (error){
        console.error(error);
        res.send({success: false, errorMessage: "Error posting new paint"});
    }
});

export default paintRouter;