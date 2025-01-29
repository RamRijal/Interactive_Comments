import { Box, Button, InputBase } from '@mui/material'
import Image from 'next/image'

const TextContainer = () => {
    return (

        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "self-start",
            marginBottom: 2,
            width: "100%",
            justifyContent: "space-between",
            backgroundColor: "white",
            paddingY: 3,
            paddingX: 4,
            border: 2,
            borderRadius: 3,
        }}
        >
            <Box sx={{
                display: "flex",
                gap: "24px",
                flexDirection: "row",
            }}>
                <Image src={'/image-juliusomo.png'} height={40} width={40} alt='' />
            </Box>
            <Box sx={{
                display: "flex",
                gap: "24px",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <InputBase
                    type='textbox'
                    placeholder="Add a comment..."
                    sx={{
                        border: 2,
                        borderColor: "lightgray",
                        borderRadius: 1,
                        height: 120,
                        width: "660px",
                        alignItems:"self-start",
                        padding:2
                    }} />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2px",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Button sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        backgroundColor: "primary.main",
                        color: "white",
                        paddingY: 1.5,
                        paddingX: 3.5
                    }}>SEND</Button>
                </Box>
            </Box>
        </Box>)
}

export default TextContainer