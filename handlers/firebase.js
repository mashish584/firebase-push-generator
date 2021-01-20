var admin = require("firebase-admin");

var serviceAccount = require("../config/firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://next-ead8b.firebaseio.com"
});

exports.sendPushNotification =  async function(message){
    const response = await admin.messaging().send(message);
    console.log({response})
    return response;
}