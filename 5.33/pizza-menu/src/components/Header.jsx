import React from "react";

export function Header() {
    const styles = {color: "red", fontSize: "48px"}
    return (
        <header className="header">
            <h1 style={styles}>Pizza menu React app</h1>
        </header>
    );
}
