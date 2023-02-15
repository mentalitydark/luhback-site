import { Box, Typography } from "@mui/material"

interface LinkProps {
    text: string
}

export default function Link({ text }: LinkProps) {
    return (
        <Box>
            <Typography>{text}</Typography>
        </Box>
    )
}