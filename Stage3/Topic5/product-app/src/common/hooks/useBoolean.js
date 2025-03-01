import { useState } from "react";

export function useBoolean() {
  const [value, setValue] = useState(false);

  function setTrue() {
    setValue(true);
  }

  function setFalse() {
    setValue(false);
  }

  function toggle() {
    setValue(!value);
  }

  return { value, setTrue, setFalse, toggle };
}
