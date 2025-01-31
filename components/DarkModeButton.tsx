import { WbCloudy, WbSunny } from '@mui/icons-material'
import { Box, Switch, Typography } from '@mui/material'
import React from 'react'

interface DarkModeButtonProps {
    isdarkMode: boolean
    toggleDarkMode: () => void
}

const DarkModeButton = ({ isdarkMode, toggleDarkMode }: DarkModeButtonProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1, // Add gap between elements
            }}
        >
            <WbSunny sx={{ color: isdarkMode ? 'text.secondary' : 'primary.main' }} />
            <Switch
                checked={isdarkMode}
                onChange={toggleDarkMode} // Use onChange instead of onClick
                color="primary"
            />
            <WbCloudy sx={{ color: isdarkMode ? 'primary.main' : 'text.secondary' }} />
            <Typography variant="body1" sx={{ ml: 1 }}>
                {isdarkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography>
        </Box>
    )
}

export default DarkModeButton