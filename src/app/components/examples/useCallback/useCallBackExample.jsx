import React, { useEffect, useState, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    // without callback

    const validateWithoutCallback = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    // with callback

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback: {withoutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email:
            </label>
            <input
                name="email"
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
