import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function UserDetails() {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [userDetails, setDetails] = useState(null);
    const [addressDetails, setAddress] = useState(null);

    //redirects to previous page
    const previousPage = () => {
        navigate(-1);
    };

    // Get user and address information from API calls
    useEffect(() => {

        // Fetch user details
        fetch(`http://localhost:3001/user/${userId}`)
            .then(response => response.json())
            .then(json => setDetails(json))
            .catch(error => console.log(error));

        // Fetch address details
        fetch(`http://localhost:3001/address/${userId}`)
            .then(response => response.json())
            .then(json => setAddress(json))
            .catch(error => console.log(error));
    }, [userId]);

    //prevents a blank screen when clicking on users
    //waiting for data to be fetched
    if (userDetails === null || addressDetails === null) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 className = "user-details-title">User Details</h1>
            <hr></hr>
            <div className="user-information">
                <h3>User Information</h3>

                {/*maps user details and adds them to page dynamically*/}
                {Object.entries(userDetails).map(([key, value]) => (

                    //displays user information if value is not blank/null
                   value ? <p key={key}><strong>{key}:</strong> {value}</p> : null
                ))}
            </div>
            <div className="address-information">
                <h3>Address Information</h3>

                {/*maps user address details and adds them to page dynamically*/}
                {Object.entries(addressDetails).map(([key, value]) => (

                    //only displays address information if value is not blank/null
                    value ? <p key={key}><strong>{key}:</strong> {value}</p> : null
                ))}
            </div>

            <button onClick={previousPage}>Back</button>
        </div>
    );
}

export default UserDetails
