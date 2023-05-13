export const GreenButton = ({ buttonText, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="cursor-pointer text-lg text-white font-bold  bg-[#20b34c] py-2.5 px-3.5 w-full rounded-md hover:bg-[#47d070] transition duration-300 shadow-md"
    >
      {buttonText}
    </button>
  );
};
