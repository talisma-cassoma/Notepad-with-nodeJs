var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("..//intellcapbot-firebase-adminsdk-gyxhm-04b84f656a.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://intellcapbot-default-rtdb.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();   

//gravar dado de imagem no firebase
let BotControls = function ( value) {
    db.ref('/controls').update({
        value
    }, (error) => {
        if (error) {
          console.log('The write failed...') 
        } else {
            console.log('// Data saved successfully!')
        }
      });}
    
    //leitura dos dados do firebase 
    var readBotSatus = db.ref('/');

module.exports = {BotControls, readBotSatus}