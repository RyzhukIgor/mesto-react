import React from "react";
import headerLogo from "../images/logo.svg";

export default function Header() {
    return (
        <div className="header">
            <img
                src={headerLogo}
                className="header__logo"
                alt="логотип Место"
            />
        </div>
    );
}
