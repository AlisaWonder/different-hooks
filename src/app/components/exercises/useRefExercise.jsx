import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.innerHTML = "text";
    };

    const handleClickWidthAndHeight = () => {
        inputRef.current.style.width = "80px";
        inputRef.current.style.height = "150px";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <button className="btn btn-danger" onClick={handleClick}>
                Изменить содержимое блока на text
            </button>
            <button
                className="btn btn-secondary"
                onClick={handleClickWidthAndHeight}
            >
                Изменить ширину и высоту
            </button>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={inputRef}
            >
                <small>Блок</small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
