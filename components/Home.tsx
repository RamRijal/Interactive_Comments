
import data from "@/data.json"
import CommentDisplay from './CommentDisplay'
import { Box } from "@mui/material"
import TextContainer from "./TextContainer"

const HomePage = () => {
    return (
        <Box sx={{ width: 3/5, display: "flex", flexDirection: "column" }}>
            <Box sx={{  display: "flex", alignItems: "center", justifyItems: "center",marginTop:2 }}>
                <Box sx={{}} >
                    {data.comments.map((item) => {
                        return (<CommentDisplay key={item.id} id={item.id} comment={item.content} image={item.user.image.webp} name={item.user.username} duration={item.createdAt} score={item.score} isReply={false} replies={item.replies}/>)
                    })
                    }
                </Box>
            </Box>
            <TextContainer isReplyClicked={false} />
        </Box>
    )
}

export default HomePage