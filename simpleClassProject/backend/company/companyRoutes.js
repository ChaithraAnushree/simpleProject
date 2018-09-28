let express = require('express');
let router = express.Router();
companyOperation = require('./companyOperation');

/**
 * saving the new Company
 */
router.post('/saveCompany', function(req, res){

    console.log(req.body);

    let companyObject = {
        company_id : req.body.companyId,
        company_name : req.body.companyName,
        company_adress : req.body.companyAdress,
        company_type : req.body.companyType
    }
    companyOperation.saveCompany(companyObject).then(function(DBsavedData){
        res.send({success:true,MSG:'Company saved successfully',clientViewData:DBsavedData})
    })

});


/**
 * Fetching the complete company details
 */
router.get('/companyDetails',function(req, res){
    companyOperation.fetchAllCompanyDetails().then((companyDetails)=>{
        res.send({success:true,
            MSG:'Company details found',
            companyData:companyDetails
        })
    })
});



/**
 * For deleting a particular company
 */
router.post('/deleteCompany',function(req, res){

    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    var id = req.body.params;
    companyOperation.deleteCompany(id).then((companyDetails)=>{
        res.send({success:true,
            MSG:'Company deleted successfully',
            companyData:companyDetails
        })
    })
});



/**
 * For update a particular company
 */
router.post('/updateCompany',function(req, res){

    console.log(req.body);

    var id = req.body._id;

    let companyObject = {
        company_id : req.body.company_id,
        company_name : req.body.company_name,
        company_adress : req.body.company_adress,
        company_type : req.body.company_type
    }
    companyOperation.updateCompany(id,companyObject).then((companyDetails)=>{

        console.log("companyDetails in routes");
        console.log(companyDetails);
        res.send({success:true,
            MSG:'Company details Updated'
        })
    })
});

router.get('/viewCompany',function(req, res){
    companyOperation.fetchAllCompanyDetails().then((companyDetails)=>{
        res.send({success:true,
            MSG:'Company details found',
            companyData:companyDetails
        })
    })
});

module.exports = router;