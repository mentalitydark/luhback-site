import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

export const Text = styled(Typography)`
    flex: 1;
    text-align: center;
    color: #383838;
    font-weight: 600
`

export const Img = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #fff;
    padding: 7px 5px;
    margin: 15px 0;
    border-radius: 50px;
    cursor: pointer;
    background-color: #fff;
    width: clamp(300px, 100%, 500px);
`