import { useState } from "react";

interface User {
    name?: string,
    age?: number,
    city?: string
}

const Video13 = (props : User) => {

    const {name, age, city} = props;

    return (
        <>
            <div>
                Video 13
            </div>
            <div>
                {name}
            </div>
        </>
    )
}

export default Video13;