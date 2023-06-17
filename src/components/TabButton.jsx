import Button from './Button';

const TabButton = ({ isActive = false, children, ...rest }) => {
	return <Button variant={ isActive ? 'primary' : 'light' } { ...rest }>{ children }</Button>;
};

export default TabButton;