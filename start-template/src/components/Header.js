import React, {useState} from "react";
const Header = ({something, ...otherProps}) => {
    //Hooks
    const [user, setUser] = useState({name:"Pravendra", lastName:"Kumar"})
    const checkMyName = (e) => {
        setUser({name:"Javed", lastName:"Khan"})
    }

    return (
        <div className={`header-class ${otherProps.className}`}>
            <h1>Header : {user.name}-{user.lastName}</h1>
            <a onClick={checkMyName} style={{cursor:"pointer"}}>Click</a>
        </div>
    )

}

export default Header;