import PropTypes from 'prop-types';
// import Button from './Button';
// import ButtonBs from 'react-bootstrap/Button';
import ButtonNew from './ButtonNew';
import { FaUserAlt } from 'react-icons/fa';

function Personal(props) {
  console.log(props);

  const value = 100;

  function handleClick() {
    console.log('Hello Personal');

    props.handleHello(value);
  }

  function handleClose() {
    console.log('close modal');
  }

  return (
    <div>
      Personal
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <ButtonNew icon={<FaUserAlt />} variant="purple">
        Title
      </ButtonNew>
      {/* <ButtonBs variant="success">Success</ButtonBs> */}
      <button onClick={handleClick}>Salam Ver</button>
      {/* <Button color="danger" onClick={handleClose} disabled>
        Text
      </Button>
      <Button color="warning" onClick={handleClose}>
        Text 4
      </Button> */}
      {/* <ChildCom  handleHello={props.handleHello} /> */}
    </div>
  );
}

Personal.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  handleHello: PropTypes.func.isRequired,
};

export default Personal;
