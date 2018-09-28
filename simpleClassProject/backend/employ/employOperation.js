let Promise = require('promise');
let employSchema = require('./employSchema');

let saveEmploy = (paramter)=>{
    return new Promise((resolve, reject)=>{
        if(paramter){
            let saveEmploy = new employSchema(paramter);
            saveEmploy.save().then(function(savedData){
                if(savedData){
                    resolve(savedData);
                }
            })

        }
    })
}

let fetchAllEmployDetails = ()=>{
    return new Promise((resolve, reject)=>{
        employSchema.find()
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

let fetchOneEmploy = (paramter)=>{
    return new Promise((resolve, reject)=>{
        employSchema.findOne({_id:paramter.id})
    })
}

let updateEmploy = (id,paramter)=>{
    console.log('paramter in operation file')
    console.log(paramter)
    console.log(id)

    return new Promise((resolve, reject)=>{
        employSchema.findByIdAndUpdate(id, {$set:paramter})
        .then(function(data){
            console.log('data in operation');
            console.log(data);
            if(data){
                resolve(data);
            }
        })
    })

}

let viewEmploy = (id,paramter)=>{
    console.log('paramter in operation file')
    console.log(paramter)
    console.log(id)

    return new Promise((resolve, reject)=>{
        employSchema.findByIdAndUpdate(id, {$set:paramter})
        .then(function(data){
            console.log('data in operation');
            console.log(data);
            if(data){
                resolve(data);
            }
        })
    })

}

let deleteEmploy = (id)=>{
    return new Promise((resolve, reject)=>{
        employSchema.findByIdAndRemove(id).then((data)=>{
            console.log('data in operation file')
            console.log(data)
            if(data){
                resolve(data)
            }
        })
    })
}


module.exports = {
    saveEmploy:saveEmploy,
    fetchAllEmployDetails:fetchAllEmployDetails,
    fetchOneEmploy:fetchOneEmploy,
    updateEmploy:updateEmploy,
    deleteEmploy:deleteEmploy
}