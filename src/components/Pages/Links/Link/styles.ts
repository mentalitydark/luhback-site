import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

export const Text = styled(Typography)`
    flex: 1;
    text-align: center;
`

export const Img = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export const Row = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 400px;
    border: 1px solid #383838;
    padding: 7px 5px;
    margin: 10px 0;
    border-radius: 50px;
    cursor: pointer;
`