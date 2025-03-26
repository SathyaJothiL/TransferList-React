import React from "react";

const Button = ({
  enableButtonAll,
  enableButton,
  shiftLeftRight,
  shiftRightAll,
  shiftLeftAll,
  rightList,
  setRightList,
  leftList,
  setLeftList,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <button disabled={enableButtonAll(rightList)} onClick={shiftLeftAll}>
        {"<<"}
      </button>
      <button
        disabled={enableButton(rightList)}
        onClick={() =>
          shiftLeftRight(rightList, setRightList, leftList, setLeftList)
        }
      >
        {"<"}
      </button>
      <button
        disabled={enableButton(leftList)}
        onClick={() =>
          shiftLeftRight(leftList, setLeftList, rightList, setRightList)
        }
      >
        {">"}
      </button>
      <button disabled={enableButtonAll(leftList)} onClick={shiftRightAll}>
        {">>"}
      </button>
    </div>
  );
};

export default Button;
