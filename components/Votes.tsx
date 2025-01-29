
'use client'
import { Add, Remove } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { useState } from 'react';

interface VotesProps {
    initialScore: number;
}
const Votes = ({ initialScore }: VotesProps) => {
    const [score, setScore] = useState(initialScore); // Manage score state internally

    const addVotes = () => {
        setScore(score + 1);
    }

    const removeVotes = () => {
        setScore(score - 1);
    }


    return (
        <Box sx={{ width: "60px", height: "110px", backgroundColor: "lightgray", marginX: 2, gap: 6, borderRadius: 2 }}>
            <Box onClick={addVotes} sx={{ padding: 1, cursor:"pointer" }}>
                <Add sx={{ color: "white", opacity: "90%", fontWeight: "600", borderRadius: 1 }} /></Box>
            <Typography
                variant='h5'
                sx={{
                    paddingX: 1,
                    display: "flex",
                    justifyContent: "center",
                    color:"primary.main",
                    fontSize:"20px",
                    fontWeight:"600"
                }} >
                {score}
            </Typography>
            <Box onClick={removeVotes} sx={{ padding: 1, cursor:"pointer" }}>
                <Remove sx={{ color: "white", opacity: "90%", fontWeight: "600", borderRadius: 1}} /></Box>
        </Box>
    )
}

export default Votes