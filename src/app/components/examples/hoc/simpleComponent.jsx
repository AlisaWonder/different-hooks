import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, name, isAuth }) => {
    const handleClick = () => {
        isAuth ? onLogOut() : onLogin();
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            {name}
        </button>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    name: PropTypes.string,
    isAuth: PropTypes.string
};
export default SimpleComponent;
