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