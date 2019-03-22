const   express =   require("express");
const   mongodb =   require("mongoose");
const   route   =   express.Router();
const   Country =   require("../../db/models/country");



route.post("/create",(req, res, next)=>{
    

    const country = new Country({
        _id: mongodb.Types.ObjectId(),
        name:
        
            {
                ar:req.body.ar_name,
                en:req.body.en_name
            },

        currency:
            {
                ar:req.body.ar_currency,
                en:req.body.en_currency
            }
        ,
        code:req.body.code,
        flag:req.body.flag,
        status:"active"
        
    })

    country.save().then(result => {
        res.status(200).json({
            response:true,
            message:"country successfully saved!"
        });
    });
    
});


route.get("/list",(req, res, next)=>{
    Country.find({ status: 'active'}).then(result => {
        res.status(200)
        .json({
            response:true,
            countries:result
        });
    });
});





module.exports = route;