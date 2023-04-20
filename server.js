const express = require("express")
const app = express();
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser')
const Postagens = require('./modules/post');
const cors = require("cors")



//tamplate engine
app.engine('handlebars', engine({defaultlayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'));
//config body-parser
//app.use(bodyParser.urlencoded({extended: false}))//o body-parser é uma biblioteca js que ajuda a pegar os dados enviado pelo formulario pelo metodo 'post' 
//app.use(bodyParser.json())

//allow browser fecth api requests 
app.use(cors());

//allow json post requests
app.use(express.json());

//routes
app.get('/', async (req, res)=>{
    //recebendos os dados da db
     await Postagens.findAll({
        order: [['id', 'DESC']]

    }).then( function(posts){// 
        //console.log(posts)
        res.render('home', {posts})
    })
})    

//get all notes
app.get('/notes', async (request, response) => {
    //receiving data from db
    const posts = await Postagens.findAll(
        {
            order: [['id', 'DESC']]
        });

    return response.json(posts);
})

app.post("/create", async (request, response) => {

    const { title, content, color } = request.body;

    await Postagens.create({
        title,
        content,
        color
    });
    
    return response.status(201).send();
})

app.put("/modify/:id", async (request, response)=>{

    const { id } = request.query;
    const { title, content } = request.body
    
    await Postagens.update({      
        title,
        content,
    }, 
    { where: { id : id } }
    );
    
    //console.log(data);
    return response.status(201).send();
})

app.delete("/delete/:id", async(request, response)=>{
    const { id } = request.query;
    
    await Postagens.destroy( {where: { id: id }} );  

    return response.status(201).send();
})

//SERVIDOR
app.listen(5500, function () {
    console.log("ervidor rodando! vamos fazer nosso app")
});