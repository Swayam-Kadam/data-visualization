require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = process.env.JWT_SECRET;

//ROUT 1:- Create user using: POST "/Auth/createuser". No login required 
router.post('/register',[
    body('name').isLength({min:3}).withMessage('name length should be minimum 3'),
    body('email').isEmail(),
    body('password').isLength({min:5}).withMessage('name length should be minimum 5'),
],async(req,res)=>{
    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,error:errors.array()});
    }
    try {
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({success,error:'sorry but a user with this email already exist'})
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);

        user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secPass,
            role:req.body.role
        })

        const data ={
            user:{
                id:user.id
            }
        }

        const authtoken = jwt.sign(data,JWT_SECRET);

        success = true;
        res.json({success,authtoken});
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error");
    }
});

//ROUT 2:- Login User using: POST "/Auth/login".

router.post('/login',[
    body('email').isEmail().withMessage('enter a valid email'),
    body('password').exists().withMessage('password can not be blanck')
],async(req,res)=>{
    let success = false;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({success,error:errors.array()})
    }

    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).json({success,error:'plz try to login with correct credentials'})
        }
        const passwordCompare = await bcrypt.compare(req.body.password,user.password)
        if(!passwordCompare){
            success = false;
            return res.status(400).json({success,error:"plz try to login with correct credentials"})
        }

        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success = true;
        res.json({success,authtoken,role:user.role})
    } catch (error) {
        console.log(error.message);
         res.status(500).send("Internal Server Error");
    }
})


//Route 3:- update a specifc user profile using /Auth/update/id
router.patch('/update/:id',async(req,res)=>{
    const{id} = req.params;
    const{name,email,address,number,gender} = req.body;

    try {
        const response = await User.findByIdAndUpdate(
            id,
            {name,email,address,number,gender},
            {new:true}
        )
        if(!response){
            return res.status(404).json({error:"User Not Found"});
        }
        res.status(200).json({message:"User Profile Data Updated",response});
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }

})

//Route 4 :-fetch specific user data using  /Auth/fetch
router.get('/fetch',fetchuser,async(req,res)=>{
        try {
            const responce=await User.findById(req.user.id).select('-password')
            res.json({responce})
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal Server Error")
        }
})

module.exports = router