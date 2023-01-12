import React from "react";
import logo from "../logo.svg";
import "./Home.css";
import { StyledImage, StyledLink } from "./style-components/StyledImage";
import Sunset from "../img/sunset.jpeg";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <StyledImage src={Sunset} />
                <h1>Demo App</h1>
                <StyledLink href={"/pwa/first-page"}>First Page</StyledLink>
                <StyledLink href={"/pwa/second-page"}>Second Page</StyledLink>
            </header>
        </div>
    );
}

export default Home;
