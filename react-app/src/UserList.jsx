import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
    const navigate = useNavigate();
    const [users, setUser] = useState([]);

    //redirects user to corresponding user details page
    const goToUserDetails = (userId) => {
        navigate(`/user/${userId}`);
    }

    useEffect(() => {
        fetch('http://localhost:3001/user/')
        .then(response => response.json())
        .then(json => setUser(json))
        .catch(error => console.log(error))
    }, [])

    return(
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <ul key={user.id} onClick={() => goToUserDetails(user.id)}> {user.name}</ul>
            ))}
        </div>
    );
}

export default UserList