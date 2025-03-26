import React, { useState } from "react";
import Button from "./Button.jsx";
import ListComponent from "./ListComponent.jsx";

const TranserList = () => {
  const [leftList, setLeftList] = useState({
    Java: false,
    HTML: false,
    CSS: false,
    TS: false,
  });
  const [rightList, setRightList] = useState({
    React: false,
    Angular: false,
    Vue: false,
    Svelte: false,
  });
  function shiftLeftAll() {
    console.log("left");

    setLeftList((prev) => {
      return { ...prev, ...rightList };
    });

    setRightList((prev) => {
      return {};
    });
  }
  function shiftRightAll() {
    setRightList((prev) => {
      return { ...prev, ...leftList };
    });
    setLeftList((prev) => {
      return {};
    });
  }
  function handleCheck(item, list, setList) {
    console.log(item, " clicked");
    setList((prev) => {
      return { ...prev, [item]: !list[item] };
    });
    console.log(list);
  }
  function shiftLeftRight(fromList, setFromList, toList, setToList) {
    let filterChecked = Object.keys(fromList).filter(
      (item) => fromList[item] === true
    );
    let filterUnChecked = Object.keys(fromList).filter(
      (item) => fromList[item] === false
    );
    let mapFiltered = filterChecked.map((key) => {
      let temp = [];
      temp.push(key, false);
      return temp;
    });
    let mapUnFiltered = filterUnChecked.map((key) => {
      let temp = [];
      temp.push(key, false);
      return temp;
    });
    let checkedItems = Object.fromEntries(mapFiltered);
    let UnCheckedItems = Object.fromEntries(mapUnFiltered);

    setToList((prev) => {
      return { ...prev, ...checkedItems };
    });
    setFromList((prev) => {
      return { ...UnCheckedItems };
    });
    console.log(checkedItems, "checked");
    console.log(UnCheckedItems, "unchecled");
  }
  function enableButton(list) {
    let findOne = Object.keys(list).find((item) => list[item] === true);
    if (findOne) {
      return false;
    }
    return true;
  }
  function enableButtonAll(list) {
    let len = Object.keys(list).length;
    if (len === 0) {
      return true;
    }
    return false;
  }

  return (
    <div className="flex justify-center mt-12 w-full">
      <div className="flex flex-col gap-8  border border-black w-1/3">
        <ListComponent
          list={leftList}
          setList={setLeftList}
          handleCheck={handleCheck}
        />
      </div>

      <div className=" border-black border-b border-t p-4 flex">
        <Button
          enableButtonAll={enableButtonAll}
          enableButton={enableButton}
          shiftLeftRight={shiftLeftRight}
          shiftRightAll={shiftRightAll}
          shiftLeftAll={shiftLeftAll}
          rightList={rightList}
          setRightList={setRightList}
          leftList={leftList}
          setLeftList={setLeftList}
        />
      </div>

      <div className="flex flex-col gap-8 w-1/3  border border-black ">
        <ListComponent
          list={rightList}
          setList={setRightList}
          handleCheck={handleCheck}
        />
      </div>
    </div>
  );
};

export default TranserList;
