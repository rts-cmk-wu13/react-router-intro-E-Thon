import { useEffect, useState } from "react"
import { Link } from "react-router";

export default function Users() {
    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setUsers(result))
            .finally(() => setIsLoading(false))
    }, []);

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return setIsLoading ? (<p>Loading...</p>) : (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <Link to={`/users/ ${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    )
}