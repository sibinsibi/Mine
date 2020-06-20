
var admin = {}
  if(process.server){
    admin = require('firebase-admin');
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: 'https://mine-d63d6.firebaseio.com'
      });
  }

  export default admin;