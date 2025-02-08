import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title(props) {
  const { color = '#000', children = 'Title', variant = 'body2' } = props;

  // if (!children) {
  //   return null;
  // }

  return (
    <div className={styles[variant]} style={{ color }}>
      {children}
    </div>
  );
}

export default Title;

Title.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
};
