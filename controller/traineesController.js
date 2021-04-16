const Trainee = require("../models/traineesSchema");

const createTrainee = async(req, res)=>{
    const newTrainee = new Trainee ({
        name: rep.body.name,
        location: req.body.location,
        email: req.body.email,
        DoB: req.body.DoB,
        age:rep.body.age,
    });


    await newTrainee.save();
    res.status(201).json(newTrainee);
};

const getAllTrainee =async (req, res) => {
    const trainee = await Trainee.find();
    res.json(trainees);
};

const getSingleTrainee =async (req, res) =>{
    const trainee = await Trainee.findById(req, params._id)
    res.json(trainee)
}
const updateTrainee =async (req, res) =>{
    const foundtrainee = await Trainee.findById(req, params._id)
    if (foundtrainee){
        foundtrainee.name =req.body.name
        foundtrainee.destination =req.body.destination
        foundtrainee.email =req.body.email
        foundtrainee.dob =req.body.dob
    }
    const updatedTrainee =await foundtrainee.save()
    res.json({updatedTrainee})
}

module.exports= {createTrainee, getAllTrainee, getSingleTrainee, updateTrainee};