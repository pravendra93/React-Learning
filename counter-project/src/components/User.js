import React, { useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const User = (props) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const params = useParams();
     useEffect(() => {
         const fetchUser = async() => {
            setLoading(true)
            const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
            setLoading(false);
            setUser(userData.data);
         }
         if(params.userId){
            fetchUser();
         }
     },[params.userId])

    return (<>
        {
            loading ? "fetching in progress..." : <>
            {
                !user ? " No user Exists" : <> 
                <h1>User: {user.id}</h1>
                <p> Name : {user.name}</p>
                <p> Email : {user.email}</p>
                </>
            }            
            </>
        }
    </>)

};


export default User;