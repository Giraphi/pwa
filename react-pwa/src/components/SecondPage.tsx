import React from "react";
import Page from "./style-components/Page";
import Windows from "../img/windows.webp";
import { StyledImage, StyledLink } from "./style-components/StyledImage";

export interface SecondPageProps {}

export default function SecondPage(props: SecondPageProps) {
    return (
        <Page>
            <StyledImage src={Windows} />
            <h1>Second Page</h1>
            <StyledLink href={"/pwa/first-page"}>Back Home</StyledLink>
        </Page>
    );
}
