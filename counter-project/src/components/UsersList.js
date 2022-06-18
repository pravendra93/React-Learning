import React, {useState, useEffect} from "react";
import axios from "axios"
const UsersList = ({setUser}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const users = await axios.get("https://jsonplaceholder.typicode.com/users");
            setLoading(false)
            setData(users.data)
        }
        fetchData();
    },[])

    return (
        <>
            <h1>Users </h1>
            {
                loading ? <p>loading...</p> : data.map((user) => {
                    return <li key={user.id} style={{cursor: "pointer"}} onClick={(e) => {
                            e.preventDefault();
                            setUser(user.id)
                    }} > {user.name} : {user.email} </li>
                })
            }
        </>
    )
}

export default  UsersList;