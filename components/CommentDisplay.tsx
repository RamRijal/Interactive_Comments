import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Votes from './Votes';
import Reply from '@/public/icon-reply.svg';

interface CommentDisplayProps {
    comment: string,
    image: string |
    {
        png: string;
        webp: string;
    },
    name: string,
    duration: string,
    score: number
}


const CommentDisplay = ({ image, name, duration, comment, score }: CommentDisplayProps) => {
    const imageUrl = typeof image === "string" ? image : image.webp || image.png;

    return (
        <Box sx={{ display: "flex", flexDirection: "row", backgroundColor: "white", paddingY: 3, paddingX: 2 ,border:2,borderRadius:3,marginBottom:2}}>
            <Votes initialScore={score} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", padding: "2", flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
                    <Box sx={{ display: "flex", gap: "24px", flexDirection: "row", alignItems: "center", }}>
                        <Image alt='' src={imageUrl} height={40} width={40} />
                        <Typography variant='h5' color='black'>{name}</Typography>
                        <Typography variant='h6' color='gray' >{duration}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", gap:"2px",alignItems:"center" }}>
                        <Box sx={{ height: "10px", width: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}><Image alt='' src={Reply} height={4} width={50} /></Box>
                        <Button sx={{ fontWeight: "700", fontSize: "16px" }}>Reply</Button>
                    </Box>
                </Box>
                <Typography variant='h5' color='black'>{comment}</Typography>
            </Box>
        </Box>
    )
}

export default CommentDisplay