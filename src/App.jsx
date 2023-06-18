import { useState } from 'react';
import Button from './components/Button';
import Article from './components/Article';
import Tabs from './components/Tabs';

const tabs = [
	{
		id: 1,
		title: 'Atomic React',
		content: <Article title="Atomic React">
			<p>
				Atomic React dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
			</p>
		</Article>,
	},
	{
		id: 2,
		title: 'Components',
		content: <Article title="Components">
			<p>
				Components dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
			</p>
		</Article>,
	},
	{
		id: 3,
		title: 'Hooks',
		content: <Article title="Hooks">
			<p>
				Hooks dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
			</p>
		</Article>,
	},
];

const App = () => {
  const [ isArticleDisplayed, setIsArticleDisplayed ] = useState(false);

  const handleToggleArticle = () => {
	setIsArticleDisplayed(!isArticleDisplayed);
  };

  return (
	<>
		<h1>Mini Blog</h1>
		<Button
			variant={ isArticleDisplayed ? 'danger' : 'primary' }
			type="button"
			onClick={ handleToggleArticle }
		>
			{ isArticleDisplayed ? 'Hide' : 'Show' } article
		</Button>
		{
			isArticleDisplayed &&
			<Article title="My Article">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae obcaecati, velit perferendis libero dolore inventore dolorum vero, voluptatum totam officiis a? Doloribus blanditiis rerum consectetur neque autem? Sunt, quo.
				</p>
			</Article>
		}
		<Tabs defaultActiveTab={ 2 } tabs={ tabs } />
	</>
  );
};

export default App;