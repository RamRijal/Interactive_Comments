
import data from "@/data.json"
import CommentDisplay from './CommentDisplay'
import { Box } from "@mui/material"
import TextContainer from "./TextContainer"
import { useState } from "react"
import { CommentProps, ReplyProps } from "@/types/commentInfo"

const HomePage = () => {
    const [comments, setComments] = useState<CommentProps[]>(data.comments)
    const currentUser = data.currentUser

    const handleEditComment = (id: number, newContent: string, parentId?: number) => {
        setComments((prev) => prev.map((prevComment) => {
            if (parentId && prevComment.id===parentId) {
                return {
                    ...prevComment,
                    replies: prevComment.replies?.map((reply) =>
                        reply.id === id ? { ...reply, content: newContent } : reply
                    )
                };
            }
            else if (prevComment.id === id) {
                return { ...prevComment, content: newContent };
            }
            return prevComment;
        }));
    }


    const handleDeleteComment = (id: number, parentId?: number) => {
        setComments((prev) =>
            prev.map((comment) => {
                if (comment.id === parentId) {
                    return {
                        ...comment,
                        replies: comment.replies?.filter((reply) => reply.id !== id),
                    };
                }
                return comment;
            }).filter((comment) => comment.id !== id) // Only filter top-level comments
        );
    };

    const handleAddComment = (content: string, parentId?: number) => {
        if (parentId) {
            // Adding a reply
            setComments((prev) => prev.map((comment) => {
                if (comment.id === parentId) {
                    const newReply: ReplyProps = {
                        id: Date.now(),
                        content,
                        createdAt: "Just now",
                        score: 0,
                        replyingTo: comment.user.username,
                        user: currentUser
                    };
                    return {
                        ...comment,
                        replies: [...comment.replies, newReply]
                    };
                }
                return comment;
            }));
        } else {
            // Adding a new main comment
            const newComment: CommentProps = {
                id: Date.now(),
                content,
                createdAt: "Just now",
                score: 0,
                user: currentUser,
                replies: []
            };
            setComments(prev => [...prev, newComment]);
        }
    };


return (
    <Box sx={{ width: 3 / 5, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyItems: "center", marginTop: 2 }}>
            <Box sx={{}} >
                {comments.map((item) => {
                    return (<CommentDisplay
                        key={item.id}
                        id={item.id}
                        comment={item.content}
                        image={item.user.image.webp}
                        name={item.user.username}
                        duration={item.createdAt}
                        score={item.score}
                        isReply={false}
                        replies={item.replies}
                        currentUser={currentUser}
                        onDelete={handleDeleteComment}
                        onEdit={handleEditComment}
                        onAdd={handleAddComment}
                    />)
                })
                }
            </Box>
        </Box>
        <TextContainer
            onSubmit={(content) => handleAddComment(content)}
            currentUser={currentUser}
            isReplyClicked={false} />
    </Box>
)
}

export default HomePage