# ⚛️ React Master - Mini blog: Découverte des props (Exercice)

> Dans cet énoncé tu trouvra:
>
> 1 ℹ️ information<br>
> 1 💡 indice

## Sommaire

1.   [Notions](#notions-de-lexercice)
2.   [Consignes](#consignes)
3.   [Correction](#correction)

## Notions de l'exercice

*   Division de l'interface en composants
*   Les `props`

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
git switch ex02/exercise
```

Puis installes les dépendances avec la commande:

```bash
npm install
```

Tu peux maintenant te rendre sur l'URL <http://localhost:5173>. Tu vera qu'il n'y a que le titre "Mini blog" qui apparaît.

Cependant, dans le fichier `App.jsx`, tu peux remarquer qu'il y a plus qu'un simple titre. Il y a la même logique qu'auparavant mais avec quelques modifications...

Le bouton n'est plus un simple élément HTML `button`, c'est un composant qui a été importé en haut du fichier. Idem pour le composant `Article`. Tu vois que si l'on souhaite utiliser un composant dans du **JSX**, on l'intègre sous la forme d'une balise HTML (par exemple: `<Button>Click here!</Button>`).

Tu peux retrouver les fichiers de ces composants dans le dossier `components/` qui se trouve dans `src/`.

Ta mission va être de faire fonctionner ces composants pour que la page retrouve le même état qu'à la fin de l'exercice précédent.

Pour réaliser cette mission, tu as besoin de te renseigner davantage sur les composants et notamment sur ce que l'on appelle les `props`.

**Quelques informations sur les `props`:**

Dans le fichier `App.jsx`, tu peux voir qu'on a ajouté quelques attributs particuliers au composant `Button`.

`onClick`: tu le connais déjà, il faut maintenant que tu apprennes à le gérer depuis un composant.

`variant`: celui-là tu ne le connais pas. C'est normal, c'est une propriété inventée de toute pièce. C'est à nous de gérer la logique de cette propriété. Cette propriété doit permettre à la développeuse ou au développeur qui utilise ce composant de choisir une couleur parmis celles prédéfinies dans le fichier `index.css`, à savoir `primary`, `danger`, `success` ou `warning`.

Voici le lien vers la page de la documentation de **React** qui parle des `props`: <https://react.dev/learn/passing-props-to-a-component>

<details>
 <summary>💡 <b>Indice</b></summary>

 > Pour pouvoir ajouter des enfants HTML à un composant, **React** met à disposition une `props` un peu particulière qui s'appelle `children`.
 >
 > Voici le lien de la documentation qui peut t'aider à ce sujet: <https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children>

</details>

Bon courage ! 💪

## Correction

Tu peux consulter la correction écrite ici: <https://github.com/Atomic-React/react-master-mini-blog/tree/ex02/correction#correction>

Ou suivre la correction en vidéo ici: _Bientôt disponible_
