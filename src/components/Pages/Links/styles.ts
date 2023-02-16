import { Box, Typography, styled } from "@mui/material";
import _Image from "next/image";

export const Image = styled(_Image)`
  border-radius: 50%;
  border: 3px solid #fff
`

export const Container = styled(Box)`
    background-color: #383838;
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const Content = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 20px;
    padding-top: 50px;
    width: 50%;
`

export const Text = styled(Typography)`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`