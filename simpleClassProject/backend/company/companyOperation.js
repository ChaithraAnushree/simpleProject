let Promise = require('promise');
let companySchema = require('./companySchema');

let saveCompany = (paramter)=>{
    return new Promise((resolve, reject)=>{
        if(paramter){
            let saveCompany = new companySchema(paramter);
            saveCompany.save().then(function(savedData){
                if(savedData){
                    resolve(savedData);
                }
            })

        }
    })
}

let fetchAllCompanyDetails = ()=>{
    return new Promise((resolve, reject)=>{
        companySchema.find()
        .exec()
        .then((data)=>{
            console.log('this is operation file')
            console.log(data);
            if(data){
                resolve(data);
            }
        })
        
    })
}

let fetchOneCompany = (paramter)=>{
    return new Promise((resolve, reject)=>{
        companySchema.findOne({_id:paramter.id})
    })
}

let updateCompany = (id,paramter)=>{
    console.log('paramter in operation file')
    console.log(paramter)
    console.log(id)

    return new Promise((resolve, reject)=>{
        companySchema.findByIdAndUpdate(id, {$set:paramter})
        .then(function(data){
            console.log('data in operation');
            console.log(data);
            if(data){
                resolve(data);
            }
        })
    })

}

let viewCompany = (id,paramter)=>{
    console.log('paramter in operation file')
    console.log(paramter)
    console.log(id)

    return new Promise((resolve, reject)=>{
        companySchema.findByIdAndUpdate(id, {$set:paramter})
        .then(function(data){
            console.log('data in operation');
            console.log(data);
            if(data){
                resolve(data);
            }
        })
    })

}

let deleteCompany = (id)=>{
    return new Promise((resolve, reject)=>{
        companySchema.findByIdAndRemove(id).then((data)=>{
            console.log('data in operation file')
            console.log(data)
            if(data){
                resolve(data)
            }
        })
    })
}


module.exports = {
    saveCompany:saveCompany,
    fetchAllCompanyDetails:fetchAllCompanyDetails,
    fetchOneCompany:fetchOneCompany,
    updateCompany:updateCompany,
    deleteCompany:deleteCompany
}