import { useEffect, useState } from "react"
import { useParams } from "react-router";

export default function UsersDetail() {
    // const params = useParams()
    // console.log(params);
    const {id} = useParams()
    
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(result => setUser(result))
            .finally(() => setIsLoading(false))
    }, []);

    return setIsLoading ? (<p>Loading...</p>) : (
        <>
        <h2>{user.name}</h2>
        </>
    )
}