import React from "react";

const StatsBlock = ({time, tasks, correct}) => {
  return (
    <div className="training-solve-block">
      <div className="item-body">
        <div className="names-block">
            <p className="stats-text">
                Время решения:
            </p>
            <p className="stats-text">
                Всего заданий:
            </p>
            <p className="stats-text">
                Верных ответов:
            </p>
            <p className="stats-text">
                Процент: 
            </p>
        </div>
        <div className="values-block">
        <p className="stats-text">
                {time} секунд
            </p>
            <p className="stats-text">
                {tasks}
            </p>
            <p className="stats-text">
                {correct}
            </p>
            <p className="stats-text">
                { Math.round(correct*100/tasks)} %
            </p>
        </div>
      </div>
    </div>
  );
};

export default StatsBlock;
