<!-- TOC -->

- [Utilisation](#utilisation)
    - [Démonstration](#démonstration)
        - [Les pages login](#les-pages-login)
    - [Login Cabinet](#login-cabinet)
    - [Login Patient](#login-patient)
- [Prérequis pour builder l'application](#prérequis-pour-builder-lapplication)
    - [NodeJS + NPM](#nodejs--npm)
        - [Installer Node & NPM avec NVM](#installer-node--npm-avec-nvm)
    - [NativeScript](#nativescript)
        - [NativeScript CLI](#nativescript-cli)
        - [NativeScript SideKick (optionnel)](#nativescript-sidekick-optionnel)
    - [Android SDK & Emulateur](#android-sdk--emulateur)
        - [Android Studio](#android-studio)
        - [Emulateur (optionnel)](#emulateur-optionnel)
- [Builder l'application](#builder-lapplication)

<!-- /TOC -->
# Utilisation

## Démonstration

* Lancez l'application 'MonOrtho'

### Les pages login

* Vous arrivez sur une page vous proposant de saisir votre 'Code cabinet', entrez 12345 (ensuite 54321 si vous voulez montrez le changement dynamique de cabinet)
* Vous arrivez sur le second login  

## Login Cabinet

12345

## Login Patient

**Patient 1 :**
BU26
12345

**Patient 2 :**
TO53
12345


# Prérequis pour builder l'application

## NodeJS + NPM
*📖 https://nodejs.org/en/ 📖 https://github.com/creationix/nvm
🍎 Pour MacOS suivez cette procédure : https://docs.nativescript.org/start/ns-setup-os-x/*

### Installer Node & NPM avec NVM
```
sudo apt install curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```
**Utilisation**

* Lister les versions de NodeJS installées : ```nvm list```
* Lister les versions de NodeJS : ```nvm ls-remote | tail -n9```
* Choisir la dernière LTS (ici la 10.11.0) et l'installer : ```nvm install 10.11.0```
* La mettre en utilisation par défaut : 
```
nvm use 10.11.0
nvm alias default 10.11.0
```
* Tester sa version de node : ```node -v```
* Mettre à jour NPM : ```npm install -g npm```

## NativeScript
*📖 https://www.nativescript.org/nativescript-is-how-you-build-native-mobile-apps-with-angular
📖 https://market.nativescript.org/ 🍎 Pour MacOS suivez cette procédure : https://docs.nativescript.org/start/ns-setup-os-x*

### NativeScript CLI
```
sudo npm install -g nativescript
```
### NativeScript SideKick (optionnel)
* Installez NativeScript SideKick
https://www.nativescript.org/nativescript-sidekick/download-linux-latest
* Lancez Nativescript SideKick et connectez vous avec votre compte Telerik, créez en un si nécessaire
* Cliquez sur 'Open in Editor' et mettez le chemin de VSCode : '/usr/share/code/code'
* Une fois l'installation terminée vous pouvez lancer NativeScript SideKick, créer un projet et votre device devrait apparaître dans la liste. Il ne vous reste plus qu'a cliquer sur 'Run on Device' et commencer à coder votre appli et voir le résultat dans l'émulateur ou dans votre smartphone connecté par USB.

## Android SDK & Emulateur
### Android Studio
* Installez Android Studio ```sudo apt install android-studio```
* Lancez Android Studio
* Comme chemin du SDK prenez ```/opt/android-sdk``` (très important !)
* allez dans configure > SDK manager
* dans l'onglet 'SDK platforms' cochez la case 'Android 4.4 API 19' (par exemple, selon le smartphone choisi plus tard)
* prenez aussi l'API 28 (pour Nativescript v5.0)
* dans l'onglet 'SDK Tools' cochez la case 'Android Emulator'
* Validez en acceptant les CGUs

### Emulateur (optionnel)
*Vous pouvez connecter un appareil Android par USB à votre ordinateur, et ainsi builder votre application directement dans un smartphone physique.*
* Installez VirtualBox sur votre machine ```sudo apt install virtualbox```
* Installer l'ExtensionPack (optionnel)  : https://www.virtualbox.org/wiki/Downloads 
* Installez Genymotion ```sudo apt-get install genymotion```
* Lancez Genymotion

Connectez vous avec votre compte Genymotion, créez en un si nécessaire https://www.genymotion.com/account/login/ 
Si on vous demande une licence répondez 'usage personnel'.

* Créez un terminal virtuel ('Ajouter'), on vous propose des téléphone, choisissez par exemple le 'Google Nexus 7' (version d'Android la plus présente et pas trop gourmand en ressources) > Suivant > Renommer le avec un nom pas trop long (c'est lourd de le taper dans le terminal après) > Suivant.
* Paramétrez Genymotion en ajoutant un lien vers le dossier SDK d'Adndroid sur votre poste :
* allez dans l'onglet 'ADB'
* indiquez le chemin de votre sdk téléchargé ```/opt/android-sdk```

# Builder l'application

Placez vous dans le dossier dans lequel vous voulez placer le projet, ensuite dans un terminal :
```
git clone https://github.com/mIaborde/NSDent
cd NSDent
```
Ensuite pour tranférer l'application dans un appareil Android : ```tns run android```

Pour un Iphone : ```tns run ios```