let mongoose = require('mongoose');
let schema = mongoose.Schema;
let companySchema = schema({

    company_id:{
        type:Number,
        required:true,
    },
    company_name:{
        type:String,
        required:false
    },
    company_adress:{
        type:String,
        required:false
    },
    company_type:{
        type:String,
        required:false
    }
});

let Company = module.exports = mongoose.model('Company', companySchema);
