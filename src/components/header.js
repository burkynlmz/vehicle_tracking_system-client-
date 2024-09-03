import React from "react";
import { Link } from "react-router-dom";
import InputCar from "./InputCar";

const Header = () => {

    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">OSKA</span>
                <InputCar/>
            </div>
        </nav>
    )
};

export default Header;