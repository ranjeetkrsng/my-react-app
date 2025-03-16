import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <>
            <h1>About Us</h1>
            <p>You are in about us page.</p>
            <div className="user-container">
            <User name={"Ranjeet Singh"} address={"Bengaluru"} />
            <User name={"Rajesh Singh"} address={"DELHI"} />
            <User name={"Munna Singh"} address={"Mumbai"} />
            <User name={"Harish Singh"} address={"PATNA"} />
            <User name={"Dimple Singh"} address={"Jharkhand"} />
            <UserClass name={"Rahul Kumar Singh"} address={"Bihar"} />
            <UserClass name={"Santosh Kumar Singh"} address={"Bihar"} />
            <UserClass name={"Rajesh Kumar Singh"} address={"Bihar"} />
            </div>
        </>
    )
}

export default About;