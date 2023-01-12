import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledRoot = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export interface PageProps {
    children: ReactNode;
}

export default function Page(props: PageProps) {
    return <StyledRoot>{props.children}</StyledRoot>;
}
