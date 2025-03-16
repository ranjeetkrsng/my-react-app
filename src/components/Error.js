import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error">
            <h1>{err.status}: {err.statusText}</h1>
            <p>{err.data}</p>
        </div>
    )
}

export default Error;