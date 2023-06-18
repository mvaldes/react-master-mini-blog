import { bool, node } from 'prop-types';
import Button from './Button';

const TabButton = ({ isActive, children, ...htmlButtonProps }) => {
	return <Button variant={ isActive ? 'primary' : 'light' } { ...htmlButtonProps }>{ children }</Button>;
};

export default TabButton;

TabButton.propTypes = {
	isActive: bool,
	children: node.isRequired,
};

TabButton.defaultProps = {
	isActive: false,
};