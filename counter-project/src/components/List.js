import React from "react";

const List  = () => {
    const listData = [
        {
            name:"Kumar",
            age:30,
            id:1
        },
        {
            name:"Sharma",
            age:32,
            id:2
        },
        {
            name:"Diggalia",
            age:30,
            id:3
        }
    ]

    return(
        <>
        <h1> List </h1>
        <div>
            <ul>
                {
                    listData.map((user) => {
                        return <li key={user.id}> {user.name} :   {user.age}</li>
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default List;