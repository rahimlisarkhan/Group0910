// 1. onChange - input
// 2. onCLick - any
// 3. onFocus - input
// 4. onBlur - input
// 5. onMouseEnter - any
// 6. onMouseLeave - any
// 7. onScroll - any

import { useState } from 'react';

function Event() {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleFocus() {
    console.log('inputdan daxil oldu');
    setText('');
    setError(true);
  }

  function handleBlur() {
    console.log('inputdan cixdi');
    setError(false);
  }

  function handleSubmit() {
    if (text.length > 20) {
      alert('Wrong text');
      return;
    }

    const payload = {
      movie_title: text,
    };

    console.log(payload);
  }

  return (
    <div>
      <h2>Text:{text}</h2>
      {error && (
        <h2 style={{ color: text.length > 20 ? 'red' : 'white' }}>
          Text uzunglugu:{text.length}
        </h2>
      )}
      <input
        name="full_name"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default Event;
