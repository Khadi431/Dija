const User = require ("../models/userSchema")
const bcrypt = require("bcryptjs")
const {validateAddUser} =require("../validations/userValidations")



const addUser = async (req, res) =>{
    //validate a user
    const {error} = validateAddUser.validate(req.body)
    error && res.status(402).send(error)

    //complexity level and hashing using bcrypt
    //const {name, email, password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(req.body.password, salt)
    
    //find user from  db
    const emailFound = await User.findOne({email: req.body.email})
    emailFound && res.status(403).send("email already exist")




    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    await newUser.save()
    res.status(201).json(newUser)
}


module.exports = {addUser};