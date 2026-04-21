# 🌌 Astro App — Project Context

## 🎯 Objectif du projet

Application web scientifique en astronomie destinée à :
- effectuer des calculs optiques (télescope)
- proposer des outils pédagogiques
- visualiser les résultats (UI + graphiques)

---

## 🧱 Architecture globale

Le projet suit une architecture en couches :
UI (React)
↓
API (Express)
↓
Core (TypeScript pur)

## 📁 Structure détaillée du projet
astro-app/
├── frontend/
│ └── src/
│ ├── components/ # composants UI (React)
│ ├── services/ # communication avec l’API
│ ├── assets/ # images, styles
│ └── App.tsx # point d’entrée UI
│
├── src/
│ ├── api/
│ │ ├── controllers/ # logique des endpoints
│ │ ├── routes/ # définition des routes
│ │ └── server.ts # serveur Express
│
│ └── core/
│ ├── optics/ # calculs optiques
│ ├── astronomy/ # calculs astronomiques
│ ├── angles/ # gestion des angles
│ ├── trigonometry/ # fonctions trigonométriques
│ └── units/ # gestion des unités

### 🔗 Règle d’architecture

- `core` ne dépend de rien (logique pure)
- `api` dépend du core
- `frontend` dépend de l’API uniquement

### 🔹 Core
- Contient toute la logique scientifique
- Indépendant de l’API et du frontend
- Fonctions pures
- Testé avec Vitest

### 🔹 API
- Expose les calculs via HTTP
- Transforme les données (adapter pattern)
- Route principale : `/api/optics`

### 🔹 Frontend
- React + Vite + TypeScript
- Formulaire utilisateur
- Appel API
- Affichage des résultats

---

## ⚙️ Stack technique

### Backend
- Node.js
- TypeScript
- Express
- tsx (runtime TS)

### Tests
- Vitest

### Frontend
- React
- Vite
- TypeScript

### DevOps
- Git + GitHub
- CI (GitHub Actions)

---

## 🧮 Fonctionnalités actuelles

### Optique

Calculs disponibles :

- 🔭 Grossissement
M = F_telescope / F_eyepiece

- 👁️ Pupille de sortie
P = D / M

- 🌌 Champ réel
TFOV = AFOV / M


---

## 📦 Gestion des unités

Structure utilisée :

```ts
type LengthUnit = 'mm' | 'cm' | 'm';

interface Length {
value: number;
unit: LengthUnit;
}

- Conversion interne en mm
- Centralisée dans units

🔌 API
Endpoint principal

    POST /api/optics
Input
{
  "telescopeFocal": { "value": 1000, "unit": "mm" },
  "telescopeDiameter": { "value": 200, "unit": "mm" },
  "eyepieceFocal": { "value": 10, "unit": "mm" },
  "apparentFov": 68
}
Output
{
  "magnification": 100,
  "exitPupil": 2,
  "trueFov": 0.68
}

🧪 Tests
- Framework : Vitest
- Types :
    - unit tests (core)
    - integration tests (optics)

Objectifs :

- valider les formules
- tester les cas limites
- éviter les NaN

🎨 Frontend actuel

Fonctionnalités :

- formulaire utilisateur
- validation basique (> 0)
- appel API via fetch
-  affichage des résultats avec :
    - unités
    - arrondis
- gestion d’erreur simple

CORS configuré côté API

🔄 Workflow Git
Méthode
feature branch → commit → push → merge → delete
Exemple
git checkout -b feature/optics-ui
git add .
git commit -m "feat: add optics UI"
git push -u origin feature/optics-ui

git checkout main
git pull
git merge feature/optics-ui
git push

git branch -d feature/optics-ui
git push origin --delete feature/optics-ui

📏 Bonnes pratiques
Core
- fonctions pures
- aucun accès I/O
- typage strict
- tests obligatoires

API
- rôle d’adaptateur
- validation des entrées
- mapping clair des données

UI
- pas de logique métier
- appels API uniquement
- affichage clair + unités

🚀 Roadmap (prochaines étapes)
UI / UX
- améliorer layout
- composants réutilisables
- meilleure lisibilité
Visualisation
- champ de vision (cercle)
- pupille de sortie
- SVG / Canvas
Scientifique
- trigonométrie
- position du Soleil
- cadrans solaires
- précision accrue
Pédagogie
- pages explicatives
- vulgarisation
- illustrations

🧠 Philosophie du projet
- rigueur scientifique
- pédagogie
- architecture propre
- testabilité
- évolutivité
📌 Convention importante
Séparation des responsabilités
Couche	Responsabilité
Core	calculs
API	transport + adaptation
UI	interaction utilisateur

🔗 Contrat API (à maintenir)
interface OpticsResult {
  magnification: number;
  exitPupil: number;
  trueFov: number;
}

👉 Toute évolution doit respecter ou versionner ce contrat.

📚 Documentation

À maintenir dans Notion :

- concepts optiques
- stratégie de validation
- choix d’architecture
- décisions techniques

👤 Auteur

Projet développé dans une logique :
- pédagogique
- associative (astronomie amateur)
- évolution progressive vers outil professionnel