const express = require("express");
const  {createTrainee, getAllTrainee, getSingleTrainee, updateTrainee} =require("../controller/traineesController");
const router =express.Router();

router.route("/").post(createTrainee).get(getAllTrainee);
router.route("/:_id").get(getSingleTrainee).put(updateTrainee)

module.exports= router;