import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withSimpleComponent = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));

    const onLogin = () => {
        localStorage.setItem("user", "user");
        setIsAuth(localStorage.getItem("user"));
    };

    const onLogOut = () => {
        localStorage.removeItem("user", "user");
        setIsAuth(localStorage.getItem("user"));
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
                name={isAuth ? "Выйти из системы" : "Войти"}
            />
            <p>Есть в памяти пользователь? {isAuth ? "Есть" : "Нет"}</p>
        </CardWrapper>
    );
};

export default withSimpleComponent;
