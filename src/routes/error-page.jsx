import { useRouteError } from "react-router-dom";
import React from 'react'

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an expected error has occured</p>
            <i>{error.statusText || error.message}</i>
        </div>
    )
}