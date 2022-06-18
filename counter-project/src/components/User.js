import React, { useEffect, useState} from "react";
import axios from "axios";

const User = (props) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     useEffect(() => {
         const fetchUser = async() => {
            setLoading(true)
            const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.userId}`);
            setLoading(false);
            setUser(userData.data);
         }
         if(props.userId){
            fetchUser();
         }
     },[props.userId])

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