import React from "react";

export function Intro(props) {
    const { data:{name, description} } = props;
    return <>
        <h1>{name}</h1>
        <p>{description}</p>
    </>
}
