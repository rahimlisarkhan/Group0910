import { useRef } from 'react';
import PropTypes from 'prop-types';

function TodoInput({ onAddText }) {
  const inputRef = useRef();

  function handleInput() {
    onAddText(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleInput}> Add </button>
    </div>
  );
}

export default TodoInput;

TodoInput.propTypes = {
  onAddText: PropTypes.func.isRequired,
};
