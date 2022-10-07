const express = require("express")
const app =  express();
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./modules/post');

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
        Post.findAll({
            order: [['id', 'DESC']]
        }).then( function(posts){//caso de duvida reassitir aula #25 
            res.render('home', {posts: posts})//<--a minha variavel posts recebe as proproiedades do argumento postx passado por parametro
        })
    })    

    app.get('/postagem', function(req, res){//rota para aprensentar o formulario
    //req.body.nameDoCampoNoForm //comando pra pegar os dados 
    res.render("formulario") //os arquivos handlebars com excecao do main devem estar todos na pasta views
    })
   
    app.use(express.static('public'));//rotas para arquivos staticos como .css , .js  ... etc

    //app.post('/confirmacao', function(req, res){//rota pra pegar os dados
        //req.body.nomeDoCampoNoForm //comando pra pegar os dados 
        //console.log("voce escreveu Titulo: "+ req.body.titulo + " postou: " + req.body.postagem) //os arquivos handlebars com excecao do main devem estar todos na pasta views
            
    
    app.post('/confirmacao', function(req, res){//rota pra pegar os dados
        //guardando dados na nossa db vindo do front-end
        Post.create({
            titulo : req.body.titulo,
            conteudo: req.body.postagem
        }).then(function(){
            res.redirect('/')
        }).catch(function(error){
            res.send('houve um erro: '+error)
        })
    })

    app.get('/deletar/:id', function(req, res){
        //deletando dados apartir do botao no front-end
        Post.destroy({where: {id: req.params.id} //o id sera passado pra a home.handlebars
        }).then(function(){
            res.redirect('/')//me levar de volta a homepage
            console.log('poste '+ req.params.id + ' deletado')
        }).catch(function(error){
            res.send('esse post nao existe')
            console.log('error: ' + error)
            })
    })

    app.post('/modificar/:id', function(req, res){//rota pra pegar os dados
        //modificando os dados na nossa db vindo do front-end
        Post.update({
            titulo : req.body.inputTitle, 
            conteudo: req.body.inputPost 

        }, { where: {
              id: req.params.id //req.body.id,
            }
          }).then(function(){
            res.redirect('/')
            console.log('id: ' + req.params.id + ' titulo: '+ req.body.inputTitle + ' poste: ' + req.body.inputPoste)
        }).catch(function(error){
            res.send('houve um erro: '+ error)
        })
    })

//SERVIDOR
app.listen(5500, function(){
    console.log("servidor rodando! vamos fazer nosso app")
});

