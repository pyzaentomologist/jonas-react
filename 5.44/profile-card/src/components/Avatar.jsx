import React from "react";

export function Avatar(props) {
    const { data } = props
    return <img src={data} alt="" className="avatar" />;
}