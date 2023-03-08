const db = require('./db')

const Post = db.sequelize.define('postagens', {
    id : {
        type: db.datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    title: {
        type: db.datatypes.STRING
    },
    content:{
        type: db.datatypes.TEXT
    },
    color:{
        type: db.datatypes.STRING,
        allowNull: false
    }
})

//Post.sync({force: true});//para forçar a criar caso nao exista ou recriar a tabela ...

console.log(Post === db.sequelize.models.Post); 
module.exports = Post
