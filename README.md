# Notepad with node

backend made in NODE with a mysql database

frontend made with pure html and css 

credits for <a href="https://dribbble.com/shots/14037848-Docket-note-Side-menu">Ariuka</a> from dribble for <a href="https://dribbble.com/shots/14037848-Docket-note-Side-menu">UI design</a>

<h2>Frontend</h2>

<p align="center">
    <img alt="App" title="App gif" src="images/App.gif"/>
</p>
<p align="center">
    <img alt="App functions" title="App functions " src="images/appFunction.png" with="100%"/>
</p>
<p>
the button changes depending on the mode
if we just see the notes it stays like this:</p>
<p align="center">
    <img alt="delete Note" title="delete Note" src="images/deleteNote.gif"/>
</p>
<p>but if you edit the note it changes like that</p> 
<p align="center">
    <img alt="save changes" title="save changes" src="images/saveChanges.gif"/>
</p>

<h2>Backend</h2>

<p>you can run this projet installing those dependencies :</p> 

```npm install express --save```

```npm install --save sequelize```

```npm install sqlite3``` for a sqlite db or ```npm install mysql2``` for a mysql db 

```npm install nodemon -g```

```npm install --save express-handlebars```

```npm install --save body-parser```

<p>for create a mySQL database -> create js file and run this code on node:</p>

```js
cont db =require("./module/db") //<-- db.js directory 
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING(50)
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

Post.sync({force: true});//para forçar a criar ...

db.sequelize.authenticate().then(function(){
    console.log('conectado ao banco de dados')
}).catch(function(erro){
    console.log('erro de coneccao'+ erro)
})
```

wanna see for your self take a look <a href="https://notepad-with-nodejs.talismamanuel.repl.co/">here</a>
