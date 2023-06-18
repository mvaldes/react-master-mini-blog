import { string, node } from 'prop-types';
import Timer from './Timer';

const Article = ({ title, children }) => {

	return (
		<div>
			<h2>{ title }</h2>
			<Timer />
			{ children }
		</div>
	);
};

export default Article;

Article.propTypes = {
	title: string.isRequired,
	children: node.isRequired,
};