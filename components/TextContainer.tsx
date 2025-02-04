'use client'
import { currentUserProps } from '@/types/commentInfo';
import { Box, Button, InputBase, useTheme } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface TextContainerProps {
    isReplyClicked: boolean;
    currentUser: currentUserProps;
    onSubmit: (content: string) => void;
    replyingTo?:string;
}
const TextContainer = ({ isReplyClicked, currentUser, onSubmit,replyingTo }: TextContainerProps) => {
    const theme = useTheme()
    const [content, setContent] = useState('')

    const handleSubmit = () => {
        if (content.trim()) {
            const finalContent = isReplyClicked && replyingTo
                ? `@${replyingTo} ${content}`
                : content;
            onSubmit(finalContent);
            setContent('');
        }
    };
    const getPlaceholder = () => {
        if (isReplyClicked && replyingTo) {
            return `Reply to @${replyingTo}...`;
        }
        return 'Add a comment...';
    };
    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "self-start",
                width: "100%",
                backgroundColor: theme.palette.background.default,
                marginBottom: 2,
                paddingY: 3,
                paddingX: 3,
                borderRadius: 3,
                borderColor: theme.palette.divider,
                gap: 2
            }}
        >
            <Box sx={{
                display: "flex",
                gap: "24px",
                flexDirection: "row",
            }}>

                <Image src={currentUser.image.webp} height={40} width={40} alt={currentUser.username} />
            </Box>
            <Box sx={{
                flex: 1,
                gap: "24px",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <InputBase
                    type='textbox'
                    placeholder={getPlaceholder()}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    sx={{
                        border: 2,
                        borderColor: theme.palette.divider,
                        borderRadius: 1,
                        color: theme.palette.text.primary, // Use theme primary text color
                        backgroundColor: theme.palette.background.default, // Use theme background color
                        height: 100,
                        minWidth: "100%",
                        alignItems: "self-start",
                        paddingY: 1,
                        paddingX: 2
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
                    <Button
                        onClick={handleSubmit}
                        sx={{
                            fontWeight: "600",
                            fontSize: "14px",
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.common.white,
                            paddingY: 1.5,
                            paddingX: 3.5,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark // Use theme primary dark color on hover
                            }
                        }
                        } > {isReplyClicked ? "REPLY" : "SEND"}</Button>
                </Box>
            </Box>
        </Box >)
}

export default TextContainer