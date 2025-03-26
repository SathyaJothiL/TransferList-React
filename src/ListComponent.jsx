import React from "react";

const ListComponent = ({ list, setList, handleCheck }) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-start ml-4 p-4">
      {Object.keys(list).map((item, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={item}
              checked={list[item]}
              onChange={() => handleCheck(item, list, setList)}
            ></input>
            <label className="px-4" htmlFor={item}>{item}</label>
          </div>
        );
      })}
    </div>
  );
};

export default ListComponent;
