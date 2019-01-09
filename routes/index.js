const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    var html;

    html = `
        <h1 style="text-align: center;">Welcome to my list of games coming out in 2019</h1>
        <h3 style="text-align: center;">There will be information on the release date and what platforms you can expect them to be playable on.
        <br>
        Also if you click on the title of the game you will be redirected routed to another page with a short discription about the game.</h3>
        <div style="text-align: center;">
            <a href="/games" style="font-size: 20px; width: 250px; border-radius: 4px; color: black; border: 2px solid #4CAF50;">GO TO LIST</a>
        </div>
        <div style="text-align: center;">
            <img src="/images/front_page/ps4.png" width=400px><img src="/images/front_page/nintendo_switch.jpg" width=400px><img src="/images/front_page/xbox_one.jpg" width=400px>
            <img src="/images/front_page/consoles.jpg" width=500px>
        </div>
    `

    res.send(html);
});


module.exports = router;