const express = require("express")
const app =  express();
const handlebars = require('express-handlebars')
//const bodyParser = require('body-parser')
//var cors = require('cors')

const {BotControls, readBotSatus} = require('./modules/firebase')


    //app.use(cors())
//config hbs
    //tamplate engine
    app.engine('handlebars', handlebars({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars')

//rotas
    app.get('/commingData', async (req, res)=>{
        
        try {
             await readBotSatus.once('value', (snapshot) => {
                    const data = snapshot.val();

                return res.json(data) 
                })
                  
        } catch (error) {
            console.error(error)
        }
    })
    
    app.get('/', function(req, res){//enviando a pagina pricipal 
        res.render('home')//
    })

    app.use(express.static('public'));//rotas para arquivos staticos como .css , .js  ... etc

//SERVIDOR
app.listen(5500, function(){
    console.log("servidor rodando! vamos fazer nosso app")
});

