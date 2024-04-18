import { useState } from 'react';
import { render } from 'react-dom';

const App = () => {
	const [article, setArticle] = useState(false);

	const handleClick = () => {
		setArticle(!article)
	}

	return (
		<>
			<h1>Mini blogue</h1>
			<button className={`btn ${article ? "btn--success":"btn--primary"}`} onClick={handleClick}>{article ? "Hide article" : "Show article"}</button>
			{article && (
					<div className="btn--success">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, possimus similique in corrupti vel deleniti porro error totam commodi rem nobis officiis! Corrupti ullam qui ipsam neque commodi molestiae laborum.</div>
			)}
		</>
	);
};

export default App;
