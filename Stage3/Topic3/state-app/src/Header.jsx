import { useState } from 'react';

function Header() {
  const [count, setCount] = useState(0);

  return <div onClick={() => setCount((prev) => prev + 1)}>Header {count}</div>;
}

export default Header;
