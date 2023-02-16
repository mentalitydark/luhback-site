import Head from "next/head";
import Link from "./Link";
import { Container, Image, Content, Text } from "./styles";
import { Box } from "@mui/material";

export default function Links() {
    return (
        <>
          <Head>
            <title>Links</title>
            <meta name="description" content="Luh Back's Links" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Container>
            <Content>
                <Box>
                  <Image alt='profile image' src={'/a.jpg'} width={100} height={100} />
                  <Text>Luh Back</Text>
                </Box>
                <Link text='Telegram VIP' image="/a.jpg" alt="img"/>
                <Link text='Telegram FREE' image="/a.jpg" alt="img"/>
                <Link text='OnlyFans' image="/a.jpg" alt="img"/>
                <Link text='Twitter' image="/a.jpg" alt="img"/>
                <Link text='Instagram' image="/a.jpg" alt="img"/>
            </Content>
          </Container>
        </>
      )
}