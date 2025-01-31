
'use client'
import { Add, Remove } from '@mui/icons-material'
import { Box, Typography, useTheme } from '@mui/material'
import { useState } from 'react';

interface VotesProps {
    initialScore: number;
}
const Votes = ({ initialScore }: VotesProps) => {
    const [score, setScore] = useState(initialScore); // Manage score state internally
    const theme = useTheme()
    const addVotes = () => {
        setScore(score + 1);
    }

    const removeVotes = () => {
        setScore(score - 1);
    }


    return (
        <Box sx={{
            minWidth: 44, // More responsive width
            maxWidth: 60,
            height: 'auto',
            backgroundColor: theme.palette.background.paper,
            marginLeft: 1,
            marginRight: 2,
            gap: 6,
            borderRadius: 2
        }}>
            <Box onClick={addVotes} sx={{ padding: 1.5, cursor: "pointer" }}>
                <Add sx={{
                    color: theme.palette.text.disabled, fontWeight: "600", borderRadius: 1, '&:hover': {
                        backgroundColor: theme.palette.background.default // Use theme primary dark color on hover
                    }
                }} /></Box>
            <Typography
                variant='h5'
                sx={{
                    paddingX: 1,
                    display: "flex",
                    justifyContent: "center",
                    color: theme.palette.primary.main,
                    fontSize: "20px",
                    fontWeight: "600"
                }} >
                {score}
            </Typography>
            <Box onClick={removeVotes} sx={{ padding: 1.5, cursor: "pointer" }}>
                <Remove sx={{
                    color: theme.palette.text.disabled,
                    fontWeight: "600",
                    borderRadius: 1,
                    '&:hover': {
                        backgroundColor: theme.palette.background.default // Use theme primary dark color on hover
                    }
                }} /></Box>
        </Box>
    )
}

export default Votes