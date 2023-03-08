import { Link as _Link, styled, Typography } from "@mui/material";

export const Link = styled(_Link)`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #fdfcfc;
    padding: 7px 5px;
    margin: 15px 0;
    border-radius: 50px;
    cursor: pointer;
    background-color: #e3a6b0;
    width: clamp(300px, 100%, 500px);
    font-family: arial, sans-serif;
    &:hover {
        filter: brightness(0.9)
    }
`

export const Text = styled(Typography)`
    flex: 1;
    text-align: center;
    color: #fdfcfc;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 2px
`
