import {Text, Img, Container} from './styles'

interface LinkProps {
    text: string
    image: string
    alt: string
}

export default function Link({text, image, alt}: LinkProps) {
    return (
        <Container>
            <Img src={image} alt={alt} width={40} height={40} />
            <Text>{text}</Text>
        </Container>
    )
}