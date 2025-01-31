'use client'
import ReplyImg from '@/public/icon-reply.svg';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Votes from './Votes';
import { Reply } from '@/types/commentInfo';
import { useState } from 'react';
import TextContainer from './TextContainer';

interface CommentDisplayProps {
    id: number
    comment: string;
    image: string | { png: string; webp: string };
    name: string;
    duration: string;
    score: number;
    replies?: Reply[]; // Recursive type for replies
    isReply: boolean;
}

const CommentDisplay = ({ image, name, duration, comment, score, replies }: CommentDisplayProps) => {
    const [isReplyClicked, setIsReplyClicked] = useState(false);
    const theme = useTheme(); // Access the theme object
    const imageUrl = typeof image === 'string' ? image : image.webp || image.png;

    const handleReplyClick = () => {
        setIsReplyClicked(!isReplyClicked);
    }
    return (
        <> <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: theme.palette.background.default, // Use theme background color
                paddingY: 3,
                paddingX: 2,
                borderRadius: 3,
                marginBottom: 2,
                borderColor: theme.palette.divider,
            }}
        >
            <Votes initialScore={score} />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingY: 2,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'row', alignItems: 'center' }}>
                        <Image alt='' src={imageUrl} height={40} width={40} />
                        <Typography variant='h5' color={theme.palette.text.primary} sx={{ fontSize: "19px", fontWeight: 600 }}>
                            {name}
                        </Typography>
                        <Typography variant='h6' color={theme.palette.text.secondary} sx={{ fontSize: "14px", fontWeight: 400 }}>
                            {duration}
                        </Typography>
                    </Box>
                    <Box
                        onClick={handleReplyClick}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            cursor: "pointer",
                            padding: 1,
                            gap: 1,
                            borderRadius: 1,
                            '&:hover': {
                                opacity: "60%",
                                transition: 'ease-in-out',
                            }
                        }}>
                        <Box
                            sx={{
                                height: '8px',
                                width: '16px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',

                            }}
                        >
                            <Image alt='' src={ReplyImg} height={50} width={50} />
                        </Box>
                        <Typography variant='body1'
                            sx={{
                                fontWeight: '700',
                                fontSize: '14px',
                                color: theme.palette.primary.main// Use theme primary color
                            }}
                        >
                            Reply
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "95%" }}>
                    <Typography variant='body1' color={theme.palette.text.secondary}>
                        {comment}
                    </Typography>
                </Box>
            </Box>
        </Box >
            {isReplyClicked && (

                <Box sx={{ width: "100%" }}>
                    <TextContainer isReplyClicked={isReplyClicked} />
                </Box>
            )}
            {replies && replies.length > 0 && (

                <Stack direction='column' sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignContent: "center",
                    justifyItems: "center",
                    alignItems: "center",
                    width: "100%"
                }}
                    alignItems='center'>
                    {replies.map((reply) => (

                        <Box key={reply.id} sx={{ display: 'flex', justifyContent: "space-between", paddingLeft: 8, gap: 12 }}>
                            <Box sx={{ display: 'flex', border: 2, width:'1px', borderColor: theme.palette.divider, }}></Box>

                            <Box sx={{ display: 'flex', flexDirection: "column" }}>
                                <CommentDisplay
                                    id={reply.id}
                                    comment={reply.content}
                                    duration={reply.createdAt}
                                    image={reply.user.image} name={reply.user.username}
                                    score={reply.score}
                                    isReply={true} />
                            </Box>
                        </Box>
                    ))}
                </Stack>
            )}
        </>
    );
};

export default CommentDisplay;