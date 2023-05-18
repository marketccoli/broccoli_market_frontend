import React from "react";

export const ClickableTextHighlight = ({ children, onClickHandler, selectionHighlight }) => {
  return (
    <>
      {/* Highlight option */}
      {selectionHighlight ? (
        <div
          onClick={onClickHandler}
          className={`cursor-pointer mr-5 font-bold text-lg  ${
            selectionHighlight ? "text-green-500" : "text-green-700"
          } hover:text-green-500 transition-colors duration-200 ease`}
        >
          {children}
        </div>
      ) : (
        <div
          onClick={onClickHandler}
          className={`cursor-pointer mr-5 font-bold text-lg text-green-700 hover:text-green-500 transition-colors duration-200 ease`}
        >
          {children}
        </div>
      )}
    </>
  );
};
