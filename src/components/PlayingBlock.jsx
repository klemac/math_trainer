import React, { useState } from "react";
import { actions } from "../utils/actions";
import MyInputTextLong from "../assets/UI/input/MyInputTextLong";
import MyButton from "../assets/UI/button/MyButton";

const PlayingBlock = ({ trainingData, createData, setPoints, setTasks }) => {
  const [inputsState, setInputsState] = useState(trainingData);


  const handleChange = (e, id) => {
    let result = [...inputsState];
    result = result.map((x) => {
      if (x.id === id) x.userAnswer = Number(e.target.value.replace(/\D/g, ""));
      return x;
    });
    setInputsState(result);
  };

  const checkAnswer = (id) => {
    let result = [...inputsState];
    // if (inputsState[id].rightAnswer == inputsState[id].userAnswer) {

    // }

    result = result.map((x) => {
      if (
        x.id === id &&
        inputsState[id].rightAnswer === inputsState[id].userAnswer
      ) {
        x.isChecked = 2;
        setPoints((points) => points + 1)
        setTasks((tasks) => tasks + 1)
      } else if (
        x.id === id &&
        inputsState[id].rightAnswer !== inputsState[id].userAnswer
      ) {
        x.isChecked = 1;
        setTasks((tasks) => tasks + 1)
      }
      return x;
    });
    setInputsState(result);

    setTimeout(createData, 1000);

  };

  return (
    <div className="training-solve-block">
      {inputsState.map((item) => (
        <div className="item-body" key={item.id}>
          <div className="item-left-block">
            <div className="item-expression">
              {item.firstNumber}{" "}
              {
                actions.find((element) => element.index === item.operation)
                  .symbol
              }{" "}
              {item.secondNumber}
            </div>
            <MyInputTextLong
              value={inputsState[item.id].userAnswer}
              onChange={(e) => handleChange(e, item.id)}
              autoComplete="off"
            />
            <MyButton onClick={() => checkAnswer(item.id)}>Проверить</MyButton>
          </div>
          <div className="item-right-block">
            {item.isChecked === 1 ? (
              <div className="solution-block text-bad">Ваш ответ неверный!</div>
            ) : null}
            {item.isChecked === 2 ? (
                
              (<div className="solution-block text-good">Ваш ответ верный!</div>)
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayingBlock;
