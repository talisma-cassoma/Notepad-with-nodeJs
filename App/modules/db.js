//conec data base
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  // o parametro `host`  é somente requirido para outras databases, 
  //o sqlite é uma banco de dados que nao que fica armazenado na tua maquina 
  //e nao é servida pelo servidor como as outras bases de dados 
  dialect: 'sqlite',
  storage: 'sqliteDB/database.sqlite' //vai criar essa rota para a dB
});

/*//na minha maquina(pc) usei uma base de dados msql:
const sequelize = new Sequelize('postApp', 'root', 'password', {
    host: "localhost", //o sitio onde está hospedado(no meu pc ) 
    dialect: "mysql" //o tipo de DB 
})
*/ 
//exportar as duas variaveis em forma de obj
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
