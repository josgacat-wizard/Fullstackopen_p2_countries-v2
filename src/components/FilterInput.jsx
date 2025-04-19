import { useState } from "react";

const FilterInput = ({ onChangeCallback }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChangeCallback && onChangeCallback(inputValue);
  };
  return (
    <>
      Find countries:{" "}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type to search..."
      />
    </>
  );
};

export default FilterInput;
