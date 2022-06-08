import React from "react";
const Header = ({something, ...otherProps}) => {
    const checkMyName = () => {
    }

    return (
        <div className={`header-class ${otherProps.className}`}>
            <h1>Header</h1>
            <a>Click</a>
        </div>
    )

}

export default Header;