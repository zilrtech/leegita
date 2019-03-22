const mongoose = require('mongoose'),
        Schema = mongoose.Schema;
relationship = require("mongoose-relationship");


const CountryScema = new Schema(
{
    _id: Schema.Types.ObjectId,
    name:
        {
            ar:Schema.Types.String,
            en:Schema.Types.String
        }
    ,
    currency:
        {
            ar:Schema.Types.String,
            en:Schema.Types.String
        }
    ,
    code:Schema.Types.String,
    flag:Schema.Types.String,
    status:Schema.Types.String
}
);


module.exports = mongoose.model("Country",  CountryScema);