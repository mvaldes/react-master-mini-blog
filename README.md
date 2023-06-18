# ⚛️ React Master - Mini blog: Découverte du cycle de vie (Exercice)

## Sommaire

<!-- no toc -->
-   [Notions de l'exercice](#notions-de-lexercice)
-   [Consignes](#consignes)
-   [Correction](#correction)

## Notions de l'exercice

-   Les `props`
-   Le `state`
-   Le cycle de vie

## Consignes

Pour réaliser cet exercice, tu vas devoir suivre les instructions suivantes:

Tu peux taper la commande suivante dans ton terminal:

```bash
git clone git@github.com:Atomic-React/react-master-mini-blog.git
```

Ensuite, rends toi dans le dossier avec la commande suivante:

```bash
cd react-master-mini-blog
```

Accède à la branche de l'exercice en exécutant la commande:

```bash
git switch ex04/exercise
```

Puis installes les dépendances avec la commande:

```bash
npm install
```

Tu peux maintenant te rendre sur l'URL <http://localhost:5173>. Tu vera que le contenu du premier exercice a été supprimé. Il n'y a plus le bouton permettant d'afficher et masquer l'article. Nous n'aurons plus besoin de ça ici.

Dans cet exercice, tu vas devoir intégrer une nouvelle fonctionnalité: afficher une horloge indiquant combien de temps l'utilisateur passe à lire un article dans les onglets.

L'idée, c'est qu'au moment où l'utilisateur charge un article, un chronomètre démarre et affiche en temps réelle la durée de consultation de l'article.

Si l'utilisateur change d'article, un nouveau chronomètre démarre.

Ce chronomètre devra être affiché juste en dessus du titre de l'article.

Pour réaliser cet exercice, tu aura besoin de te familiariser avec ce que l'on appelle le "cycle de vie" (_"life cycle"_ en anglais) des composants.

**React** te met à disposition un _hook_ permettant d'exploiter les fonctionnalités de ce cycle de vie. Ce hook s'appelle `useEffect`.

Voici le lien vers la documentation de **React** qui parle du cycle de vie des composants: <https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect>

Voici le lien vers la documentation de **React** qui parle de `useEffect`: <https://react.dev/reference/react/useEffect>

Bon courage ! 💪

## Correction
