let express = require('express');
let router = express.Router();
employOperation = require('./employOperation');

/**
 * saving the new employ
 */
router.post('/saveEmploy', function(req, res){

    console.log(req.body);

    let employObject = {
        employ_id : req.body.employId,
        employ_name : req.body.employName,
        employ_adress : req.body.employAdress,
        employ_type : req.body.employType
    }
    employOperation.saveEmploy(employObject).then(function(DBsavedData){
        res.send({success:true,MSG:'Employ saved successfully',clientViewData:DBsavedData})
    })

});


/**
 * Fetching the complete employ details
 */
router.get('/employDetails',function(req, res){
    employOperation.fetchAllEmployDetails().then((employDetails)=>{
        res.send({success:true,
            MSG:'Employ details found',
            employData:employDetails
        })
    })
});



/**
 * For deleting a particular employ
 */
router.post('/deleteEmploy',function(req, res){

    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    var id = req.body.params;
    employOperation.deleteEmploy(id).then((employDetails)=>{
        res.send({success:true,
            MSG:'Employ deleted successfully',
            employData:employDetails
        })
    })
});



/**
 * For update a particular employ
 */
router.post('/updateEmploy',function(req, res){

    console.log(req.body);

    var id = req.body._id;

    let employObject = {
        employ_id : req.body.employ_id,
        employ_name : req.body.employ_name,
        employ_adress : req.body.employ_adress,
        employ_type : req.body.employ_type
    }
    employOperation.updateEmploy(id,employObject).then((employDetails)=>{

        console.log("employDetails in routes");
        console.log(employDetails);
        res.send({success:true,
            MSG:'Employ details Updated'
        })
    })
});

router.post('/viewEmploy',function(req, res){

    console.log(req.body);

    var id = req.body._id;

    let employObject = {
        employ_id : req.body.employ_id,
        employ_name : req.body.employ_name,
        employ_adress : req.body.employ_adress,
        employ_type : req.body.employ_type
    }
    employOperation.updateEmploy(id,employObject).then((employDetails)=>{

        console.log("employDetails in routes");
        console.log(employDetails);
        res.send({success:true,
            MSG:'Employ details found'
        })
    })
});

module.exports = router;