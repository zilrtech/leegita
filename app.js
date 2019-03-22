const   express     =   require("express");
const   app         =   express();
const   morgan      =   require("morgan");
const   userRoute        =   require("./api/routes/user");
const   coutryRoute        =   require("./api/routes/country");
const   mongodb     =   require("mongoose");
const   bodyParser  =   require("body-parser");
// const   translate   =   require("./lang/init");
const   localization =   require("./lang/ar.json");


// body parser
app.use(morgan());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use((req, res, next)=>{
//     const lang = req.body.lang;
//     if(translate.isTranslate(lang)){
//        // lang        =   require("./lang/"+lang+".json");
//         next();
//     }else{
//         const error = new Error("You Shoud Send lang");
//         error.status= 404;
//         next(error)

//     }
// });






// allow origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    

    if(req.method==="OPTIONS"){
        //res.header('Access-Control-Allow-Methods','PUT, PATH, DELETE, GET, POST');
        return res.status(200).json({});
    }
    
    next();
});





mongodb.connect("mongodb+srv://ali4desgin:gNRTWyIYcsAQuBXV@cluster0-v4rob.mongodb.net/test?retryWrites=true");






//routes
app.use("/user",userRoute);
app.use("/country",coutryRoute);



// no route
app.use((req, res, next)=> {
    const error = new Error(localization.errors.route_not_found);
    error.status= 404;
    next(error)
});




// handel errors
app.use((error,req, res, next)=>{
    res.status(error.status || 5000).
    json({
        response:false,
        message: error.message
    });
});
 


module.exports = app;