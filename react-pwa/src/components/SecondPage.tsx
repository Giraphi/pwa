import React, { useState } from "react";
import Page from "./style-components/Page";
import Windows from "../img/windows.webp";
import { StyledImage, StyledLink } from "./style-components/StyledImage";

export interface SecondPageProps {}

export default function SecondPage(props: SecondPageProps) {
    const [ctr, setCtr] = useState(0);
    return (
        <Page>
            <h3 onClick={() => setCtr((x) => x + 1)}>Counter: {ctr}</h3>
            <StyledImage src={Windows} />
            <h1>Second Page</h1>
            <StyledLink to={"/"}>Back Home</StyledLink>
        </Page>
    );
}
