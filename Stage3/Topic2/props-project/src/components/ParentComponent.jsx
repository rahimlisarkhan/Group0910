import PropTypes from 'prop-types';

import { ageCalc } from '../utils/date';
import ChildComponent from './ChildComponent';

export default function ParentComponent(props) {
  console.log(props);

  const inlineCss = {
    border: '1px solid red',
  };

  return (
    <div style={inlineCss}>
      ParentComponent
      <h1>{props.title}</h1>
      <h2>{props.age}</h2>
      <h3>{props.list[2]}</h3>
      <h4>{props.add.a}</h4>
      <h5>{ageCalc(props.age)}</h5>
      <div>{props.children}</div>
      <ChildComponent title="Salam" age={props.age} />
    </div>
  );
}

ParentComponent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  age: PropTypes.number,
  list: PropTypes.array,
  add: PropTypes.object,
};
