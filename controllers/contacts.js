const { response } = require('express');
const mongodb = require('../mongoConnection');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) =>{
    
    const result = await mongodb.getDb().db("test-contacts").collection('contacts').find();
    
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
    .db("test-contacts")
    .collection('contacts')
    .find({ _id: userId});
result.toArray().then((lists) =>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
});
};
//testing
const eddyRoute = (req, res) =>{
    res.send('Eddy Moes');
};



const createNew = async(req,res) =>{
    const contact= {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db("test-contacts").collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(201).json(response);
    }
    else{
        res.status(500).json(response.error || 'Error while creating contact');
    }
};

const updateExisting = async (req,res) =>{
    const userId = new ObjectId(req.params.id);
    //taken from create new same structure
    const contact= {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const result = await mongodb
    .getDb()
    .db("test-contacts")
    .collection('contacts')
    .replaceOne({ _id: userId}, contact);

    //used to log response if successfully replaced
    //I'd be interested to know if we can push the results to a response like how we would with our GET requests. 
    //Maybe this isn't possible due to the difference in PUT vs GET. 
    console.log(result);
    if (result.modifiedCount > 0){
        res.status(204).send(result);
    } else {
        res.status(500).json(result.error || 'Error while updating contact')
    }
};

const deleteEntry = async(req,res) =>{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
    .getDb()
    .db("test-contacts")
    .collection('contacts')
    .deleteOne({ _id: userId}, true);
    if(result.deletedCount > 0) {
        res.status(200).send(result);
    } else {
        res.status(500).json(result.error || 'Error Contact previously deleted or does not exist') 
    }
};



module.exports = {getAll, getSingle,eddyRoute,createNew,updateExisting,deleteEntry };