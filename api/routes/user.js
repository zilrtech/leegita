const   express =   require("express");
const   mongodb =   require("mongoose");
const   route   =   express.Router();
const   User    =   require("../../db/models/user");
const   validator    =   require("../../plugins/validation");



route.post("/auth",(req, res, next)=>{
    const phoneNumber = req.body.phoneNumber,
          countryId = req.body.countryId;


        var countQuery = User.find({phone_number: phoneNumber });

        res.status(200).json({
            response:false,
            countQuery:countQuery,
            message:"please enter valid phone number"
        });


    
});




















route.get("/:userId",(req, res, next)=>{
    const userId = req.query.userId;
    User.findById(userId).then(result => {
        res.status(200).json({
            message:"it's work!",
            user:result
        });
    });
    
});


route.post("/",(req, res, next)=>{
    

    const user = new User({
        _id: mongodb.Types.ObjectId(),
        phone_number: req.body.phone_number,
        _id: mongodb.Types.ObjectId(),
        _id: mongodb.Types.ObjectId()
    })

    user.save().then(result => {
        console.log(result);
    });
    res.status(200).json({
        message:"it's work!"
    });
});


route.get("/all",(req, res, next)=>{
    
    User.find({}, '_id').then(result => {
        res.status(200).json({
            message:"it's work!",
            users:result
        });
    });
    
    
});


module.exports = route;