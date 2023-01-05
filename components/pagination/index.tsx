import React from "react";
import s from "./style.module.scss";

type PropsType = {
  page: number;
  limit: number;
  count: number;
  onChange: (page: number) => void;
  indent: number;
};

const Pagination: React.FC<PropsType> = (props) => {
  // Количество страниц
  const length = Math.ceil(props.count / Math.max(props.limit, 1));

  // Номера слева и справа относительно активного номера, которые остаются видимыми
  let left = Math.max(props.page - props.indent, 1);
  let right = Math.min(left + props.indent * 2, length);
  // Корректировка когда страница в конце
  left = Math.max(right - props.indent * 2, 1);

  // Массив номеров, чтобы удобней рендерить
  let items = [];
  // Первая страница всегда нужна
  if (left > 1) items.push(1);
  // Пропуск
  if (left > 2) items.push(null);
  // Последваотельность страниц
  for (let page = left; page <= right; page++) items.push(page);
  // Пропуск
  if (right < length - 1) items.push(null);
  // Последнаяя страница
  if (right < length) items.push(length);

  // Возвращает функцию с замыканием на номер страницы
  const clickHandler = (page: number) => {
    return () => props.onChange(page);
  };

  return (
    <ul className={s.Pagination}>
      {items.map((num, i) =>
        num ? (
          <li
            key={i}
            className={
              num === props.page
                ? `${s.Pagination__item} ${s.Pagination__item_active}`
                : `${s.Pagination__item}`
            }
            onClick={clickHandler(num)}
          >
            {num}
          </li>
        ) : (
          <li key={i} className={`${s.Pagination__item} ${s.Pagination__item_split}`}>
            ...
          </li>
        )
      )}
    </ul>
  );
};

export default React.memo(Pagination);
