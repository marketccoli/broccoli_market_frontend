export const TextInputField = ({ inputLabel, inputType, placeholderText }) => {
  return (
    <div className="w-2/3 p-3 px-4 ">
      <label htmlFor="password" className="leading-7 text-sm text-gray-600">
        {inputLabel}
      </label>
      <input
        type={inputType}
        id={inputType}
        name={inputType}
        className="bg-green-50 border-2 border-green-300 h-10 px-5 w-full mr-3 rounded-lg text-sm focus:border-none focus:ring-2 focus:ring-green-700 outline-none focus:bg-white text-green-900 transition-colors duration-200 ease-in-out ::placeholder:text-green-500"
        placeholder={placeholderText}
      />
    </div>
  );
};
