import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Link from "./Link";
import { Container, Image } from "./styles";

export default function Links() {
    return (
        <>
          <Head>
            <title>Links</title>
            <meta name="description" content="Luh Back's Links" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Container>
            <Box>
                <Image alt='profile image' src={'/a.jpg'} width={200} height={200} />
                <Typography>Luh Back</Typography>
                <Link text='Telegram VIP' image="/a.jpg" alt="img"/>
                <Link text='Telegram FREE' image="/a.jpg" alt="img"/>
                <Link text='OnlyFans' image="/a.jpg" alt="img"/>
                <Link text='Twitter' image="/a.jpg" alt="img"/>
                <Link text='Instagram' image="/a.jpg" alt="img"/>
            </Box>
          </Container>
        </>
      )
}