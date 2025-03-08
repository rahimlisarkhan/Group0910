import React, { memo, useCallback, useMemo, useState } from "react";

function Child({ number, user }) {
  const [count, setCount] = useState(0);

  console.log("-------");
  console.log("Render Child");
  console.log("Child number", number);

  const resultNum = useMemo(() => {
    console.log("resultNum render", 14 * number);
    return 14 * number;
  }, [number]);

  const handleData = useCallback(() => {
    console.log("handleData render", 14 * count);
  }, [count]);

  return (
    <div>
      <hr />
      <h1>
        Child: {user?.fullname} {resultNum}
      </h1>
      <button onClick={() => handleData()}>Click show data</button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Child Count {count}
      </button>
      <hr />
    </div>
  );
}

export default memo(Child);
