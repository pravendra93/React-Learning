import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
const UsersList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useNavigate();
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
                           history(`/users/${user.id}`);
                    }} > {user.name} : {user.email} </li>
                })
            }
        </>
    )
}

export default  UsersList;