const variants = [ 'primary', 'danger', 'warning', 'success' ];

const Button = ({ variant = 'primary', children, ...rest }) => {

	if (!variants.includes(variant)) {
		throw new Error(`"${variant}" is not a valid value of the property "variant". It should be one of these: ${ variants.join(', ')}`);
	}

	return (
		<button className={`btn btn--${ variant }`} { ...rest }>
			{ children }
		</button>
	);
};

export default Button;

