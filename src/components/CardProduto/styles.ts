import styled from "styled-components";

export const Card = styled.div`
    max-width: "18rem";
    margin: "10px";
    border: "1px solid #D2D2D2";
    text-align: "center";
    padding: "10px";
    display: "flex";
    flex-direction: "column";
    justify-content: "space-between";
`;

export const Title = styled.h3`
    color: ${({ color }: any) => color || "palevioletred"};
`;

export const ButtonDetails = styled.button`
    border-radius: "8px";
    background-color: ${({ backgroundColor }: any) =>
        backgroundColor || "white"};
    margin: 1em;
    color: ${({ color }: any) => color || "black"};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({ color }: any) => color || "black"};
`;

export const StrongText = styled.strong`
    color: "red";
`;

export const ParagrafoText = styled.p`
    text-decoration: "line-through";
`;
