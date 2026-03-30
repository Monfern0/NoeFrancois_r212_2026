# Rapport — [TD3]

## Points clés

### 1. [Expliquez le modèle]

Dans le principe, un événement va amener à un changement d'état, qui a son tour va amener a un nouveau rendu dans le DOM.
Exemple : les likes sur un réseau social

Evenement : Clic sur le bouton LIKE
Etat : Le compteur de likes s'incrémente de 1
Rendu : Le compteur se met à jour 

### 2. [Expliquez en quoi classList.toggle est la passerelle entre JS et CSS]

classList.toggle va influer sur l'apparence du site, sans pour autant modifier directement le fichier de styles.
Le JS va seulement ajouter ou modifier des classes, et le CSS va les interpréter