# **ArgentBank - Application de gestion bancaire**
![ArgentBank Icon](./src/assets/argentBankLogo.webp)


## **Table des matières**
1. [Description du projet](#description-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies utilisées](#technologies-utilisées)
4. [Prérequis](#prérequis)
5. [Installation](#installation)
---

## **1. Description du projet**
**ArgentBank** est une application bancaire permettant aux utilisateurs de gérer leurs comptes et leurs transactions en ligne. Ce projet est divisé en deux phases :
- **Phase 1** : Authentification des utilisateurs, gestion des profils.
- **Phase 2** : Gestion des transactions (consultation, ajout, modification, suppression).

L'application est construite avec **React** et utilise **Redux** pour gérer l'état global. L'objectif principal est de permettre aux utilisateurs de se connecter, de consulter et de modifier leurs informations personnelles de manière sécurisée.

---

## **2. Fonctionnalités**
### Phase 1 : Authentification et Profil
- **Connexion / Déconnexion** des utilisateurs.
- **Consultation et modification** du profil utilisateur (nom, prénom).
- Accès sécurisé aux informations utilisateur via des **routes protégées**.
  
### Phase 2 : Transactions
- Consultation des transactions par compte.
- Ajout, modification et suppression de transactions.

---

## **3. Technologies utilisées**
- **Frontend** :
  - React
  - Redux (gestion de l'état global)
  - React Router (navigation entre les pages)
  - CSS (styles personnalisés)
- **Backend** :
  - API REST (fourni pour la gestion des utilisateurs et des transactions)
  - Documentation Swagger pour les endpoints API
---
## **4. Prérequis**
Avant d'exécuter ce projet, assurez-vous d'avoir installé les éléments suivants sur votre machine :
- **Node.js** (version 12 ou supérieure)
- **npm** (ou **yarn**)
- **nvm** 
---
## **5. Installation**
### 1. **Cloner le projet**
```bash
git clone https://github.com/samiNedjai/argentbank.git
```
### 2. **Backend** 
- **Accéder au Backend**
```bash
cd .\BackEnd\
```
- **utiliser node v 12**
```bash
nvm use 12
```
- **lancer le serveur**
```bash
npm run dev:server
``` 
### 3. **Frontend** 
- **Accéder au frontend**
```bash
cd .\frontend
```
- **install dependencies**
```bash
npm install
```
- **lancer l'application**
```bash
npm start
```

