// Import Services
// const userController = require('../services')

// import Schema
const Model = require('../models/ticketModel');

// POST   
async function create(req, res) {
    const data = new Model({
        qrUrl: req.body.qrUrl,
        description: req.body.description,
        owner: req.body.owner,
        contractAddress: req.body.contractAddress
    });

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
};

//GET ALL
async function getAll(req, res) {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

//GET BY ID
async function get(req, res) {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

//PATCH
async function update(req, res) {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        );

        res.send(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message})
    }
};

//DELETE
async function remove(req, res) {
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document --> ${data.owner} <-- has been deleted...`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    create,
    getAll,
    get,
    update,
    remove
};