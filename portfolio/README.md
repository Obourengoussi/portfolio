# Portfolio Professionnel

Un portfolio moderne et responsive pour un étudiant en **Systèmes Informatiques et Génie Logiciel**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Fonctionnalités

- **Design moderne** avec effets visuels subtils
- **Responsive** : compatible mobile, tablette et desktop
- **Animations** : effet machine à écrire, compteurs animés, barres de compétences
- **Navigation fluide** avec effet de scroll
- **Formulaire de contact** avec validation
- **Optimisation SEO** включена
- **CODE propre et commenté**

## 📂 Structure du projet

```
pro/
├── index.html          # Structure principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript interactif
├── assets/            # Dossier pour les assets
│   └── cv.pdf         # Votre CV (à ajouter)
└── README.md          # Ce fichier
```

## 🎨 Personnalisation

### 1. Modifier les informations personnelles

Dans [`index.html`](index.html), recherchez et modifiez :

```html
<!-- Ligne ~120 : Votre nom -->
<h1 class="hero-title">
    <span class="typed-text" id="typedText">VOTRE NOM</span>
</h1>

<!-- Ligne ~125 : Votre parcours -->
<p class="hero-description">
    Votre description ici...
</p>

<!-- Ligne ~180 : Section À propos -->
<h3>Votre Nom - Étudiant en Systèmes Informatiques et Génie Logiciel</h3>
```

### 2. Modifier les liens sociaux

Recherchez dans [`index.html`](index.html) :

```html
<!-- Liens GitHub (~ ligne 440) -->
<a href="https://github.com/votreusername" ...>

<!-- Liens LinkedIn (~ ligne 443) -->
<a href="https://linkedin.com/in/votreusername" ...>

<!-- Email (~ ligne 428) -->
<a href="mailto:votre.email@exemple.com">votre.email@exemple.com</a>

<!-- Téléphone (~ ligne 434) -->
<a href="tel:+1234567890">+1 234 567 890</a>
```

### 3. Ajouter votre photo

Remplacez les placeholders par votre photo :

```html
<!-- Image d'accueil (~ ligne 145) -->
<div class="image-placeholder">
    <i class="fas fa-user-graduate"></i>
</div>
```

Par :
```html
<img src="assets/votre-photo.jpg" alt="Votre Nom" class="profile-photo">
```

### 4. Ajouter votre CV

1. Créez un dossier `assets`
2. Ajoutez votre CV au format PDF nommé `cv.pdf`
3. Le lien de téléchargement fonctionnera automatiquement

### 5. Modifier les compétences

Dans [`index.html`](index.html), section Skills (~ ligne 250-380), modifiez les pourcentages :

```html
<div class="skill-progress" data-width="90"></div>
```

### 6. Modifier les projets

Dans [`index.html`](index.html), section Projects (~ ligne 390-500), modifiez :

- Titre du projet
- Description
- Technologies utilisées
- Liens GitHub/Live demo

### 7. Personnaliser les couleurs

Dans [`styles.css`](styles.css), modifiez les variables CSS :

```css
:root {
    --primary-color: #2563eb;    /* Couleur principale */
    --secondary-color: #10b981; /* Couleur secondaire */
    --accent-color: #f59e0b;    /* Couleur d'accent */
}
```

## 📱 Déploiement

### Option 1 : Vercel (Recommandé)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Installez Vercel CLI : `npm i -g vercel`
3. Dans le dossier du projet : `vercel deploy`
4. Suivez les instructions

### Option 2 : Netlify

1. Créez un compte sur [Netlify](https://netlify.com)
2. Glissez-déposez le dossier du projet
3. Votre site est en ligne !

### Option 3 : GitHub Pages

1. Créez un dépôt GitHub
2. Poussez vos fichiers : `git add . && git commit -m "Initial commit"`
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main`

### Option 4 : Hébergement traditionnel (cPanel, VPS)

1. Téléchargez tous les fichiers
2. Uploadez le contenu dans le dossier `public_html`
3. C'est fait !

## 🔧 Configuration technique

### Navigateurs supportés

- Chrome (dernières 2 versions)
- Firefox (dernières 2 versions)
- Safari (dernières 2 versions)
- Edge (dernières 2 versions)

### Performance

- Temps de chargement optimisé
- Images en lazy loading
- Code minifié pour la production

### SEO

- Meta tags optimisés
- Balises sémantiques HTML5
- Structure HEAD complète
- Compatible mobile-first

## 📝 License

Ce projet est open source. Vous pouvez l'utiliser et le modifier librement.

---

Créé avec ❤️ et ☕ par **[Votre Nom]**

> *« La programmation n'est pas ce que vous savez, mais ce que vous pouvez découvrir. »*
