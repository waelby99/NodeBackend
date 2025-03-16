# 🏥️ REST API - Gestion des Produits

Ce projet est une API REST pour gérer les produits, construite avec **Node.js**, **Express**, et **MongoDB**.

## 📌 Fonctionnalités

- 💜 **Lister tous les produits**
- 🔍 **Obtenir un produit par son ID**
- ➕ **Ajouter un produit**
- ✏️ **Mettre à jour un produit**
- ❌ **Supprimer un produit**

---

## 🏠 Installation et Exécution

### 1️⃣ Prérequis

- [Node.js](https://nodejs.org/) installé
- [MongoDB](https://www.mongodb.com/) installé et en cours d'exécution

### 2️⃣ Cloner le projet

```bash
git clone https://github.com/waelby99/NodeBackend.git
cd NodeBackend
```

### 3️⃣ Installer les dépendances

```bash
npm install
```

### 4️⃣ Démarrer le serveur

En mode normal :

```bash
npm run serve
```

En mode développement (avec Nodemon) :

```bash
npm run dev
```

Le serveur sera accessible sur **http://localhost:3000** 🚀.

---

## 🐐 Endpoints API

### 📝 Liste des routes

| Méthode | URL                 | Description                 |
|---------|----------------------|-----------------------------|
| GET     | `/api/products`      | Récupérer tous les produits |
| GET     | `/api/products/:id`  | Récupérer un produit par ID |
| POST    | `/api/products`      | Ajouter un produit         |
| PUT     | `/api/products/:id`  | Modifier un produit        |
| DELETE  | `/api/products/:id`  | Supprimer un produit       |

### 📥 Exemple de requête POST (Ajout d'un produit)

```json
{
  "name": "Laptop HP",
  "quantity": 10,
  "price": 1200,
  "image": "https://example.com/image.jpg"
}
```

---

## 🛠️ Technologies utilisées

- **Express.js** - Framework web pour Node.js
- **MongoDB + Mongoose** - Base de données NoSQL
- **Nodemon** - Outil pour le développement en temps réel

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à proposer des améliorations via une **pull request**.

---

## 📝 Licence

Ce projet est sous licence **MIT**.

---

🚀 Bon développement !

