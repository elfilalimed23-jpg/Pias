// main.js

     document.getElementById('sendOTPButton').addEventListener('click', async () => {

         const phone = document.getElementById('phoneInput').value;

         const loginError = document.getElementById('loginError');

         if (!phone || !phone.match(/^\+\d{10,}$/)) {

             loginError.textContent = 'Veuillez entrer un numéro WhatsApp valide (ex. +33612345678)';

             return;

         }

         try {

             const response = await fetch('/.netlify/functions/send-otp', {

                 method: 'POST',

                 headers: { 'Content-Type': 'application/json' },

                 body: JSON.stringify({ phone })

             });

             const result = await response.json();

             if (result.success) {

                 loginError.textContent = 'Code OTP envoyé ! Entrez le code reçu.';

                 document.getElementById('otpSection').style.display = 'block';

             } else {

                 loginError.textContent = result.error || 'Erreur lors de l’envoi de l’OTP';

             }

         } catch (error) {

             loginError.textContent = 'Erreur : ' + error.message;

         }

     });

 

     document.getElementById('verifyOTPButton').addEventListener('click', async () => {

         const phone = document.getElementById('phoneInput').value;

         const otp = document.getElementById('otpInput').value;

         const loginError = document.getElementById('loginError');

         if (!otp) {

             loginError.textContent = 'Veuillez entrer le code OTP';

             return;

         }

         try {

             const response = await fetch('/.netlify/functions/verify-otp', {

                 method: 'POST',

                 headers: { 'Content-Type': 'application/json' },

                 body: JSON.stringify({ phone, otp, type: 'client' })

             });

             const result = await response.json();

             if (result.success) {

                 loginError.textContent = 'Connexion réussie !';

                 // Rediriger vers le tableau de bord ou afficher une section

                 document.getElementById('dashboardSection').style.display = 'block';

                 document.getElementById('loginSection').style.display = 'none';

             } else {

                 loginError.textContent = result.error || 'Code OTP incorrect';

             }

         } catch (error) {

             loginError.textContent = 'Erreur : ' + error.message;

         }

     });
