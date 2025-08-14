const admin = require('firebase-admin');
const { verifyOtp, clearOtp } = require('./otp-store');

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
    const { phone, otp } = JSON.parse(event.body);

    if (!verifyOtp(phone, otp)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, error: 'Code OTP incorrect' })
        };
    }

    try {
        const customToken = await admin.auth().createCustomToken(phone);
        clearOtp(phone);
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
};

    }

};
