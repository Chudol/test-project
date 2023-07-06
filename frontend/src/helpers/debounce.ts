import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number, debounceCallback: () => void) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      debounceCallback();
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}