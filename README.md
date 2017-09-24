# Gladys to Arduino

This hooks is used for sending json data of devicetype to arduino.
You need to install the Serial module in Gladys.


## Prérequis

* Installer le module Serial disponible sur le store de Gladys et rebooter Gladys.
* Installer le module Gladys to Arduino

## Pour Installer le module Gladys to Arduino:

1.  Aller dans l'onglet "Avancé" de la vue module de Gladys

2.  Renseigner tout les champ comme ci dessous
(L'URL a renseigner est celui-ci => https://github.com/LeptitGeek/Gladys-To-Arduino.git)
Le slug ici n'est qu'un exemple mettez ce que bon vous semble mais noter le car nous en n'auront besoin plus tard.

3. Une fois les deux modules installé redémarrer Gladys

## Utilisation du module

1. Créé un device.
Peu importe son nom ou son identifier, en revanche son service et son protocole sont très important !
Il faut absolument que le service et le protocole soit identique au slug renseigné au moment de l'installation du module Gladys to Arduino !

1. Cliquez sur "Edit" et créé un devicetype comme ci dessous
Noter bien l'ID que Gladys a attribué a votre devicetype !

1. Copier dans votre IDE Arduino le code exemple disponble ici => 
https://github.com/LeptitGeek/Gladys-To-Arduino/blob/master/Example.ino

1. Remplacer le "PIN_OF_YOUR_DEVICE" par le pin de l'Arduino sur lequel est branché votre LED
Ainsi que le "YOUR_DEVICETYPE_ID" par l'ID de votre devicetype (celui que je vous ai dit de noter lors de la création de votre devicetype)

1. Puis téléverser le code ver votre carte, et brancher la a votre Raspberry !

1. Rendez-vous dans l'onglet module de Gladys et cliquez sur le bouton configuration du module Serial

1. Vous pouvez maintenant controler votre LED depuis Gladys depuis l'onglet device :grin:
