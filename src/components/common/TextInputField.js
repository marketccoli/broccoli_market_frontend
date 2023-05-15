export const TextInputField = ({ autofocus = false, inputLabel, inputType, placeholderText, value, handleInputChange }) => {
  return (
    <div className="w-2/3 pt-3 px-4 ">
      <label htmlFor={placeholderText} className="leading-7 text-sm text-gray-600">
        {inputLabel}
      </label>
      <input
        autoFocus={autofocus}
        type={inputType}
        id={inputLabel}
        name={placeholderText}
        className="bg-white border-2 border-green-300 placeholder-green-600 text-green-900 h-10 px-5 w-full mr-3 rounded-lg text-sm 
        outline-none focus:border-none focus:ring-2 focus:ring-green-700  focus:bg-white transition-colors duration-200 ease-in-out ::placeholder:text-green-500"
        placeholder={placeholderText}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
