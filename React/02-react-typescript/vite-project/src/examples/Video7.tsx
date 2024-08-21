import { useState } from "react";

interface User {
    name: string,
    age: number,
    city: string
}

const Video7 = () => {
    
    const [users, setUsers] = useState<User[]>([
        {name: "Hagen1", age: 281, city: "Ha noi"},
        {name: "Hagen2", age: 282, city: "Da Nang"},
        {name: "Hagen3", age: 283, city: "Ho Chi Minh"}
        ])
    

    return (
        <>
            <div>
                Video 7
            </div>
            <div>
                <ul>
                    {
                        users.map((user, index) => (
                            <li key={index}>{user.name}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Video7;