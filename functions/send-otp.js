const Twilio = require('twilio');

 

exports.handler = async function(event, context) {

    const { phone } = JSON.parse(event.body);

    const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Code OTP à 6 chiffres

    try {

        await client.messages.create({

            from: 'whatsapp:+14155238886', // Numéro Twilio WhatsApp

            to: `whatsapp:${phone}`,

            body: `Votre code OTP est : ${otp}`

        });

        // Stocker l’OTP temporairement (ex. : Firestore ou cache)

        // Pour simplifier, retourner l’OTP (à sécuriser en production)

        return {

            statusCode: 200,

            body: JSON.stringify({ success: true, otp })

        };

    } catch (error) {

        return {

            statusCode: 500,

            body: JSON.stringify({ success: false, error: error.message })

        };

    }

};
