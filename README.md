# ⚛️ React Master - Mini blog: Créer un custom hook (Exercice)

## Sommaire

<!-- no toc -->
-   [Notions de l'exercice](#notions-de-lexercice)
-   [Consignes](#consignes)
-   [Correction](#correction)

## Notions de l'exercice

-   Les `hooks`
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
git switch ex05/exercise
```

Puis installes les dépendances avec la commande:

```bash
npm install
```

Tu peux maintenant te rendre sur l'URL <http://localhost:5173>. Tu verra qu'un nouveau paragraphe en gras a été ajouté sous le titre.

Quelques modifications ont été apportées:

-   Tu trouvera dans `src/` un dossier `utils/` contenant un fichier `time.util.js`. La fonction `convertSecondsToHMS` est désormais placée ici pour qu'elle soit accessible depuis n'importe quel autre fichier. Tu en aura besoin pour cet exercice.
-   Un dossier `hooks/` a également été ajouté.

Pour cet exercice, tu devra ajouter une horloge indiquant le temps passé au niveau global sur le site. Cette horloge, tu l'as déjà vu, est affichée sous le titre _"Mini blog"_.

**Tu ne dois pas utiliser le composant `Timer` pour réaliser cette horloge**.

Pour réaliser cette horloge, tu dois le faire via un _"custom hook"_ que tu aura créé toi-même.

Ce custom hook devra être paramétrable. On doit pouvoir lui indiquer si on veut que le temps défile plus ou moins vite en lui passant le nombre de millisecondes d'interval que l'on souhaite.

Il devra retourner le temps qui s'écoule pour que l'on puisse l'exploiter dans un composant.

Voici le lien vers la documentation de **React** qui parle des _custom hooks_: <https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component>

Bon courage ! 💪

## Correction

Tu peux consulter la correction vidéo sur [Atomic React](https://atomic-react.com) ou te rendre sur la branche `ex05/correction`.

Pense à sauvegarder ton travail avec les commandes ci-dessous avant de changer de branche !

```bash
git add .
```

```bash
git commit -m "Sauvegarde"
```
