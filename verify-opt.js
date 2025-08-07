const admin = require('firebase-admin');

 

if (!admin.apps.length) {

    admin.initializeApp({

        credential: admin.credential.cert({

            projectId: process.env.FIREBASE_PROJECT_ID,

            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),

            clientEmail: process.env.FIREBASE_CLIENT_EMAIL

        })

    });

}

 

exports.handler = async function(event, context) {

    const { phone, otp, type } = JSON.parse(event.body);

    // Simuler la vérification OTP (en production, vérifier contre Firestore/cache)

    if (otp === '123456') { // Remplacer par une vraie vérification

        try {

            const customToken = await admin.auth().createCustomToken(phone);

            return {

                statusCode: 200,

                body: JSON.stringify({ success: true, token: customToken })

            };

        } catch (error) {

            return {

                statusCode: 500,

                body: JSON.stringify({ success: false, error: error.message })

            };

        }

    } else {

        return {

            statusCode: 400,

            body: JSON.stringify({ success: false, error: 'Code OTP incorrect' })

        };

    }

};
