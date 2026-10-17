# Noyau — prototype de location au Bénin

## Ouvrir le prototype

Ouvrez `index.html` pour le site locataire/propriétaire, ou `admin.html` pour le tableau de bord de démonstration. Les styles, scripts et pages doivent rester ensemble dans le même dossier. Les photos et polices nécessitent une connexion Internet.

## Publier les deux pages

Le prototype est statique : déposez le dossier complet sur un hébergeur de sites statiques, par exemple avec [Netlify Drop](https://app.netlify.com/drop), ou publiez-le via GitHub Pages. Après publication, les deux adresses seront de la forme :

- Site public : `https://votre-domaine/`
- Administration : `https://votre-domaine/admin.html`

## Limites du prototype

- Les 30 logements, chiffres de visites, locations et commissions du tableau d’administration sont des données de démonstration.
- Les comptes, annonces créées et favoris sont enregistrés dans le stockage local du navigateur : ils ne sont ni partagés entre visiteurs ni synchronisés entre appareils.
- L’administration n’est pas protégée par une connexion. Toute personne connaissant son adresse peut voir le tableau de démonstration.
- Ce prototype ne collecte pas de demandes de visite ni de paiements réels. Ne saisissez pas de vrais mots de passe ou de données personnelles.

Avant toute utilisation réelle, il faudra ajouter un serveur, une base de données partagée, une authentification et des droits d’accès pour protéger les espaces locataires, propriétaires et administrateurs.
