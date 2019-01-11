var express = require('express');
var router = express.Router();


router.get('/feedback', (req,res)=>{
    res.render('feedback',{
        pageTitle: 'New Games in 2019',
        pageID: 'feedback'
    });
});

module.exports = router;