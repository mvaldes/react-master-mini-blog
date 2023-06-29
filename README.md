# ⚛️ React Master - Mini blog: Créer un custom hook (Correction)

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

Pour réaliser cet exercice, il nous faut créer un _custom hook_ dans le dossier `hooks/` mis à notre disposition.

Ce _custom hook_ doit gérer un _"timer"_, il ne contiendra pas de `JSX`. Nous allons donc créer un nouveau fichier `useTimer.js` dans le dossier `hooks/`:

```JSX
const useTimer = () => {

};

export default useTimer;
```

Nous pouvons ensuite récupérer la logique que nous avons déjà développée dans le composant `Timer` pour l'exploiter dans `useTimer`:

```JSX
import { useEffect, useState } from 'react';

const useTimer = () => {

	const [ elaspedTime, setElapsedTime ] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		}
	}, []);

};

export default useTimer;
```

C'est exactement la même logique.

Ensuite, pour que `elaspedTime` soit accessible par le composant qui utilise `useTimer`, il faut que `useTimer` retourne cette valeur:

```JSX
import { useEffect, useState } from 'react';

const useTimer = () => {

	const [ elaspedTime, setElapsedTime ] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		}
	}, []);

	return elaspedTime;

};

export default useTimer;
```

Nous pouvons maintenant tester notre hook dans `App.jsx` en prenant soin d'importer `useTimer` en haut du fichier ainsi que la fonction `convertSecondsToHMS` depuis `time.util.js`:

```jsx
// ...
import useTimer from './hooks/useTimer';
import { convertSecondsToHMS } from './utils/time.util';

const App = () => {
  const [ areArticlesDisplayed, setAreArticlesDisplayed ] = useState(false);

  const elaspedTime = useTimer();

  const handleToggleArticles = () => {
	setAreArticlesDisplayed(!areArticlesDisplayed);
  };

  return (
	<>
		<h1>Mini Blog</h1>
		<p style={{ fontWeight: 'bold', fontSize: 20 }}>You spent { convertSecondsToHMS(elaspedTime) } on the blog.</p>
		<Button
			variant={ areArticlesDisplayed ? 'danger' : 'primary' }
			type="button"
			onClick={ handleToggleArticles }
		>
			{ areArticlesDisplayed ? 'Hide' : 'Show' } articles
		</Button>
		{
			areArticlesDisplayed &&
			<Tabs defaultActiveTabId={ 2 } tabs={ tabs } />
		}
	</>
  );
};

export default App;
```

Ceci devrait fonctionner !

La consigne indiquait que ce hook devait être paramétrable. Cela veut dire qu'il doit être capable de prendre des arguments permettant de personnaliser son comportement.

Ici, on nous demandait de faire en sorte que `useTimer` soit capable de prendre en charge différentes vitesses de défilement du temps.

Rajoutons donc un argument `interval` dans la fonction de `useTimer` qui aura comme valeur par défaut `1000`. De cette façon, nous rendons ce paramètre optionnel. Et utilisons `interval` au niveau de `setInterval`:

```jsx
import { useEffect, useState } from 'react';

const useTimer = (interval = 1000) => { // ICI

	const [ elaspedTime, setElapsedTime ] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
		}, interval); // ICI

		return () => {
			clearInterval(intervalId);
		}
	}, []);

	return elaspedTime;

};

export default useTimer;
```

Notre hook dispose donc maintenant d'un élément de personnalisation.

Essaysons dans `App.jsx` de passer un nombre comme `300` en argument de `useTImer` pour voir si le temps défile plus vite:

```jsx
const elaspedTime = useTimer(300);
```

Et effectivement c'est le cas !

**Une mise en garde est néanmoins nécessaire ici:** Ce que l'on vient de faire n'est qu'un exercice pour apprendre les **hooks** et ne doit pas être réalisé dans un cas réel d'application.

Effectivement, le hook `useTimer` déclare un `state`. Comme `useTimer` est utilisé dans le composant `App`, il utilise le `state` de `App`.

Si on met à jour le `state` de `App` à chaque seconde, `App` va se re-rendre à chaque seconde et re-rendre ses enfants avec lui à chaque seconde.

Dans le cas de notre petit application, ce n'est pas très gênant.

Mais dans le cas d'une application bien plus importante avec beaucoup de composants, ceci est une mauvaise pratique et peut occasionner de lourds problèmes de performances.

Il est très important de faire attention à l'endroit où le `state` est géré.

Dans la situation actuelle, il serait plus judicieux d'utiliser le composant `Timer` qui gère son propre état et n'impacte pas l'état et le re-rendu des autres composants.

Mais ne t'inquiète pas, nous aurons l'occasion de réaliser des _custom hooks_ en condition réelle par la suite.
