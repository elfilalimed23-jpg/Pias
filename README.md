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
