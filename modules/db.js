//conec data base
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  // o parametro `host`  é somente requirido para outras databases, 
  //o sqlite é um banco de dados que fica armazenado na tua maquina 
  //o sqlite nao é servido pelo servidor como as outras bases de dados 
  dialect: 'sqlite',
  storage: './sqliteDB/database.sqlite' //vai criar essa rota para a dB
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

/*//na minha maquina(pc) usei uma base de dados msql:
const sequelize = new Sequelize('postApp', 'root', 'password', {
    host: "localhost", //o sitio onde está hospedado(no meu pc ) 
    dialect: "mysql" //o tipo de DB 
})
*/ 
//exportar as duas variaveis em forma de obj
module.exports = {
    datatypes: DataTypes,
    sequelize
}
