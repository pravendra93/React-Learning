import React from "react";
const Header = ({something, ...otherProps}) => {
    const checkMyName = (e) => {
        console.log("callled")
    }

    return (
        <div className={`header-class ${otherProps.className}`}>
            <h1>Header</h1>
            <a onClick={checkMyName}>Click</a>
        </div>
    )

}

export default Header;