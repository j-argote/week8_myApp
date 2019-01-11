const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.render('index',{
        pageTitle: 'New Games in 2019',
        pageID: 'Home'
    })
})





module.exports = router;