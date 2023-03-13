const express = require("express")
const app =  express();
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser')
const Postagens = require('./modules/post');

//config hbs
    //tamplate engine
    app.engine('handlebars', engine({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars')


//config body-parser
    app.use(bodyParser.urlencoded({extended: false}))//o body-parser é uma biblioteca js que ajuda a pegar os dados enviado pelo formulario pelo metodo 'post' 
    app.use(bodyParser.json())


//rotas 
    app.get('/', function(req, res){
        //recebendos os dados da db
        myposts = Postagens.findAll({
            order: [['id', 'DESC']]
  
        }).then( function(posts){//caso de duvida reassitir aula #25 
            //console.log(posts)
            res.render('home', {posts})//<--a minha variavel posts recebe as proproiedades do argumento postx passado por parametro
        })
    })    

    app.use(express.static('public'));//rotas para arquivos staticos como .css , .js  ... etc

    app.post('/postanote', async function(req, res){//rota pra pegar os dados
        console.log(req.body)
        //guardando dados na nossa db vindo do front-end
        return await Postagens.create({
            title : req.body.title, 
            content: req.body.content,
            color: req.body.color
        }).then(function(){
            res.redirect('/')
        }).catch(function(error){
            res.send('submit post error! : '+error)
        })
    })

    app.get('/delete/:id', function(req, res){
        //deletando dados apartir do botao no front-end
        Postagens.destroy({where: {id: req.params.id} //o id sera passado pra a home.handlebars
        }).then(function(){
            res.redirect('/')//me levar de volta a homepage
            console.log('poste '+ req.params.id + ' deletado')
        }).catch(function(error){
            res.send('esse post nao existe')
            console.log('error: ' + error)
            })
    })

    app.post('/modify/:id', function(req, res){//rota pra pegar os dados
        //modificando os dados na nossa db vindo do front-end
        Postagens.update({
            titulo : req.body.title, 
            conteudo: req.body.content,
            //color: req.body.color 

        }, { where: {
              id: req.params.id //req.body.id,
            }
          }).then(function(){
            res.redirect('/')
            //console.log('id: ' + req.params.id + ' titulo: '+ req.body.inputTitle + ' poste: ' + req.body.inputPoste)
        }).catch(function(error){
            res.send('houve um erro: '+ error)
        })
    })

//SERVIDOR
app.listen(5500, function(){
    console.log("servidor rodando! vamos fazer nosso app")
});

