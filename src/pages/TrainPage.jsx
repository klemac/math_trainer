import React, { useEffect, useState } from "react";
import MyInputText from "../assets/UI/input/MyInputText";
import MyInputCheckbox from "../assets/UI/input/MyInputCheckbox";
import MyButton from "../assets/UI/button/MyButton";
import { actions } from "../utils/actions";
import SolvingBlock from "../components/SolvingBlock";

const TrainPage = () => {
  const [trainingData, setTrainingData] = useState([]);
  const [trainingKey, setTrainingKey] = useState(true);

  const [firstNumberLeft, setFirstNumberLeft] = useState(1);
  const [firstNumberRight, setFirstNumberRight] = useState(10);
  const [secondNumberLeft, setSecondNumberLeft] = useState(1);
  const [secondNumberRight, setSecondNumberRight] = useState(5);

  const [quantity, setquantity] = useState(2);

  //   const [addition, setAddition] = useState(false);
  //   const [subtraction, setSubtraction] = useState(false);
  //   const [multiplication, setMultiplication] = useState(false);
  //   const [division, setDivision] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(actions.length).fill(true)
  );

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFirstNumberLeft(value);
  };

  const handleChange2 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFirstNumberRight(value);
  };

  const handleChange3 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setSecondNumberLeft(value);
  };

  const handleChange4 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setSecondNumberRight(value);
  };

  const handleChange5 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setquantity(value);
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const createData = () => {
    try {
      let dataArray = new Array(quantity).fill("");
      for (let index = 0; index < quantity; index++) {
        let fNumber = getRandomIntInclusive(firstNumberLeft, firstNumberRight);
        let sNumber = getRandomIntInclusive(
          secondNumberLeft,
          secondNumberRight
        );
        let rIndexes = [0, 1, 2, 3].filter(
          (x, index) => checkedState[index] === true
        );
        const operation = rIndexes[Math.floor(Math.random() * rIndexes.length)];
        if (operation === 0) {
          dataArray[index] = {
            id: index,
            firstNumber: fNumber,
            secondNumber: sNumber,
            operation: operation,
            rightAnswer: fNumber + sNumber,
            userAnswer: "",
            isChecked: 0,
          };
        } else if (operation === 1) {
          let bigger = Math.max(fNumber, sNumber);
          let smaller = Math.min(fNumber, sNumber);
          dataArray[index] = {
            id: index,
            firstNumber: bigger,
            secondNumber: smaller,
            operation: operation,
            rightAnswer: bigger - smaller,
            userAnswer: "",
            isChecked: 0,
          };
        } else if (operation === 2) {
          dataArray[index] = {
            id: index,
            firstNumber: fNumber,
            secondNumber: sNumber,
            operation: operation,
            rightAnswer: fNumber * sNumber,
            userAnswer: "",
            isChecked: 0,
          };
        } else {
          let bigger = Math.max(fNumber, sNumber);
          let smaller = Math.min(fNumber, sNumber);
          dataArray[index] = {
            id: index,
            firstNumber: bigger + Math.abs(smaller - (bigger % smaller)),
            secondNumber: smaller,
            operation: operation,
            rightAnswer:
              (bigger + Math.abs(smaller - (bigger % smaller))) / smaller,
            userAnswer: "",
            isChecked: 0,
          };
        }
      }
      setTrainingData(dataArray);
      if (quantity > 0 && checkedState.filter((x) => x === true).length > 0) {
        setTrainingKey(!trainingKey);
      } else {
        alert("Ошибка ввода данных!");
      }
    } catch (e) {
      if (e instanceof TypeError) {
        alert("Ошибка ввода данных!");
      }
    }
  };

  return (
    <div className="training-page-block container">
      <div className="training-settings-block">
        <div className="first-range-block">
          Границы диапазона для первого числа:{"    "}
          <MyInputText
            type="text"
            value={firstNumberLeft}
            onChange={handleChange}
            autoComplete="off"
          />
          {"     -     "}
          <MyInputText
            type="text"
            value={firstNumberRight}
            onChange={handleChange2}
            autoComplete="off"
          />
        </div>
        <div className="second-range-block">
          Границы диапазона для второго числа:{"    "}
          <MyInputText
            type="text"
            value={secondNumberLeft}
            onChange={handleChange3}
            autoComplete="off"
          />
          {"     -     "}
          <MyInputText
            type="text"
            value={secondNumberRight}
            onChange={handleChange4}
            autoComplete="off"
          />
        </div>
        <div className="quantity-block">
          Кол-во примеров (не более 100): {"   "}
          <MyInputText
            type="text"
            value={quantity}
            onChange={handleChange5}
            autoComplete="off"
          />
        </div>
        <div className="checkbox-block">
          {actions.map(({ name, index }) => (
            <MyInputCheckbox
              key={`custom-checkbox-${index}`}
              naming={`custom-checkbox-${index}`}
              id={`custom-checkbox-${index}`}
              name={name}
              value={name}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
          ))}
        </div>
        <div className="button-block">
          <MyButton onClick={createData}>Составить примеры</MyButton>
        </div>
      </div>
      <SolvingBlock trainingData={trainingData} key={trainingKey} />
    </div>
  );
};

export default TrainPage;
