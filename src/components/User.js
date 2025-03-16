import React, { useState } from 'react';

const User = ({name, address}) => {
    // const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(2);
    return <div className="user-card">
        <h1>Name: {name}</h1>
        {/* <h1><span onClick={setCount(count+1)}>Count:</span>{count}</h1> */}
        {/* <h1><span onClick={setCount2(count2+1)}>Count2:</span> {count2}</h1> */}
        <p>Address: {address}</p>
    </div>
}

export default User;