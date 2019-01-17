var express = require('express');
var router = express.Router();



router.get('/chat', (req, res)=>{
    res.render('chat', {
        pageTitle: 'New Games in 2019',
        pageID: 'chat'
    })
});


module.exports = router