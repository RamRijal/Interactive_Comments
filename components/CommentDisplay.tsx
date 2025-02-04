'use client'
import DeleteImg from '@/public/icon-delete.svg';
import EditImg from '@/public/icon-edit.svg';
import ReplyImg from '@/public/icon-reply.svg';
import { currentUserProps, ReplyProps } from '@/types/commentInfo';
import { Box, Button, Modal, Stack, TextField, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import TextContainer from './TextContainer';
import Votes from './Votes';

interface CommentDisplayProps {
    id: number;
    comment: string;
    image: string | { png: string; webp: string };
    name: string;
    duration: string;
    score: number;
    replies?: ReplyProps[];
    isReply: boolean;
    replyingTo?: string;
    currentUser: currentUserProps;
    onDelete: (id: number, parentId?: number) => void;
    onEdit: (id: number, newContent: string, parentId?: number) => void;
    onAdd: (content: string, parentId?: number) => void;
}

const CommentDisplay = ({
    id,
    image,
    name,
    duration,
    comment,
    score,
    replies,
    isReply,
    // replyingTo,
    currentUser,
    onDelete,
    onEdit,
    onAdd
}: CommentDisplayProps) => {
    const [isReplyClicked, setIsReplyClicked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [updated, setUpdated] = useState(comment);
    const theme = useTheme();
    const imageUrl = typeof image === 'string' ? image : image.webp || image.png;
    const isCurrentUser = currentUser.username === name;

    const handleReplyClick = () => { setIsReplyClicked(!isReplyClicked); };
    const handleEditClicked = () => { setIsEditing(!isEditing); setUpdated(comment); };
    const handleAddClicked = (content: string, parentId?: number) => { onAdd(content, parentId); setIsReplyClicked(false); };
    const handleDeletePopup = () => { setIsDeletePopupOpen(!isDeletePopupOpen); };
    const closeDeletePopup = () => { setIsDeletePopupOpen(false); };
    const handleDeleteClicked = () => {
        onDelete(id, isReply ? id : undefined);
        setIsDeletePopupOpen(false);
    };
    const handleUpdateClicked = () => {
        onEdit(id, updated, isReply ? id : undefined);
        setIsEditing(false);
    };

    return (
        <>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    backgroundColor: theme.palette.background.default,
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
                            <Image alt={`${name}'s avatar`} src={imageUrl} height={40} width={40} />
                            <Typography variant='h5' color={theme.palette.text.primary} sx={{ fontSize: "19px", fontWeight: 600 }}>
                                {name}
                            </Typography>
                            {isCurrentUser && (
                                <Box sx={{ background: theme.palette.primary.main, paddingX: 1.5, paddingY: 0.5, borderRadius: 2 }}>
                                    <Typography variant='body1' sx={{ color: theme.palette.common.white, fontSize: "14px", fontWeight: "bold" }}>You</Typography>
                                </Box>
                            )}
                            <Typography variant='h6' color={theme.palette.text.secondary} sx={{ fontSize: "14px", fontWeight: 400 }}>
                                {duration}
                            </Typography>
                        </Box>

                        {isCurrentUser ? (
                            <Stack direction={'row'}>
                                <Box
                                    onClick={handleDeletePopup}
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
                                        <Image alt='delete icon' src={DeleteImg} height={50} width={50} />
                                    </Box>
                                    <Typography variant='body1'
                                        sx={{
                                            fontWeight: '700',
                                            fontSize: '14px',
                                            color: theme.palette.error.light
                                        }}
                                    >
                                        Delete
                                    </Typography>
                                </Box>
                                <Box
                                    onClick={handleEditClicked}
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
                                        <Image alt='edit icon' src={EditImg} height={50} width={50} />
                                    </Box>
                                    <Typography variant='body1'
                                        sx={{
                                            fontWeight: '700',
                                            fontSize: '14px',
                                            color: theme.palette.primary.main
                                        }}
                                    >
                                        {isEditing ? "Close" : "Edit"}
                                    </Typography>
                                </Box>
                            </Stack>
                        ) : (
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
                                    <Image alt='reply icon' src={ReplyImg} height={50} width={50} />
                                </Box>
                                <Typography variant='body1'
                                    sx={{
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    Reply
                                </Typography>
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        {isEditing ? (
                            <Box sx={{ display: 'flex', width: "100%", flexDirection: 'column', gap: 2 }}>
                                <TextField
                                    multiline
                                    value={updated}
                                    onChange={(e) => setUpdated(e.target.value)}
                                    sx={{
                                        width: '100%',
                                        border: 1,
                                        borderColor: theme.palette.divider,
                                        borderRadius: 1,
                                    }}
                                />
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    gap: 2
                                }}>
                                    <Button
                                        onClick={handleUpdateClicked}
                                        sx={{
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.common.white,
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.dark,
                                            }
                                        }}
                                    >
                                        Update
                                    </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Typography variant='body1' color={theme.palette.text.secondary}>
                                {comment}
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Stack>
            {isReplyClicked && (
                <Box sx={{ width: "100%" }}>
                    <TextContainer
                        replyingTo={name}
                        onSubmit={(content) => handleAddClicked(content, id)}
                        isReplyClicked={isReplyClicked}
                        currentUser={currentUser}
                    />
                </Box>
            )}

            {replies && replies.length > 0 && (
                <Stack
                    direction='column'
                    sx={{
                        display: 'flex',
                        justifyContent: "center",
                        alignContent: "center",
                        justifyItems: "center",
                        alignItems: "center",
                        width: "100%"
                    }}
                    alignItems='center'
                >
                    {replies.map((reply) => (
                        <Box key={reply.id} sx={{ display: 'flex', justifyContent: "space-between", paddingLeft: 8, gap: 8 }}>
                            <Box sx={{ display: 'flex', border: 2, width: '1px', borderColor: theme.palette.divider }}></Box>
                            <Box sx={{ display: 'flex', flexDirection: "column" }}>
                                <CommentDisplay
                                    id={reply.id}
                                    comment={reply.content}
                                    duration={reply.createdAt}
                                    image={reply.user.image}
                                    name={reply.user.username}
                                    score={reply.score}
                                    isReply={true}
                                    replyingTo={name}
                                    currentUser={currentUser}
                                    onDelete={onDelete}
                                    onEdit={onEdit}
                                    onAdd={onAdd}
                                />
                            </Box>
                        </Box>
                    ))}
                </Stack>
            )}
            <Modal
                open={isDeletePopupOpen}
                onClose={closeDeletePopup}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{
                    backgroundColor: theme.palette.background.paper,
                    padding: 3,
                    borderRadius: 2,
                    width: 335,
                    textAlign: 'left',
                }}>
                    <Typography variant="h6" sx={{ marginBottom: 2,fontWeight:700,color:theme.palette.text.disabled }}>
                        Delete Comment
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 3,width:'100%' }}>
                        Are you sure you want to delete this comment? This will remove the comment and cannot be undone.
                    </Typography>
                    <Stack direction="row" spacing={2} >
                        <Button
                            onClick={closeDeletePopup}
                            sx={{
                                paddingX: 4,
                                paddingY: 1,
                                backgroundColor: theme.palette.grey[600],
                                color: theme.palette.common.white,
                                '&:hover': {
                                    backgroundColor: theme.palette.grey[700],
                                }
                            }}
                        >
                            No,Cancel
                        </Button>
                        <Button
                            onClick={handleDeleteClicked}
                            sx={{
                                paddingX: 4,
                                paddingY: 1,
                                backgroundColor: theme.palette.error.light,
                                color: theme.palette.common.white,
                                '&:hover': {
                                    backgroundColor: theme.palette.error.main,
                                }
                            }}
                        >
                            Yes, Delete
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
};

export default CommentDisplay;