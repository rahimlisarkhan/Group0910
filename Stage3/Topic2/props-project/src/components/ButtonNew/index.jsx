import ButtonBs from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const variantBS = ['success', ''];

function ButtonNew({ icon, ...options }) {
  return (
    <ButtonBs {...options} className="">
      {options.children} {icon}
    </ButtonBs>
  );
}
ButtonNew.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
};

export default ButtonNew;
