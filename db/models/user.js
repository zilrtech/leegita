const mongoose = require('mongoose'),
        Schema = mongoose.Schema;
relationship = require("mongoose-relationship");


const UserScema = new Schema(
{
    _id: mongoose.Schema.Types.ObjectId,
    phone_number:mongoose.Schema.Types.String,
    activition_data: {
        hash:mongoose.Schema.Types.String,
        sms_code:mongoose.Schema.Types.Number,
        email_code:mongoose.Schema.Types.String,
        last_update:mongoose.Schema.Types.Date
    },
    name:{
        first:mongoose.Schema.Types.String,
        middel:mongoose.Schema.Types.String,
        last:mongoose.Schema.Types.String
    },
    address: {
        country:{ type:Schema.ObjectId, ref:"Country" },
        city:mongoose.Schema.Types.String,
        street:mongoose.Schema.Types.String,
        block:mongoose.Schema.Types.String,
        building:mongoose.Schema.Types.Number
    },
    social_media:{
        facebook:{
            email:mongoose.Schema.Types.String,
            link:mongoose.Schema.Types.String,
            username:mongoose.Schema.Types.String
        },
        twitter:{
            email:mongoose.Schema.Types.String,
            link:mongoose.Schema.Types.String,
            username:mongoose.Schema.Types.String
        }
    },
    about:{
        bio:mongoose.Schema.Types.String,
        profile_image:mongoose.Schema.Types.String,
        cover_image:mongoose.Schema.Types.String,
        intro:mongoose.Schema.Types.String,
        age:mongoose.Schema.Types.Number,
        gender:mongoose.Schema.Types.String,
        fav:[
            {
                name:mongoose.Schema.Types.String
            }
        ]

    },
    activity:{
        balance:mongoose.Schema.Types.Number,
        currency:mongoose.Schema.Types.String,
        status:mongoose.Schema.Types.String,
        created_at:mongoose.Schema.Types.Date,
        last_edit:mongoose.Schema.Types.Date,
        following_count:mongoose.Schema.Types.Number,
        followers_count:mongoose.Schema.Types.Number,
        event:[
            {
                name:mongoose.Schema.Types.String,
                time:mongoose.Schema.Types.Date
            }
        ]
    },
    users_activities:{
        blocked:[{ type:Schema.ObjectId, ref:"User" }],
        followings:[{ type:Schema.ObjectId, ref:"User" }],
        followers:[{ type:Schema.ObjectId, ref:"User" }]
    }
}
);


module.exports = mongoose.model("User",UserScema);