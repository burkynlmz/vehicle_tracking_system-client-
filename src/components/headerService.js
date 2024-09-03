import React from "react";
import { Link } from "react-router-dom";
import InputService from "./InputService";

const HeaderService = () => {

    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">OSKA</span>
                <h1>
                <Link to="/">Anasayfa</Link>
                </h1>
                <InputService />
            </div>
        </nav>
    )
};

export default HeaderService;