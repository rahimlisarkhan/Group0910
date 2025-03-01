import { useEffect, useState } from "react";

export function useLocalStore(key) {
  const [localData, setLocalData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setLocalData(JSON.parse(data));
    }
  }, [key]);

  function setLocal(value) {
    setLocalData(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [localData, setLocal];
}
