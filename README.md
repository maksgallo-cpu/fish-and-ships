# Fish and Ships Tackle Shop – site vitrine (Deploy n°3)

Site statique HTML/CSS/JS, prêt pour Netlify ou GitHub Pages.

## Déploiement
- **Netlify (glisser-déposer)** : déposer ce dossier entier sur app.netlify.com > "Add new site" > "Deploy manually".
- **GitHub + Netlify** : pousser le contenu du dossier à la racine du dépôt, puis connecter le dépôt à Netlify (aucune commande de build, dossier de publication : `.`).
- Formulaire de contact : géré par **Netlify Forms** (activer la détection des formulaires dans Site settings > Forms, puis configurer la notification e-mail).

## À compléter avant mise en ligne
- [ ] Domaine : remplacer `https://www.fishandships-menton.fr` partout (index, blog, sitemap.xml, robots.txt, llms.txt)
- [ ] Horaires d'ouverture (section "Nous trouver") + ajouter `openingHoursSpecification` dans le JSON-LD
- [ ] URL exacte de la page Facebook (actuellement un lien de recherche)
- [ ] Best-sellers : références réelles
- [ ] Avis : remplacer par les textes exacts des avis Google (avec prénoms autorisés)
- [ ] Mentions légales : forme juridique, SIRET, responsable de publication
- [ ] Photos : les photos Unsplash sont désormais dans assets/img/photos/ ; à remplacer à terme par les photos du magasin (mêmes noms de fichiers)
