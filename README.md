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

Nous allons tout d'abord nous occuper du composant le plus simple: `Article`.

Nous savons déjà qu'un composant doit retourner du `JSX`. Nous constatons que la fonction du composant `Article` ne retourne rien.

Ajoutons le `JSX` manquant en mettant simplement un élément `div` avec un `h2` et un paragraphe de test:

```jsx
const Article = () => {
	return (
		<div>
			<h2>Article test</h2>
			<p>Paragraph test</p>
		</div>
	);
};
```

Comme le bouton n'est pas fonctionnel pour le moment, il va falloir faire en sorte d'afficher le composant `Article` par défaut dans l'interface pour pouvoir voir si ce composant fonctionne.

Dans `App.jsx`, on va donc modifier la valeur initiale de `isArticleDisplayed` dans le `state` pour lui donner la valeur `true`:

```jsx
const [ isArticleDisplayed, setIsArticleDisplayed ] = useState(true);
```

Nous devrions voir notre article maintenant.

À présent, comment faire pour que les informations spécifiées au niveau de `<Article>` dans le fichier `App.jsx` soit utilisées dans l'article et donc récupérées dans le composant `Article`.

Pour cela, **React** nous met à disposition les `props`.

Les `props` sont des **propriétés** qui peuvent être passées aux composants, comme si on passait des arguments à des fonctions.

Il est possible d'inscrire n'importe quel type de propriété dans les `props`: des nombres, des chaînes de caractères, des tableaux, des objets, des fonctions et même des éléments JSX !

Dans `App.jsx`, on constate qu'on essaie de transmettre le titre _"My Article"_ au composant `Article` via la propriété `title`.

Pour pouvoir la récupérer dans `Article.jsx`, je peux ajouter un argument `props` à la fonction du composant:

```jsx
const Article = (props) => {
	return (
		<div>
			<h2>Article test</h2>
			<p>Paragraph test</p>
		</div>
	);
};
```

Il ne doit pas **obligatoirement** s'appeler `props`. Tu peux le nommer comme tu l'entends. Cependant, je te recommande de conserver un code clair et précis.

**React** place en tant que premier argument d'une fonction d'un composant les propriétés transmises depuis un composant parent (`App` est parent de `Article`).

Ajoutons un `console.log` de `props` dans la fonction du composant:

```jsx
const Article = (props) => {

	console.log(props);

	return (
		<div>
			<h2>Article test</h2>
			<p>Paragraph test</p>
		</div>
	);
};
```

On constate que `props` est un objet qui contient les propriétés `title` et `children`:

```jsx
{
	children: {
		$$typeof: Symbol(react.element),
		key: null,
		props: {
			children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo."
		},
		ref: null,
		type: "p"
	},
	title: "My Article",
}
```

La valeur de `title` semble correspondre à la valeur de 'attribut `title` qui a été passé à `<Article>`.

On a bien _"My Article"_ des deux côtés.

Mais `children`... Nous n'avons pas spécifié de `children`...

En fait, nous l'avons spécifié de façon implicite !

Lorsque nous passons du **JSX** entre deux balises d'un composant, ce **JSX** va être automatiquement transmis dans les `props` en tant que `children`.

Le paragraphe inscrit entre les balises de `<Article>` ici:

```jsx
<Article title="My Article">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
	</p>
</Article>
```

se retrouve en tant que valeur de la propriété `children`, dans les props.

Si on analyse l'objet `children` reçu dans les `props`:

```jsx
{
	children: {
		$$typeof: Symbol(react.element),
		key: null,
		props: {
			children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo."
		},
		ref: null,
		type: "p"
	}
}
```

On constate qu'il s'agit d'un `react.element` de type `p`, donc une balise `p`, un paragraphe, qui possède lui-même des enfants: une chaîne de caractères correspondant au `lorem ipsum` placé entre les balises `<p>`.

Nous récupérons bien toutes les valeurs des `props` dans le composant `Article`.

Si je veux les utiliser dans le **JSX** du composant, je peux alors utiliser _l'interpolation_:

```jsx
const Article = (props) => {

	return (
		<div>
			<h2>{ props.title }</h2>
			{ props.children }
		</div>
	);
};

export default Article;
```

Le `title` sera interprêté et placé entre les balises `h2` et `children`, comme il s'agit d'un `react.element`, sera interprêté comme étant du **JSX**.

En retournant dans le navigateur, on peut voir que l'article affiche bien les informations passées dans les `props` depuis `App.jsx`.

La bonne pratique veut que nous destructurions l'objet `props` dans la fonction du composant comme ceci:

```jsx
const Article = ({ title, children }) => {

	return (
		<div>
			<h2>{ title }</h2>
			{ children }
		</div>
	);
};

export default Article;
```

Il faut ajuster le **JSX** en conséquence.

Cela permet d'avoir une vision plus claire des propriétés qui sont attendues par le composant.

Maintenant que nous avons terminé avec le composant `Article`, occupons nous du composant `Button`.

Mais avant cela, on pense à rétablir la valeur initiale de `isArticleDisplayed` dans le `state`:

```jsx
const [ isArticleDisplayed, setIsArticleDisplayed ] = useState(false);
```

L'article devrait donc être masqué par défaut.

Dans `Button.jsx`, ajoutons le `JSX` manquant en mettant simplement un élément `button` de test:

```jsx
const Button = () => {

	return (
		<button>
			test
		</button>
	);
};
```

Nous devrions apercevoir le bouton dans l'interface. Cependant, il n'a aucun design. Ajoutons les `class` `btn` et `btn--primary` pour voir si le style fonctionne:

```jsx
const Button = () => {

	return (
		<button className="btn btn--primary">
			test
		</button>
	);
};
```

En retournant voir dans le navigateur, on se rend compte que cela fonctionne.

Nous allons maintenant gérer la propriété `variant`, qui permet de modifier la couleur du bouton.

Nous savons, grâce à notre expérience avec le composant `Article`, que nous pouvons récupérer les `props` en tant que premier argument de la fonction du composant et que nous pouvons les desctructurer pour rendre le code plus clair.

Récupérons donc d'abord la propriété `variant` depuis les `props` du composant `Button`:

```jsx
const Button = ({ variant }) => {

	return (
		<button className="btn btn--primary">
			test
		</button>
	);
};
```

`variant` est une chaine de caractère qui doit être égale aux variantes du bouton disponibles dans le CSS (`primary`, `danger`, `warning`, `success`).

De cette façon, nous pouvons donc utiliser une _template string_ dans la propriété `className` du bouton pour y intégrer directement le `variant`:

```jsx
const Button = ({ variant }) => {

	return (
		<button className={`btn btn--${ variant }`}>
			test
		</button>
	);
};
```

Comme la _template string_ est du JavaScript, il faut la mettre entre accolades.

Si on retourne voir le résultat dans le navigateur, le bouton devrait apparaître en bleu.

On peut donc maintenant s'amuser à modifier la propriété `variant` du composant `Button` depuis `App` pour faire changer de couleur le bouton:

```jsx
<Button
	variant={ "warning" }
	onClick={ handleToggleArticle }
>
	{ isArticleDisplayed ? 'Hide' : 'Show' } article
</Button>
```

Cependant, si on inscrit une valeur qui n'est pas prise en charge par les classes CSS, le variant ne fonctionnera pas.

Nous pouvons donc ajouter une petite logique de validation de cette propriété dans le composant `Button`.

Ajoutons un tableau contenant la liste des valeurs possibles:

```jsx
const variants = [ 'primary', 'danger', 'warning', 'success' ];

const Button = ({ variant }) => {

	return (
		<button className={`btn btn--${ variant }`}>
			test
		</button>
	);
};
```

Puis ajoutons une condition qui dit que si la valeur de la propriété `variant` n'est pas incluse dans la liste des variantes disponibles, alors nous rejetons une erreur indiquant que cette valeur est incorrecte et on indique la liste des valeurs possibles dans l'erreur:

```jsx
const variants = [ 'primary', 'danger', 'warning', 'success' ];

const Button = ({ variant }) => {

	if (!variants.includes(variant)) {
		throw new Error(`"${variant}" is not a valid value of the property "variant". It should be one of these: ${ variants.join(', ')}`);
	}

	return (
		<button className={`btn btn--${ variant }`}>
			test
		</button>
	);
};
```

De cette façon, si on indique une valeur qui ne respecte pas cette condition:

```jsx
<Button
	variant={ "notAValidVariant" }
	onClick={ handleToggleArticle }
>
	{ isArticleDisplayed ? 'Hide' : 'Show' } article
</Button>
```

Nous auront le message d'erreur suivant dans la console:

> Uncaught Error: "notAValidVariant" is not a valid value of the property "variant". It should be one of these: primary, danger, warning, success

Nous pouvons même indiquer une valeur par défaut à la propriété `variant`, nous dirons que c'est `primary`:

```jsx
const Button = ({ variant = 'primary' }) => {

	if (!variants.includes(variant)) {
		throw new Error(`"${variant}" is not a valid value of the property "variant". It should be one of these: ${ variants.join(', ')}`);
	}

	return (
		<button className={`btn btn--${ variant }`}>
			test
		</button>
	);
};
```

De cette façon, il n'est plus nécessaire de préciser la propriété `variant` si nous voulons un bouton de couleur bleue, elle sera appliquée par défaut:

```jsx
// Ce bouton sera affiché en bleu
<Button
	onClick={ handleToggleArticle }
>
	{ isArticleDisplayed ? 'Hide' : 'Show' } article
</Button>
```

En valeur de la propriété `variant` nous avions une condition ternaire, il faut la remettre:

```jsx
isArticleDisplayed ? 'danger' : 'primary'
```

C'est celle que nous avions utilisé pour afficher le bouton en rouge quand `isArticleDisplayed` est vraie et en bleu quand `isArticleDisplayed` est fausse.

Mais pour permettre ce changement de valeur sur `isArticleDisplayed` il faut faire fonctionner `onClick`, qui déclenche `handleToggleArticle`.

Car pour le moment, le clic du bouton ne fait rien du tout.

Nous pouvons encore une fois récupérer la propriété `onClick` depuis les `props` du composant `Button` pour la transmettre à l'élément HTML `button` directement:

```jsx
const variants = [ 'primary', 'danger', 'warning', 'success' ];

const Button = ({ variant, onClick }) => {

	if (!variants.includes(variant)) {
		throw new Error(`"${variant}" is not a valid value of the property "variant". It should be one of these: ${ variants.join(', ')}`);
	}

	return (
		<button className={`btn btn--${ variant }`} onClick={ onClick }>
			test
		</button>
	);
};
```

Dans `App.jsx`, sur le composant `Button`, `onClick` est égale à `handleToggleArticle`:

```jsx
<Button
	variant={ isArticleDisplayed ? 'danger' : 'primary' }
	onClick={ handleToggleArticle }
>
	{ isArticleDisplayed ? 'Hide' : 'Show' } article
</Button>
```

Donc une fois récupérée depuis les `props` dans le composant `Button`, `onClick` sera aussi égale à `handleToggleArticle`.

Si on clique sur le bouton dans le navigateur, on peut observer que cela fonctionne.

Pour finir, il manque le contenu du bouton.

Nous savons que nous pouvons le récupérer grâce à la propriété `children`, car le contenu est passé entre les balises du composant `<Button>`, et l'insérer directement en tant qu'enfant de l'élément HTML `button` dans le composant `Button`:

```jsx
const variants = [ 'primary', 'danger', 'warning', 'success' ];

const Button = ({ variant, onClick, children }) => {

	if (!variants.includes(variant)) {
		throw new Error(`"${variant}" is not a valid value of the property "variant". It should be one of these: ${ variants.join(', ')}`);
	}

	return (
		<button className={`btn btn--${ variant }`} onClick={ onClick }>
			{ children }
		</button>
	);
};
```

Et ça fonctionne ! L'application est réparée !

Une question que nous pourrions nous poser maintenant c'est: "Et si j'ai besoin d'utiliser d'autres propriétés sur le `button`, dois-je toutes les passer une à une en tant que `props` du composant `Button` et venir les rajouter à l'élément HTML `button` ensuite ?"

Exemple:

```jsx
const Button = ({ variant = 'primary', children, type, id, role }) => {

	if (!variants.includes(variant)) {
		throw new Error(`"${variant}" is not a valid value of the property "variant". It should be one of these: ${ variants.join(', ')}`);
	}

	return (
		<button className={`btn btn--${ variant }`} type={ type } id={ id } role={ role }>
			{ children }
		</button>
	);
};

export default Button;
```

Évidemment, nous n'avons pas besoin de traiter une à une chaque propriété. Si c'était le cas, développer les composants serait terriblement fastidieux.

Nous n'avons qu'à nous préoccuper des propriétés "custom", c'est à dire celles que nous créons, et/ou que nous voulons traiter d'une façon particulière.

Pour que le composant prenne en charge l'ensemble des propriétés natives de l'élément HTML `button`, nous pouvons utiliser le _spread operator_ pour récupérer le reste des propriétés qui seraient passées dans les `props` du composant et transmettre l'ensemble de ces propriétés directement à l'élément `button`. Comme ceci:

```jsx
const variants = [ 'primary', 'danger', 'warning', 'success' ];

const Button = ({ variant = 'primary', children, ...rest }) => { // On récupère le reste des propriétés

	if (!variants.includes(variant)) {
		throw new Error(`"${variant}" is not a valid value of the property "variant". It should be one of these: ${ variants.join(', ')}`);
	}

	return (
		<button className={`btn btn--${ variant }`} { ...rest }> {/* On les transmet au bouton toujours grâce au spread operator */}
			{ children }
		</button>
	);
};

export default Button;
```

On peut même se débarrasser de `onClick`, puisse qu'elle sera récupérée par l'objet `rest` et transmise au bouton.

Si on fait un `console.log` de `rest`, on observe que `rest` est un objet contenant le reste des propriétés qui ne sont pas récupérées directement via le destructuring.

Si on ajoute une propriété `type` au composant `<Button>` dans `App`:

```jsx
<Button
	variant={ isArticleDisplayed ? 'danger' : 'primary' }
	type="button"
	onClick={ handleToggleArticle }
>
	{ isArticleDisplayed ? 'Hide' : 'Show' } article
</Button>
```

La propriété `type` sera récupérée dans l'objet `rest` et également transmise au bouton, tout comme la propriété `onClick`.
