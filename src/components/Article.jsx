import { string, node } from 'prop-types';

const Article = ({ title, children }) => {

	return (
		<div>
			<h2>{ title }</h2>
			{ children }
		</div>
	);
};

export default Article;

Article.propTypes = {
	title: string.isRequired,
	children: node.isRequired,
};