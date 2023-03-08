import Head from "next/head";
import Link from "./Link";
import { Container, Image, Content, Title } from "./styles";
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
                  <Image alt='profile image' src={'/profile.jpg'} width={150} height={150} />
                  <Title>Luh Back</Title>
                </Box>
                <Link text='Telegram VIP' icon={'telegram'} href="https://t.me/LuhVipBot"/>
                <Link text='Telegram Free' icon={'telegram'} external={false} href="/telegram"/>
                <Link text='OnlyFans' icon={'onlyFans'} href="https://onlyfans.com/luhback"/>
                <Link text='Twitter' icon={'twitter'} href="https://twitter.com/luuhback"/>
                <Link text='Instagram' icon={'instagram'} href="https://www.instagram.com/luh.back/"/>
            </Content>
          </Container>
        </>
      )
}