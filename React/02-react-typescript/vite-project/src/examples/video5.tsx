import { useState } from "react";

const Video5 = (props) => {
    const {name} = props;
    const [age, setAge] = useState(0);
    return (
        <>
            <div>
                Hello {name} | age {age}
            </div>
        </>
    )
}

export default Video5;