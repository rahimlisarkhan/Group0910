import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
  return (
    <button
      className={`${styles.button} ${props.variant && styles[props.variant]} ${
        props.variant == 'container'
          ? styles[props.color]
          : styles['outlined_' + props.color]
      }`}
      //   style={{ backgroundColor: props.color }}
    >
      {props.title ?? props.children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
};
