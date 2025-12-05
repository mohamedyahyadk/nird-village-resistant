# 📘 README — Plateforme « Village Numérique Résistant » (Projet NIRD)

Ce document présente une description complète du projet, accompagnée d’une explication détaillée de chaque diagramme UML fourni dans le fichier PlantUML. Il inclut également un guide clair pour organiser la structure du projet, établir un workflow efficace, et terminer la solution en quelques heures durant la Nuit de l’Info.

---

## 🧭 1. Présentation du Projet NIRD

Le projet **NIRD — Numérique Inclusif, Responsable et Durable** vise à aider les établissements scolaires à résister à la dépendance numérique envers les Big Tech.

Votre mission : **Créer une application Web engageante, interactive, ludique** qui explique au public (élèves, parents, enseignants, collectivités) comment réduire cette dépendance en adoptant les principes NIRD.

L'application doit :

- sensibiliser les utilisateurs à la sobriété numérique ;
- présenter les solutions libres (Linux, logiciels ouverts, réemploi du matériel) ;
- proposer défis, quiz, scénarios interactifs et ressources ;
- encourager la contribution à la communauté ;
- offrir une interface inspirante, dynamique et pédagogique.

---

## 🧩 2. Description des diagrammes UML

Les diagrammes se trouvent dans le fichier PlantUML joint. Voici l’explication de chacun.

### 2.1 Diagramme de Cas d’Utilisation (Use Case)

Ce diagramme illustre les principales interactions entre les acteurs et la plateforme.

#### Objectif

Montrer toutes les fonctionnalités majeures du système.

#### Acteurs

- **Élève / Visiteur** : consulte, participe aux défis.
- **Enseignant** : contribue, suit l’établissement.
- **Parent** : suit les parcours et défis.
- **Administrateur** : modère et gère la plateforme.
- **Technicien** : propose des solutions techniques.

#### Fonctionnalités principales

- Consultation du contenu pédagogique
- Participation aux défis / quiz
- Gestion et modération des contributions
- Suivi du score NIRD d’un établissement
- Téléchargement de ressources libres

#### Interprétation

Ce diagramme définit **la portée fonctionnelle globale** du projet. Idéal pour organiser le backlog.

---

### 2.2 Diagramme de Classes (Class Diagram)

Structure le modèle de données et les relations du système.

#### Classes principales

- **User** : profil générique (élève, prof, admin…).
- **Profile** : infos détaillées.
- **School** : établissement scolaire.
- **Resource** : contenu éducatif libre.
- **Challenge** : quiz, tâches, scénarios.
- **Contribution** : soumission/modération.
- **Comment** : interactions sociales.

#### Relations clés

- Un utilisateur possède un profil.
- Une école regroupe plusieurs utilisateurs.
- Un utilisateur peut publier plusieurs ressources.
- Une ressource peut recevoir plusieurs commentaires.

#### Interprétation

Prépare la **base de données** et la structure du backend.

---

### 2.3 Diagramme de Séquence (Sequence Diagram)

Flux : _un utilisateur soumet une ressource, un modérateur la valide_.

#### Étapes

1. L’utilisateur remplit un formulaire et envoie la ressource.
2. Le backend l’enregistre et la marque "Pending".
3. Le modérateur consulte les soumissions.
4. Il accepte/refuse.
5. Le système notifie l’auteur.

#### Interprétation

Idéal pour concevoir des endpoints API simples et réalistes.

---

### 2.4 Diagramme d’Activité (Activity Diagram)

Montre le **workflow complet** de contribution d’une ressource.

#### Étapes clés

- Connexion / création de compte
- Remplissage formulaire
- Prévisualisation
- Soumission
- Modération
- Publication

#### Interprétation

Utile pour coordonner backend + frontend + design UX.

---

### 2.5 Diagramme de Composants (Component Diagram)

Structure logicielle haut niveau de la plateforme.

#### Composants

- **Frontend (SPA)** : React / Vue / Svelte.
- **Backend API** : Python (FastAPI), Node, PHP.
- **Auth Service** : JWT / OAuth.
- **Database** : Postgres.
- **Object Storage** : S3-like.
- **Search Engine** : MeiliSearch.
- **Notification** : Email.

#### Interprétation

Parfait pour définir les services Docker.

---

### 2.6 Diagramme de Déploiement (Deployment Diagram)

Architecture minimale pour héberger le projet.

#### Nœuds

- CDN pour fichiers statiques
- Serveur backend (API)
- Base de données et stockage
- Worker pour indexation / tâches

#### Interprétation

Assure une **livraison rapide** et simple avec GitHub Actions + Docker.

---

## 🏗️ 3. Structure recommandée du projet

Pour une Nuit de l’Info, la structure doit être simple, modulaire et rapide à livrer.

```
NIRD-ResistantVillage/
│
├── frontend/           # SPA (React/Vue)
├── backend/            # API + DB models
├── database/           # migrations + seed
├── devops/             # Docker + CI/CD GitHub Actions
├── docs/               # UML diagrams, README
└── docker-compose.yml
```

---

## ⏱️ 4. Comment terminer le projet en quelques heures (plan d’action rapide)

### Étape 1 — Organisation (30 min)

- Lire le sujet + UML
- Définir 3 pages principales du site (MVP)

Exemple MVP :

1. Page d’accueil — présentation NIRD + ambiance ludique
2. Page défis — quiz interactif
3. Page ressources — liste + formulaire d’ajout simplifié

### Étape 2 — Setup technique rapide (1h)

- Init frontend : `npm create vite@latest`
- Init backend : FastAPI simple avec 3 endpoints
- Setup DB local + modèle "Resource"

### Étape 3 — Développer fonctionnalités essentielles (2h)

- Affichage liste des ressources
- Ajout ressource (sans modération dans MVP)
- Quiz simple (JSON)

### Étape 4 — Design simple mais propre (1h)

- Couleurs NIRD (vert, bleu, beige)
- Icônes open-source
- Mascotte "Village Résistant"

### Étape 5 — Docker + déploiement (45 min)

- Dockerfile pour frontend et backend
- docker-compose pour dev
- GitHub Actions pour build + deploy (Railway / Render / Fly.io)

### Étape 6 — Finitions + tests (30 min)

- Vérifier parcours utilisateur
- Nettoyer interface
- Ajouter animations / touches humoristiques

---
