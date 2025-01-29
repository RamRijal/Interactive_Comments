
import data from "@/data.json"
import CommentDisplay from './CommentDisplay'
import { Box } from "@mui/material"
import TextContainer from "./TextContainer"

const HomePage = () => {
    return (
        <Box sx={{display:"flex",flexDirection:"column"}}>
            <Box sx={{ height: "100%", width: '900px', display: "flex", alignItems: "center", justifyItems: "center" }}>
                <Box sx={{}} >
                    {data.comments.map((item) => {
                        return (<CommentDisplay key={item.id} comment={item.content} image={item.user.image.webp} name={item.user.username} duration={item.createdAt} score={item.score} />)
                    })
                    }
                </Box>
            </Box>
            <Box sx={{}} >
                <TextContainer />
            </Box>
        </Box>
    )
}

export default HomePage