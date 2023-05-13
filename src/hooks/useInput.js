import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleInputChange];
};
