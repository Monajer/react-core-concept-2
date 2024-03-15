import { useEffect, useState } from "react";


export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h2>Users: {users.length}</h2>
        </div>
    )
}

//?step 1 Declare a state to hold data
//?step 2 useEffect with call back and dependency array
//?step 3 use fetch to load data