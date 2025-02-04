import PropTypes from 'prop-types';

export default function ChildComponent(props) {
  return (
    <div style={{ border: '1px solid yellow' }}>
      ChildComponent
      <h6>{props.title}</h6>
      <h5>{props.age + 12}</h5>
    </div>
  );
}

ChildComponent.propTypes = {
  title: PropTypes.string,
  age: PropTypes.number.isRequired,
};
