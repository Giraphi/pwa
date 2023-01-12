import React from "react";
import Page from "./style-components/Page";
import Beach from "../img/beach.jpeg";
import { StyledImage, StyledLink } from "./style-components/StyledImage";

export interface FirstPageProps {}

export default function FirstPage(props: FirstPageProps) {
    return (
        <Page>
            <StyledImage src={Beach} />
            <h1>First Page</h1>
            <StyledLink to={"/"}>Back Home</StyledLink>
        </Page>
    );
}
