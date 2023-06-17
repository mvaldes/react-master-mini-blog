# ⚛️ React Master - Mini blog: Gérer l'état d'un composant (Correction)

> Dans cet énoncé tu trouvra:
>
> 1 ℹ️ information<br>
> 1 💡 indice

## Sommaire

1.   [Notions](#notions-de-lexercice)
2.   [Consignes](#consignes)
3.   [Correction](#correction)

## Notions de l'exercice

*   Affichage conditionnel
*   Événements
*   Gestion d'état

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
git switch ex01/exercise
```

Puis installes les dépendances avec la commande:

```bash
npm install
```

Tu peux maintenant te rendre sur l'URL <http://localhost:5173>. Tu vera qu'il n'y a qu'une page branche.

Ta mission désormais va être de réaliser la page suivante:

![Hidden article](docs/ex1_hidden_article.png)

Tu peux y apercevoir un titre et un bouton bleu.

> ℹ️ **Information**
>
> Le CSS t'es déjà donné. Regarde le fichier `index.css` dans le dossier `src/`, tu y trouvera tout ce dont tu as besoin.

La seconde étape va être de permettre à l'utilisateur de faire apparaître un article lors du clic sur le bouton _"Show article"_ comme ceci:

![Shown article](docs/ex1_shown_article.png)

Remarque au passage que le bouton _"Show article"_ s'appelle désormais _"Hide article"_ et que sa couleur a changé.

Lorsque l'utilisateur clique à nouveau sur le bouton, l'article doit disparaître de la page et le bouton doit récupérer son état initial.

<details>
 <summary>💡 <b>Indice</b></summary>

 > Pour pouvoir mettre à jour la vue suite au clic de l'utilisateur, tu as besoin de te renseigner sur le hook `useState`.
 >
 > Tu n'as pas besoin de savoir exactement ce qu'est un hook à ce stade. Pars seulement du principe qu'il s'agit d'une simple fonction.
 >
 > Tu vas également avoir besoin de comprendre ce qu'est le `state` d'un composant et pourquoi il est nécessaire.
 >
 > Voici le lien vers la documentation de React qui explique le rôle du `state`: <https://react.dev/learn/state-a-components-memory>
 >
 > Voici le lien vers la page de la documentation de React qui parle de `useState`: <https://react.dev/reference/react/useState>

</details>

Bon courage ! 💪

## Correction

La première chose à faire ici c'est de remplir la page blanche avec le contenu demandé.

On va donc ajouter un titre:

```JSX
function App() {

  return (
	<h1>Mini Blog</h1>
  );
}

export default App;
```

Puis un bouton en utilisant les `class` fournies dans le fichier `index.css`:

```JSX
function App() {

  return (
	<h1>Mini Blog</h1>
	<button className="btn btn--primary">Show article</button>
  );
}

export default App;
```

Attention ici, nous essayons de retourner deux nœeuds JSX à la fois. Nous savons que ce n'est pas possible. Il faut donc utiliser un fragment:

```JSX
function App() {

  return (
	<>
		<h1>Mini Blog</h1>
		<button className="btn btn--primary">Show article</button>
	</>
  );
}

export default App;
```

Maintenant il faut que l'application soit capable d'afficher et masquer un contenu. Pour cela nous pouvons utiliser les conditions en JSX.

Nous savons que toute condition implique un booléen: si la condition est vraie alors on réagit, si elle est fausse alors soit on réagit autrement soit on ne réagit pas du tout.

Il nous faut donc un booléen qui nous serve de condition, et pour cela nous allons déclarer une variable que l'on appellera `isArticleDisplayed`:

```JSX
function App() {

	let isArticleDisplayed = false;

  return (
	<>
		<h1>Mini Blog</h1>
		<button className="btn btn--primary">Show article</button>
	</>
  );
}

export default App;
```

Rajoutons l'affichage conditionnel dans le JSX:

```JSX
function App() {

	let isArticleDisplayed = false;

  return (
	<>
		<h1>Mini Blog</h1>
		<button className="btn btn--primary">Show article</button>
		{
			isArticleDisplayed &&
			<div>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
				</p>
			</div>
		}
	</>
  );
}

export default App;
```

Visiblement ça fonctionne, l'article n'apparaît pas. Essayons de passer manuellement la valeur de `isArticleDisplayed` à `true`... Cela devrait fonctionner également.

Maintenant il faut faire en sorte d'afficher l'article lorsque l'utilisateur clique sur le bouton.

Pour cela, nous savons qu'il faut ajouter un écouteur d'événement. Nous pouvons ajouter la propriété `onClick` sur le bouton qui aura pour valeur ce qu'on appelle un _event handler_ (gestionnaire d'événement), qui est en fait une simple fonction:

```JSX
function App() {

	let isArticleDisplayed = false;

  return (
	<>
		<h1>Mini Blog</h1>
		<button className="btn btn--primary" onClick={ () => console.log('CLICK') }>Show article</button>
		{
			isArticleDisplayed &&
			<div>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
				</p>
			</div>
		}
	</>
  );
}

export default App;
```

Pour le moment on place simplement un `console.log` pour vérifier si le clic est bien détecté et que la fonction en valeur du `onClick` s'exécute correctement.

La bonne pratique veut que l'on déplace la fonction anonyme qui se trouve en valeur de `onClick` vers une fonction nommée dont le nom doit commencer par _"handle"_. Faisons cela:

```JSX
function App() {

	let isArticleDisplayed = false;

	const handleClick = () => {
		console.log('CLICK');
	};

  return (
	<>
		<h1>Mini Blog</h1>
		<button className="btn btn--primary" onClick={ handleClick }>Show article</button>
		{
			isArticleDisplayed &&
			<div>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
				</p>
			</div>
		}
	</>
  );
}

export default App;
```

C'est plus propre ainsi et ça devrait toujours fonctionner.

> ℹ️ **Information**
>
> Si tu veux savoir pourquoi j'utilise à 99% du temps des **fonctions flêchées**, je t'invite à aller voir la vidéo que j'ai fait sur le sujet sur **la chaîne YouTube d'Atomic React**.
>
> Voici le lien: [📽️ Tout savoir sur les fonctions pures et les fonctions régulières](https://youtu.be/b1hN2d_CoEw)

Maintenant, la fonction `handleClick` doit pouvoir changer la valeur de `isArticleDisplayed` en la passant de `false` à `true` et inversement:

```JSX
const handleClick = () => {
	isArticleDisplayed = !isArticleDisplayed;
};
```

Si on essaie de cliquer sur le bouton sur la page de notre application, on se rend compte que cela ne fonctionne pas. Pourquoi ?

C'est le moment d'utiliser l'**indice** 💡 qui a été laissé en bas de l'énoncé de l'exercice.

L'indice mentionnait le hook [**useState**](https://react.dev/reference/react/useState) et donnait le lien vers la documentation de React sur le sujet. On ne va pas voir ce qu'est un hook pour le moment.

On va simplement admettre qu'un hook est une fonction qui nous permet d'accéder à certaines fonctionnalités de **React**. Dans le cas présent, `useState` nous permet d'accéder au **state**, à l'état du composant.

Un autre lien était fourni, celui de la page de la documentation qui explique ce qu'est le [**state**](https://react.dev/learn/state-a-components-memory) et son importance.

Faisons un résumé de ce qu'est le `state`:

Le **state** c'est l'état d'un composant à un instant T. C'est lui qui décrit la façon dont le composant doit être rendu au DOM.

Une simple variable telle que nous l'avons déclarée ne permet pas au composant de connaître la façon doit il doit être rendu au DOM.

Nous, en tant qu'être humain qui avons conçu ce code, savons que la variable `isArticleDisplayed` est importante.

Nous savons qu'elle joue un rôle clé dans l'affichage du composant dans le DOM puisse qu'elle défini si l'article doit s'afficher ou non.

**React** n'est pas un être humain. C'est un amas de code. Il a besoin qu'on lui donne les instructions de façon claire et selon ses règles à lui.

Pour indiquer au composant quelles sont les variables dont il doit écouter les changements de valeur, il faut donc utiliser le `state`. Et ça se fait par le biais du hook `useState` qu'il faut importer depuis `react` en haut du fichier:

```JSX
import { useState } from 'react';
```

`useState` doit être utilisé ainsi:

```JSX
const [ isArticleDisplayed, setIsArticleDisplayed ] = useState(false);
```

On déclare une constante qui vient destructurer un tableau et qui est égale à `useState`.

`useState` retourne un tableau contenant deux éléments, et seulement deux éléments. Ça sera toujours deux éléments à moins que l'équipe de développement de **React** n'apportent une mise à jour à ce sujet.

Je peux nommer ces deux éléments comme je veux. Mais leur rôle ne changera pas.
Si je veux les appeler `michel` et `pascal` je peux. Mais tu te doutes bien que je vais avoir du mal à comprendre ce que font mes propriétés et fonctions si je les nommes toutes avec des prénoms.

Donc il faut toujours rester cohérent.

Le premier élément correspond à une valeur en lecture seule. C'est à dire qu'il est impossible de modifier directement cette valeur plus loin dans le code en faisant par exemple:

```JSX
// IMPOSSIBLE avec useState
isArticleDisplayed = true;
```

C'est d'ailleurs pour cela qu'on utilise `const` on non `let`.

Ici je nomme cet élément `isArticleDisplayed` car c'est un booléen qui nous permet de déterminer si l'article est affiché ou non.

Le second élément est une fonction permettant de mettre à jour cette valeur. Le nom de cette fonction commence toujours par `set` suivit du nom de la propriété. Dans notre cas ça sera `setIsArticleDisplayed`. Cela permet de comprendre facilement que cette fonction permet de mettre à jour une propriété précise.

Si je veux changer la valeur de `isArticleDisplayed` je dois donc procéder ainsi:

```JSX
setIsArticleDisplayed(true);
```

Nous pouvons donc inscrire le code suivant dans la fonction `handleClick`:

```JSX
const handleClick = () => {
	setIsArticleDisplayed(!isArticleDisplayed);
};
```

Tu aura ensuite certainement compris que la valeur passée en argument de `useState`, le `false` que nous avons ajouté, correspond à la valeur initiale de `isArticleDisplayed`.

C'est comme si nous avions fait:

```JSX
const isArticleDisplayed = false;
```

Sauf qu'ici nous l'inscrivons dans le `state` du composant.

En principe, si on essaie de nouveau de cliquer sur le bouton dans l'interface, l'article devrait apparaître, puis disparaître si on clique encore une fois, et ainsi de suite.

Rajoutons un `console.log` en plein milieu du composant:

```JSX
import { useState } from 'react';

function App() {

	const [ isArticleDisplayed, setIsArticleDisplayed ] = useState(false);

	const handleClick = () => {
		setIsArticleDisplayed(!isArticleDisplayed);
	};

	console.log('COMPONENT RENDER');

  return (
	<>
		<h1>Mini Blog</h1>
		<button className="btn btn--primary" onClick={ handleClick }>Show article</button>
		{
			isArticleDisplayed &&
			<div>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
				</p>
			</div>
		}
	</>
  );
}

export default App;
```

En allant dans la console du navigateur et en rafraichissant la page, on observe que ce `console.log` apparaît systématiquement au chargement de la page.

En fait, il appraît dès lors que le composant est rendu.

Rappelle-toi qu'un composant est une fonction. Cette fonction doit être appelée quelque part pour voir son code être exécuté et son JSX être affiché dans l'interface.

`App` en l'occurence, est appelé dans `main.jsx` dans la méthode `render`.

Donc au moment où **React** exécute le `render`, il appelle `App`, ce qui exécute le code inscrit dans `App` et exécute le `console.log`.

Maintenant cliquons sur le bouton...

On observe que le `console.log` apparaît une seconde fois.

Cela signifie qu'à chaque fois que la fonction de mise à jour du `state` est appelée, le composant est réexécuté. Et il faut bien garder à l'esprit que c'est bien le composant qui est réexécuté et non le `render` qui se trouve dans `main.jsx`. Cette nuance est importante pour la suite.

Mais pourquoi effectuer une mise à jour du `state` déclenche la réexécution du composant ?

Cela permet au composant de toujours disposer de la dernière valeur à jour du `state` et de mettre à jour l'interface en conséquences.

Il faut voir les composants comme les photographies d'un état à un instant T.

C'est comme un dessin animé. Un dessin animé est une suite de dessins qui défilent pour donner l'illusion du mouvement au spectateur.

Un composant est comme un dessin animé et le **state** contient les paramètres importants du dessin.

Pour passer du dessin précédent au dessin suivant dans l'interface, c'est à dire, modifier l'affichage d'un composant, il faut dire au composant de se redessiner.

Pour que le composant se redessine, il faut réaliser une mise à jour du **state** du composant car le **state** contient les paramètres qui définissent la forme du dessin.

Maintenant que nous sommes au clair sur le **state** nous pouvons terminer avec l'affichage du bouton.

Le bouton change d'apparence lorsque `isArticleDisplayed` change de valeur, à commencer par le texte.

Nous savons déjà le faire, il suffit d'intégrer une condition dans le JSX au niveau du texte du bouton:

```JSX
<button className="btn btn--primary" onClick={ handleClick }>{ isArticleDisplayed ? 'Hide' : 'Show' } article</button>
```

Puis il faut également permettre au bouton de changer de couleur quand `isArticleDisplayed` change de valeur.

En JSX, nouw avons parfaitement le droit d'utiliser les accolades pour rajouter une condition en ternaire au sein d'une valeur d'un attribut.

La valeur de `className` étant une chaine de caractère, nous pouvons concaténer cette chaine avec une condition qui retournera une chaine de caractère différente en fonction de si la condition est vraie ou fausse:

```jsx
<button className={`btn ${ isArticleDisplayed ? 'btn--danger' : 'btn--primary' }`} onClick={ handleToggleArticle }>{ isArticleDisplayed ? 'Hide' : 'Show' } article</button>
```

En principe tout devrait désormais fonctionner.

Dernière chose: il est bon d'être clair et précis lorsque l'on développe une application.

Pour cela, je vais renommer la fonction `handleClick` en `handleToggleArticle`. De cette façon, on sait simplement en lisant le nom de la fonction que cette fonction permet de faire switcher l'état de l'article entre la valeur `true` et la valeur `false`.

Voici le rendu final du code du composant:

```JSX
import { useState } from 'react';

function App() {
  const [ isArticleDisplayed, setIsArticleDisplayed ] = useState(false);

  const handleToggleArticle = () => {
	setIsArticleDisplayed(!isArticleDisplayed);
  };

  return (
	<>
		<h1>Mini Blog</h1>
		<button className={`btn ${ isArticleDisplayed ? 'btn--danger' : 'btn--primary' }`} onClick={ handleToggleArticle }>{ isArticleDisplayed ? 'Hide' : 'Show' } article</button>
		{
			isArticleDisplayed &&
			<div>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
				</p>
			</div>
		}
	</>	
  );
}

export default App;
```
