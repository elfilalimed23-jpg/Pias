const admin = require('firebase-admin');

si (!admin.apps.length) {

admin.initializeApp({

informations d'identification : admin.credential.cert({

projectId : process.env.FIREBASE_PROJECT_ID,

Clé privée : process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),

clientEmail : process.env.FIREBASE_CLIENT_EMAIL

})

});

}

exports.handler = fonction asynchrone (événement, contexte) {

const { téléphone, otp, type } = JSON.parse(event.body);

// Simuler la vérification OTP (en production, vérifier contre Firestore/cache)

if (otp === '123456') { // Remplacer par une vraie vérification

essayer {

const customToken = await admin.auth().createCustomToken(téléphone);

retour {

Code d'état : 200,

corps : JSON.stringify({success : true, token : customToken})

};

} catch (erreur) {

retour {

Code d'état : 500,

corps : JSON.stringify({succès : false, erreur : error.message})

};

}

} autre {

retour {

Code d'état : 400,

corps : JSON.stringify({succès : faux, erreur : « Code OTP incorrect » })

};

}

};
