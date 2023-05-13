export const GreenButton = ({ buttonText, clickHandler, size }) => {
  return (
    <button
      onClick={clickHandler}
      className={`cursor-pointer text-${size} text-white font-bold w-full  bg-[#20b34c] py-2.5 px-3.5 rounded-md hover:bg-[#47d070] transition duration-300 shadow-md`}
    >
      {buttonText}
    </button>
  );
};
