const { json }= require('body-parser');
const mongodb = require('../mongoConnection');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) =>{
    
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists)=>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
        console.log(lists);
        
        
    });
};

const getSingle = async (req, res, next) =>{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId});
result.toArray().then((lists) =>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
});
};

const eddyRoute = (req, res) =>{
    res.send('Eddy Moes');
};


module.exports = {getAll, getSingle,eddyRoute };