const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true});//para forçar a criar caso nao exista ou recriar a tabela ...

module.exports = Post
