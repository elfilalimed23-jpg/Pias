const Twilio = require('twilio');

 

exports.handler = async function(event, context) {

    const { to, message } = JSON.parse(event.body);

    const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    try {

        await client.messages.create({

            from: 'whatsapp:+14155238886', // Numéro Twilio WhatsApp

            to: `whatsapp:${to}`,

            body: message

        });

        return {

            statusCode: 200,

            body: JSON.stringify({ success: true })

        };

    } catch (error) {

        return {

            statusCode: 500,

            body: JSON.stringify({ success: false, error: error.message })

        };

    }

};
