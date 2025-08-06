const Twilio = require('twilio');

exports.handler = fonction asynchrone (événement, contexte) {

const { téléphone } = JSON.parse(event.body);

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Code OTP à 6 chiffres

essayer {

attendre client.messages.create({

de : 'whatsapp:+14155238886', // Numéro Twilio WhatsApp

à : `whatsapp:${phone}`,

body : `Votre code OTP est : ${otp}`

});

// Stocker l'OTP temporairement (ex. : Firestore ou cache)

// Pour simplifier, retourner l'OTP (à sécurité en production)

retour {

Code d'état : 200,

corps : JSON.stringify({success: true, otp})

};

} catch (erreur) {

retour {

Code d'état : 500,

corps : JSON.stringify({succès : false, erreur : error.message})

};

}

};
