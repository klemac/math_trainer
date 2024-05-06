import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container main-page-block">
      <div className="page-title">Главная</div>
      <div className="main-page-info">
        <p>
          Данные математический тренажёр создан в качестве итогового проекта в
          9ом классе. На данный момент он представляет собой удобный инструмент
          для тренировки устного счёт, а также базовых навыков
          вычислений у школьников младших классов. В будущем в тренажёр будут
          добавлены специальные режимы, например "Решение квадратных и
          биквадратных уравнений", "Перевод единиц измерения", "Таблица степеней
          двойки" и многие другие. Вы также можете предложить свои идеи для
          развития программы, написав мне на почту:
        </p>
        <p>konnov_i_g@mail.ru</p>
      </div>
      <div className="main-page-three-blocks">
        <div className="three-blocks-title">Выберите режим</div>
        <div className="three-blocks">
            <Link to='/studying' className="link-block"><div className="studying-block button-block">Справочник</div></Link>
            <Link to='/training' className="link-block"><div className="training-block button-block">Тренировка</div></Link>
            <Link to='/playing' className="link-block"><div className="playing-block button-block">Игра на время</div></Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
