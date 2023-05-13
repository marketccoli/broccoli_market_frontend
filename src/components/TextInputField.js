export const TextInputField = ({ autofocus = false, inputLabel, inputType, placeholderText, value, handleInputChange }) => {
  return (
    <div className="w-2/3 pt-3 px-4 ">
      <label htmlFor={placeholderText} className="leading-7 text-sm text-gray-600">
        {inputLabel}
      </label>
      <input
        autoFocus={autofocus}
        type={inputType}
        id={inputType}
        name={placeholderText}
        className="bg-green-50 border-2 border-green-300 placeholder-green-600  h-10 px-5 w-full mr-3 rounded-lg text-sm focus:border-none focus:ring-2 focus:ring-green-700 outline-none focus:bg-white text-green-900 transition-colors duration-200 ease-in-out ::placeholder:text-green-500"
        placeholder={placeholderText}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
