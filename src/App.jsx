import { useState } from 'react';

const App = () => {
	const [isArticle, setIsArticle] = useState(false);

	const handleClick = () => {
		setIsArticle(!isArticle);
	}

	return (
		<>
			<h1>Mini blogue</h1>
			<button className={`btn ${isArticle ? "btn--success":"btn--primary"}`} onClick={handleClick}>{isArticle ? "Hide article" : "Show article"}</button>
			{isArticle && (
					<div className="btn--success">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, possimus similique in corrupti vel deleniti porro error totam commodi rem nobis officiis! Corrupti ullam qui ipsam neque commodi molestiae laborum.</div>
			)}
		</>
	);
};

export default App;
