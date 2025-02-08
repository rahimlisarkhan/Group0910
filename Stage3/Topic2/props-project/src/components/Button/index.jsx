import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
  const {
    variant = 'container',
    color,
    title,
    children,
    onClick,
    ...options
  } = props;

  return (
    <button
      className={`${styles.button} ${variant && styles[variant]} ${
        variant == 'container' ? styles[color] : styles['outlined_' + color]
      }`}
      onClick={onClick}
      //   style={{ backgroundColor: props.color }}
      {...options}
    >
      {title ?? children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
