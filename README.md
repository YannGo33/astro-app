# 🌌 Astro App

Application web scientifique dédiée à l’astronomie, permettant de réaliser des calculs optiques (télescope) et de proposer des outils pédagogiques et visuels.

---

## 🎯 Objectifs

- 🔭 Calculer les paramètres optiques d’un télescope
- 🎓 Expliquer les notions d’astronomie (approche pédagogique)
- 📊 Visualiser les résultats (UI + graphiques)
- 🧪 Garantir la fiabilité via des tests

---

## 🧱 Architecture

Le projet suit une architecture en couches claire :
Frontend (React)
↓
API (Express)
↓
Core (TypeScript)

## 📁 Structure du projet
astro-app/
├── frontend/ # UI React (Vite)
│ └── src/
│ ├── components/ # composants React
│ ├── services/ # appels API
│ └── assets/ # ressources
│
├── src/
│ ├── api/ # API Express
│ │ ├── controllers/
│ │ └── routes/
│ │
│ └── core/ # logique scientifique
│ ├── optics/
│ ├── astronomy/
│ ├── angles/
│ ├── trigonometry/
│ └── units/

### 🔹 Core
- Logique scientifique pure
- Fonctions testables
- Indépendant de l’API et du frontend

### 🔹 API
- Expose les calculs via HTTP
- Transforme les données (adapter pattern)

### 🔹 Frontend
- Interface utilisateur
- Formulaire + affichage résultats
- Appels API

---

## ⚙️ Stack technique

### Backend
- Node.js
- TypeScript
- Express
- tsx

### Frontend
- React
- Vite
- TypeScript

### Tests
- Vitest

### DevOps
- Git / GitHub
- CI (GitHub Actions)

---

## 🧮 Fonctionnalités

### Optique

| Calcul | Formule |
|------|--------|
| Grossissement | `M = F_telescope / F_eyepiece` |
| Pupille de sortie | `P = D / M` |
| Champ réel | `TFOV = AFOV / M` |

---

## 🔌 API

### Endpoint

POST /api/optics

### Exemple de requête

```json
{
  "telescopeFocal": { "value": 1000, "unit": "mm" },
  "telescopeDiameter": { "value": 200, "unit": "mm" },
  "eyepieceFocal": { "value": 10, "unit": "mm" },
  "apparentFov": 68
}

Exemple de réponse
{
  "magnification": 100,
  "exitPupil": 2,
  "trueFov": 0.68
}

🧪 Tests
- Framework : Vitest
- Types :
  - unit tests (core)
  - integration tests

Lancer les tests
npm run test

🚀 Installation
1️⃣ Cloner le projet
git clone <repo-url>
cd astro-app

2️⃣ Installer les dépendances
npm install

3️⃣ Lancer l’API
npm run dev:api
👉 API disponible sur :

http://localhost:3000

4️⃣ Lancer le frontend
cd frontend
npm install
npm run dev

👉 UI disponible sur :
http://localhost:5173

🌐 CORS

Le frontend et l’API étant sur des ports différents, CORS est activé côté API.

🔄 Workflow Git

Méthode utilisée :
feature → commit → push → merge → clean

Exemple :
git checkout -b feature/ma-feature
git add .
git commit -m "feat: ma feature"
git push -u origin feature/ma-feature

git checkout main
git pull
git merge feature/ma-feature
git push

git branch -d feature/ma-feature
git push origin --delete feature/ma-feature


📏 Bonnes pratiques
Core
- fonctions pures
- typage strict
- tests obligatoires

API
- validation des entrées
- mapping clair

UI
- pas de logique métier
- affichage avec unités
- UX claire

🚀 Roadmap
Court terme
- amélioration UI/UX
- composants React structurés
- gestion des erreurs avancée

Moyen terme
- visualisation graphique (champ de vision)
- gestion avancée des unités

Long terme
- calculs astronomiques (Soleil, trigonométrie)
- cadrans solaires
- contenu pédagogique

📚 Documentation
- PROJECT_CONTEXT.md → contexte global du projet
- Notion → documentation pédagogique et technique

👤 Auteur

Projet développé dans un cadre :
- associatif (astronomie amateur)
- pédagogique
- évolutif vers un outil professionnel
