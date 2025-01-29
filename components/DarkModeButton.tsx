import { WbCloudy, WbSunny } from '@mui/icons-material'
import { Box, Switch } from '@mui/material'
import React from 'react'

interface DarkModeButtonProps {
    isdarkMode: boolean
    toggleDarkMode: () => void
}

const DarkModeButton = ({ isdarkMode, toggleDarkMode }: DarkModeButtonProps) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: "center", justifyItems: "center", flexDirection: "row", alignItems: "center", gap: "3px" }}>
            <Box>
                <WbSunny sx={{ color: isdarkMode ? 'text.secondary' : 'yellow' }} />
            </Box>
            <Switch
                onChange={toggleDarkMode} // Use onChange instead of onClick
                color="primary"
                 />
            <Box>
                <WbCloudy sx={{ color: isdarkMode ? 'primary.main' :'text.secondary'  }} />
            </Box>
        </Box>
    )
}

export default DarkModeButton