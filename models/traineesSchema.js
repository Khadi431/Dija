const mongoose = require("mongoose");

const traineesSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    location:{
        type: String,
        require:true
    },
    DoB:{
        type: String,
        require:true
    },
    age:{
        type:String,
        require:true
    }
},{
    timestamps:true
},
);

const Trainees =mongoose.model("Trainees", traineesSchema);
module.exports = Trainees;