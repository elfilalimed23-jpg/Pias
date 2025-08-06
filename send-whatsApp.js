const Twilio = require('twilio');

exports.handler = fonction asynchrone (événement, contexte) {

const { à, message } = JSON.parse(event.body);

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

essayer {

attendre client.messages.create({

de : 'whatsapp:+14155238886', // Numéro Twilio WhatsApp

à : `whatsapp:${to}`,

corps : message

});

retour {

Code d'état : 200,

corps : JSON.stringify({success: true})

};

} catch (erreur) {

retour {

Code d'état : 500,

corps : JSON.stringify({succès : false, erreur : error.message})

};

}

};
