var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var feedbackData = require('../data/feedback.json');



router.get('/api', (req,res)=>{
    res.json(feedbackData);
});


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/api', (req,res)=>{
    feedbackData.unshift(req.body);
    fs.writeFile('./data/feedback.json', JSON.stringify(feedbackData), 'utf8', (error)=>{
        if (error){
            console.log(error);
        };
    });
    res.json(feedbackData);
});





// router.delete()








module.exports = router;