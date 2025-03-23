import './Button.css';

const Button = ({
	onClick,
	type = 'button',
	className = '',
	label = 'Broneeri Aeg',
}) => {
	return (
		<button type={type} className={`fancy ${className}`} onClick={onClick}>
			<span className='top-key'></span>
			<span className='text'>{label}</span>
			<span className='bottom-key-1'></span>
			<span className='bottom-key-2'></span>
		</button>
	);
};

export default Button;
