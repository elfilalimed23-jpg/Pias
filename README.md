# Pias

## Objectif de l'application
Pias est une application Web qui propose une authentification des utilisateurs via un code OTP envoyé sur WhatsApp. Elle s'appuie sur **Twilio** pour l'envoi des messages et sur **Firebase** pour la gestion des utilisateurs.

## Prérequis
- [Node.js](https://nodejs.org/) et npm
- Un projet **Firebase** configuré
- Un compte **Twilio** avec l'accès à l'API WhatsApp
- Un compte **Netlify** pour le déploiement

## Configuration des variables d'environnement
Créez un fichier `.env` à la racine du projet ou configurez ces variables dans votre tableau de bord Netlify :

```bash
TWILIO_ACCOUNT_SID=VotreSIDTwilio
TWILIO_AUTH_TOKEN=VotreTokenTwilio
FIREBASE_PROJECT_ID=VotreProjetFirebase
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=votre-compte@firebase-adminsdk.gserviceaccount.com
```

Le fichier `firebase-config.js` doit être ajusté avec les valeurs de votre projet Firebase (apiKey, authDomain, etc.).

## Démarrage local
1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Installer l'outil Netlify CLI si nécessaire :
   ```bash
   npm install -g netlify-cli
   ```
3. Lancer l'application en mode développement :
   ```bash
   netlify dev
   ```
   Le site est alors disponible sur http://localhost:8888.

## Déploiement sur Netlify
1. Connecter le dépôt Git à Netlify.
2. Dans **Site Settings > Build & deploy > Environment**, ajouter les variables d'environnement listées ci-dessus.
3. Déclencher un déploiement. Netlify utilise le fichier `netlify.toml` pour détecter le dossier des fonctions et publier le site.

## Cohérence linguistique
Ce dépôt maintient une documentation et des commentaires en français afin de conserver une cohérence linguistique pour tous les contributeurs.
readme

# Pias

Brève présentation du projet (description générale, fonctionnalités principales, etc.).

## Firebase configuration via environment variables

The Firebase client configuration is injected at build time. Sensitive values such as the API key are provided through environment variables and are not committed to source control.

### Development

1. Define the required environment variables:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
2. Run the build script to inject the values into `firebase-config.js`:

   ```bash
   node scripts/inject-env.js


+30
-1

# Pias

## Firebase configuration via environment variables

The Firebase client configuration is injected at build time. Sensitive values
such as the API key are provided through environment variables and are not
committed to source control.

### Development

1. Define the required environment variables:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
2. Run the build script to inject the values into `firebase-config.js`:

   ```bash
   node scripts/inject-env.js
   ```

### Netlify deployment

This repository includes a `netlify.toml` configuration that runs the injection
script during the build. In the Netlify UI, configure the environment variables
listed above. If the Firebase API key should remain public, you can disable
secret scanning for it by setting `SECRETS_SCAN_OMIT_KEYS=FIREBASE_API_KEY` in
Netlify's environment variable settings.
