import React from "react";

export const ClickableTextHighlight = ({ children, onClickHandler, selectionHighlight }) => {
  return (
    <>
      {selectionHighlight ? (
        <div
          onClick={onClickHandler}
          className={`cursor-pointer mr-5 font-bold ${
            selectionHighlight ? "text-green-600" : "text-green-800"
          } hover:text-green-600 transition-colors duration-200 ease`}
        >
          {children}
        </div>
      ) : (
        <div
          onClick={onClickHandler}
          className={`cursor-pointer mr-5 font-bold text-green-800 hover:text-green-600 transition-colors duration-200 ease`}
        >
          {children}
        </div>
      )}
    </>
  );
};
