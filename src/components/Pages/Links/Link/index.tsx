import { Link as _Link, Text} from './styles'
import {
    Instagram,
    OnlyFans,
    Telegram,
    Twitter
} from '@/components/icons'

interface Icons {
    instagram: JSX.Element
    twitter: JSX.Element
    onlyFans: JSX.Element
    telegram: JSX.Element
}
interface LinkProps {
    text: string
    icon: keyof Icons
    href: string
    external?: boolean
}

export default function Link({text, icon, href, external = true}: LinkProps) {
    const icons:Icons = {
        instagram: <Instagram color='#fdfcfc' fontSize={50}/>,
        twitter: <Twitter color='#fdfcfc' fontSize={50} />,
        onlyFans: <OnlyFans color='#fdfcfc' fontSize={50} />,
        telegram: <Telegram color='#fdfcfc' fontSize={50} />
    }

    return (
        <_Link href={href} target={external ? '_blank' : '_self'} rel='noreferrer'>
            {icons[icon]}
            <Text>{text}</Text>
        </_Link>
    )
}