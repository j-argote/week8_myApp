const express = require('express');
const router = express.Router();




// router.get('/games', (req, res)=>{
//     var gamesData = data.games;
//     var html = '';
//     var count = 0;

//     gamesData.forEach((item)=>{
//         html += `
//             <h2><a href="/games/${count}">${item.title}</a></h2>
//             <img src="/images/covers/${item.image}" width=150px >
//             <p><b>Platforms:</b> ${item.platforms} <span style="color: white;">_____</span> <span><b>Release Date:</b> ${item.release_date}</span></p>

//         `
//         count++;
//     })

//     res.send(html);

//     });
// });


// router.get('/games/:gameID', (req, res)=>{
//     var html;

//     var game = data.games[req.params.gameID]
    
//     html = `
//         <h2>${game.title}</h2>
//         <img src="/images/covers/${game.image}" width=150px >
//         <h3>Summary</h3>
//         <p>${game.summary}</p>
//         <p><b>Platforms:</b> ${game.platforms} <span style="color: white;">_____</span> <span><b>Release Date:</b> ${game.release_date}</span></p>
//     `

//     res.send(html)
// });


router.get('/games', (req,res)=>{
    var data = req.app.get('appData');
    var gamesData = data.games;

    res.render('games', {
        pageTitle: 'New Games in 2019',
        pageID: 'games',
        gamesData: gamesData,
        gameID: 'index'
    }); 

});



router.get('/games/:gameID', (req,res)=>{
    var data = req.app.get('appData');
    var gamesData = data.games[req.params.gameID];

    res.render('games',{
        pageTitle: 'New Games in 2019',
        pageID: 'gameID',
        gamesData: gamesData
    });
});

module.exports = router;