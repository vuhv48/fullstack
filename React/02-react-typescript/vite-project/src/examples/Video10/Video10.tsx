import { useState } from "react"

export interface User {
    name: string,
    age: number,
    city: string
};

const Video10 = () => {

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [city, setCity] = useState<string[]>(["Ha Noi", "Da Nang", "Ho Chi Minh"]);


    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const (users, setUsers) = useState<User[] | null>([
        {name: "Hagen1", age: 281, city: "Ha noi"},
        {name: "Hagen2", age: 282, city: "Da Nang"},
        {name: "Hagen3", age: 283, city: "Ho Chi Minh"}
    ]);

    return (
        <>
            <div>Video10</div>
        </>
    )
}

export default Video10